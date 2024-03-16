const express = require('express');
const router = express.Router();
const shopsCtrl = require('../../controllers/shops');

// GET /api/shops
router.get('/', shopsCtrl.index);
// GET /api/shops/:id
router.get('/:id', shopsCtrl.show);
// POST /api/shops
router.post('/', shopsCtrl.create);
// PUT /api/shops/:id
router.put('/:id', shopsCtrl.update);
// DELETE /api/shops/:id
router.delete('/:id', shopsCtrl.delete);

module.exports = router;
