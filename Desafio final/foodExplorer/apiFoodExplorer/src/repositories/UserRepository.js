const { connectionKnex } = require("../database/knex/index.js");

class UserRepository {
  //this function get the email
  async userExists(email) {
    const emailAlreadyExists = await connectionKnex("users").where({ email });
    return emailAlreadyExists;
  }

  //this function create an user
  async create({ name, email, password }) {
    const userId = await connectionKnex('users').insert({
      name,
      email,
      password
    });

    return { id: userId };
  }
}

module.exports = { UserRepository };