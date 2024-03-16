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
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        // shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
        price: { type: Number, required: true },
        img: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
