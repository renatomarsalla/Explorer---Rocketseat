const { UserCreateServices } = require("./UserCreateServices");
const { UserRepositoryMemory } = require("../repositories/UserRepositoryMemory");

const { AppError } = require("../utils/AppError");

describe("UserCreateServices", () => {

  let userRepositoryMemory = null;
  let userCreateServices = null;

  beforeEach(() => {
    userRepositoryMemory = new UserRepositoryMemory();
    userCreateServices = new UserCreateServices(userRepositoryMemory);
  });

  it("user create must be create", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com.br",
      password: "123"
    };

    // const userRepositoryMemory = new UserRepositoryMemory();
    // const userCreateServices = new UserCreateServices(userRepositoryMemory);
    const userCreated = await userCreateServices.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("user cannot be create if the email already exists", async () => {
    const user = {
      name: "User test 1",
      email: "user@email.com.br",
      password: "123"
    };

    const user2 = {
      name: "User test 2",
      email: "user@email.com.br",
      password: "456"
    };

    // const userRepositoryMemory = new UserRepositoryMemory();
    // const userCreateServices = new UserCreateServices(userRepositoryMemory);

    await userCreateServices.execute(user);
    await expect(userCreateServices.execute(user2)).rejects.toEqual(new AppError("Este email ja está em uso"));

  });
});