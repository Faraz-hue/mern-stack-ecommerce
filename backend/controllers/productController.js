const Product = require("../models/productModel")





// CREATE Products -- Admin
exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}

// GET ALL Product
exports.getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({
        success: true,
        products,
    })
}

// UPDATE Product -- Admin

exports.updateProducts = async (req, res, next) => {
    let product = Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            sucess: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true,
        product
    })
}

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            sucess: false,
            message: "Product not found"
        })
    }
    await product.deleteOne()
    res.status(200).json({
        success: true,
        message: "Product Deleted successfully"
    })
}

exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            sucess: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })

}