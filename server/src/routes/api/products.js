const express = require('express');
const productsCtrl = require('../../controllers/products');
const router = express.Router();

// GET /api/products
router.get('/', productsCtrl.index);
// GET /api/products/:id
router.get('/:id', productsCtrl.show);

module.exports = router;
