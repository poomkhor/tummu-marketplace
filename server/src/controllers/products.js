const Product = require('../models/product');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const product = await Product.find({})
        .sort('name')
        .populate('category')
        .exec();
    // re-sort based upon the sortOrder of the populated categories
    product.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(product);
}

async function show(req, res) {
    const item = await Product.findById(req.params.id);
    res.json(item);
}
