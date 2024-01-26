let connection = mysql.createConnection({
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "user_data",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

connection.connect(function (err, connection) {
  if (err) {
    console.log("Error connecting");
  } else {
    console.log("Connected");
  }
})

module.exports = connection;