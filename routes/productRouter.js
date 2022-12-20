const router = require("express").Router();
const productController = require("../controller/productController");

router.get("/", productController.getAllData);
router.post("/", productController.createData);
router.patch("/:id", productController.updateData);
router.delete("/:id", productController.deleteData);

module.exports = router;
