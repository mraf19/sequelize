const express = require("express");
const { send } = require("express/lib/response");
const Product = require("../model/product");

const getAllData = async (req, res) => {
	try {
		const product = await Product.findAll({});
		res.status(200).send({
			status: 200,
			message: "Data berhasil diambil",
			data: product,
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error.message,
		});
	}
};

const createData = async (req, res) => {
	try {
		const { users_id, name, price, stock, status } = req.body;
		try {
			const result = await Product.create({
				users_id,
				name,
				price,
				stock,
				status,
			});
			res.status(200).send({
				status: 200,
				message: "Product berhasil ditambahkan",
			});
		} catch (e) {
			res.status(500).send({
				status: 500,
				message: e.message,
			});
		}
	} catch (error) {}
};

const updateData = async (req, res) => {
	try {
		const id = req.params.id;
		const { users_id, name, price, stock, status } = req.body;
		const result = await Product.update(
			{ users_id, name, price, stock, status },
			{ where: { id: id } },
		);
		res.status(200).send({
			status: 200,
			message: "Product berhasil diupdate",
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error.message,
		});
	}
};

const deleteData = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Product.destroy({ where: { id: id } });
		res.status(200).send({
			status: 200,
			message: "Product berhasil dihapus",
		});
	} catch (error) {
		res.status(500).send({
			status: 500,
			message: error.message,
		});
	}
};

module.exports = { getAllData, createData, updateData, deleteData };
