const { connection } = require("../database/knex/index.js")
const { AppError } = require("../utils/AppError");
const { DiskStorage } = require("../providers/DiskStorage.js");

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const user = await connection("users").where({ id: user_id }).first();
    if (!user) {
      throw new AppError("Somente usuarios autenticados podem alterar a foto de perfil", 401);
    }

    if (user.avatar) {
      await diskStorage.delete(user.avatar);
    }

    const filename = await diskStorage.save(avatarFilename);
    user.avatar = filename;

    await connection("users").update(user).where({ id: user_id });

    return response.json(user);
  }
}

module.exports = { UserAvatarController };