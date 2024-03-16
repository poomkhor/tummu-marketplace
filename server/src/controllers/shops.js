const Shop = require('../models/shop');

module.exports = {
    index,
    show,
    create: createShop,
    update: updateShop,
    delete: deleteShop
};

async function index(req, res) {
    const shop = await Shop.find({}).sort('name').populate('products').exec();
    // re-sort based upon the sortOrder of the populated categories
    res.json(shop);
}

async function show(req, res) {
    const item = await Shop.findById(req.params.id);
    res.json(item);
}

async function createShop(req, res) {
    const shop = await Shop.create(req.body);
    res.json(shop);
}

async function updateShop(req, res) {
    const updatedShop = await Shop.findByIdAndUpdate(req.params)
    res.json(updatedShop);
}

async function deleteShop(req, res) {
    const deletedShop = await Shop.findByIdAndDelete(req.params.id);
    res.json(deletedShop);
}