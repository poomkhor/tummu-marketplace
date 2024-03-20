const express = require('express');
const productsCtrl = require('../../controllers/products');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Set up Multer middleware to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/')); // Specify the destination directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    },
});

const upload = multer({ storage: storage });

// GET /api/products
router.get('/', productsCtrl.index);
// GET /api/products/:id
router.get('/:id', productsCtrl.show);
// POST /api/products
router.post('/', productsCtrl.create);
//POST /api/products/uploads
router.post('/uploads', upload.array('images', 10), productsCtrl.upload);
// PUT /api/products/:id
router.put('/:id', productsCtrl.update);
// DELETE /api/products/:id
router.delete('/:id', productsCtrl.delete);

module.exports = router;
