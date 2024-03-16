const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
        price: { type: Number, required: true },
        img: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = productSchema;
