const express = require("express");
const router = express.Router();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql_v2", "root", "", {
	host: "localhost",
	// one of our supported dialects:
	// 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
	dialect: "mysql",
});

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();

module.exports = sequelize;
