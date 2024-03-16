const express = require('express');
const router = express.Router();
const shopsCtrl = require('../../controllers/shops');

// GET /api/shops
router.get('/', shopsCtrl.index);
// GET /api/shops/:id
router.get('/:id', shopsCtrl.show);

module.exports = router;
