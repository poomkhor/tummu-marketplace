const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: { type: String },
    },
    {
        timestamps: true,
    }
);

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        // remove shop schema for later development, currently refer shop by user
        // shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
        price: { type: Number, required: true },
        images: { type: Array, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
