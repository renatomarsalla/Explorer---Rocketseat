
const { AppError } = require("../utils/AppError");
const { sqliteConnection } = require("../database/sqlite/index");
const { hash, compare } = require("bcrypt");



class UserController {
  /*
  index - GET para listar varios registros
  show - GET para exibir um registro especifico
  create - POST para criar um registro
  update - PUT para atulizar um registro
  delete - DELETE para remover um registro
  */

  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (checkUserExists) {
      throw new AppError("Este email ja está em uso");
    }

    const hashedPassword = await hash(password, 8);

    await database.run("INSERT INTO users (name,email,password) VALUES (?,?,?)", [name, email, hashedPassword]);

    return response.status(201).json({ email });

  }

  async update(request, response) {
    const { name, email, currentPassword, newPassword } = request.body;
    // const { id } = request.params;
    const user_id = request.user.id;

    const database = await sqliteConnection();
    // const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);
    console.log(user, user.name);

    if (!user) {
      throw new AppError("Usuario não encontrado");
    }

    const userUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
    if (userUpdateEmail && userUpdateEmail.id !== user.id) {
      throw new AppError("Email ja esta em uso");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.name;

    if (newPassword && !currentPassword) {
      throw new AppError("Voce precisa informar a senha antiga");
    }

    if (newPassword && currentPassword) {
      const checkOldPassword = await compare(currentPassword, user.password);
      if (!checkOldPassword) {
        throw new AppError("Senha antiga não esta correta");
      }

      user.password = await hash(newPassword, 8);
    }

    await database.run(`UPDATE users SET 
      name = ?,
      email = ?,
      password = ?,
      upload_at = DATETIME('now')
      WHERE id = ?`, [user.name, user.email, user.password, user_id]
      // WHERE id = ?`, [user.name, user.email, user.password, id]
    );

    return response.status(200).json();
  }
}

module.exports = { UserController }
// export { UserController }