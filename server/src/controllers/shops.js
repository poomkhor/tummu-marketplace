const Shop = require('../models/shop');

module.exports = {
    index,
    show,
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
