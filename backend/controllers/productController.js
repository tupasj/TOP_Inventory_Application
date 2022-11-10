const productModelFile = require("../models/productModel");
const Product = productModelFile.productModel;

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        console.log(allProducts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getProducts
}