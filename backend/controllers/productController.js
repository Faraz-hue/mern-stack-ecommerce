const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const ApiFeatures = require("../utils/appFeature")


// CREATE Products -- Admin
exports.createProduct = catchAsyncErrors(async (req, res) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
})


// GET ALL Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 5
    const productCount = await Product.countDocuments()

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage)
    const products = await apiFeature.query
    res.status(200).json({
        success: true,
        products,
        productCount
    })
})


// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product,

    })

})

// UPDATE Product -- Admin
exports.updateProducts = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
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
})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    await product.deleteOne()
    res.status(200).json({
        success: true,
        message: "Product Deleted successfully"
    })
})
