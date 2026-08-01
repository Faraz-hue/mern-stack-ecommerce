const express = require("express")
const { getAllProducts, createProduct, updateProducts, deleteProduct, getProductDetails } = require("../controllers/productController")
const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/products/new").post(createProduct)
router.route("/product/:id").put(updateProducts)
    .delete(deleteProduct).get(getProductDetails)

module.exports = router