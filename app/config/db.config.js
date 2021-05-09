module.exports = {
    HOST: "us-cdbr-east-03.cleardb.com",
    USER: "bb74e4b303c521",
    PASSWORD: "b310cc8c",
    DB: "heroku_c05f1d39b4ae5a5",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };