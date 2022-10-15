const { UserRepository } = require("../repositories/UserRepository.js");
const { UserCreateService } = require("../services/UserCreateService.js");
const { hash } = require("bcrypt");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    const hashPassword = await hash(password, 8);
    await userCreateService.execute({ name, email, password: hashPassword });

    return response.json({ name, email, password: hashPassword });
  }
}

module.exports = { UserController };