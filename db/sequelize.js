const { Sequelize } = require('sequelize');


const {
  DBName,
  DBUsername,
  DBPassword,
  DBHost,
  DBDialect,
  // DBPort,
} = process.env;

const db = new Sequelize(DBName, DBUsername, DBPassword, {
  host: DBHost,
  dialect: DBDialect,
  logging: false,
});



try {
  db.authenticate().then(async () => {
    await db.sync();
    await startBulk();
    console.log('Sequelize: Connected');
  });
} catch (error) {
  console.error('Error:', error);
}



global.db = db;

module.exports = db;
