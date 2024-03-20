const Product = require('../models/product');

module.exports = {
    index,
    show,
    create: createProduct,
    update: updateProduct,
    delete: deleteProduct,
    upload: uploadProduct,
};

async function index(req, res) {
    const product = await Product.find({});
    // .sort('name')
    // .populate('category')
    // .exec();
    // re-sort based upon the sortOrder of the populated categories
    // product.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(product);
}

async function show(req, res) {
    const item = await Product.findById(req.params.id);
    res.json(item);
}

async function createProduct(req, res) {
    const product = await Product.create(req.body);
    res.json(product);
}

async function uploadProduct(req, res) {
    req.body.images = req.files.map((file) => {
        return { name: file.originalname };
    });

    const product = await Product.create(req.body);
    console.log(req.body); // Output request body to console
    res.json({
        message: 'Product images uploaded successfully',
        files: req.files,
    });
}

async function updateProduct(req, res) {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id);
    res.json(updatedProduct);
}

async function deleteProduct(req, res) {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
}
