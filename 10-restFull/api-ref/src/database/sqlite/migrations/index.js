
const { createUsers } = require("./createUsers");
const { sqliteConnection } = require("../../sqlite/index");

async function migrateRun() {
  const schemas = [createUsers].join('');

  const database = await sqliteConnection();
  database.exec(schemas).catch((error) => console.error(error));
  // sqliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error));


}

module.exports = { migrateRun };
// export { migrateRun };