const express = require('express');
const productsCtrl = require('../../controllers/products');
const router = express.Router();

// GET /api/products
router.get('/', productsCtrl.index);
// GET /api/products/:id
router.get('/:id', productsCtrl.show);
// POST /api/products
router.post('/', productsCtrl.create);
// PUT /api/products/:id
router.put('/:id', productsCtrl.update);
// DELETE /api/products/:id
router.delete('/:id', productsCtrl.delete);

module.exports = router;
