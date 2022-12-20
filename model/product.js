const sequelize = require("../config/apiSequelize");
const { Sequelize, DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
	// Model attributes are defined here
	users_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});
module.exports = Product;
