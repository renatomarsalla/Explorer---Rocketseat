const { hash } = require("bcrypt");

const { AppError } = require('../utils/AppError.js');

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const userExists = await this.userRepository.userExists(email);
    //check the length array
    if (userExists.length === 0) {
      const userCreated = await this.userRepository.create({ name, email, password });
      return userCreated;
    }

    //if email already exists show a internal message 
    if (userExists) {
      throw new AppError("This email already is being used, try other email");
    }

    //below is created the user
    const hashPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({ name, email, password: hashPassword });

    return userCreated;
  }

}

module.exports = { UserCreateService };