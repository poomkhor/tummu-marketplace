const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const product = require('./product');

const lineItemSchema = new Schema(
    {
        qty: { type: Number, default: 1 },
        item: { type: Schema.Types.ObjectId, ref: 'Product' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

// // Add an extPrice to the line item
// lineItemSchema.virtual('extPrice').get(function () {
//     // 'this' is bound to the lineItem subdocument
//     return this.qty * this.item.price;
// });

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        lineItems: [lineItemSchema],
        isPaid: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

// Add the following helpful virtuals to order documents
orderSchema.virtual('orderTotal').get(function () {
    const total = this.lineItems.reduce(
        (total, item) => total + item.extPrice,
        0
    );
    return Math.round(total * 100) / 100;
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function (userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)

    return this.findOneAndUpdate(
        // query
        { user: userId, isPaid: false },
        // update - in the case the order (cart) is upserted
        { user: userId },
        // upsert option creates the doc if it doesn't exist!
        { upsert: true, new: true }
    ).populate('lineItems.item');
};

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
    // 'this' keyword is bound to the cart (order doc)
    const cart = this;
    // Check if the item already exists in the cart
    const lineItem = cart.lineItems.find((lineItem) => {
        return lineItem.item._id.equals(itemId);
    });
    if (lineItem) {
        // It already exists, so increase the qty
        lineItem.qty += 1;
    } else {
        // Get the item from the "catalog"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const Product = mongoose.model('Product');
        const product = await Product.findById(itemId);
        // The qty of the new lineItem object being pushed in defaults to 1
        const lineItem = { qty: 1, item: product };
        cart.lineItems.push(lineItem);
    }
    // return the save() method's promise
    return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (itemId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line item in the cart for the menu item
    const lineItem = cart.lineItems.find((lineItem) =>
        lineItem.item._id.equals(itemId)
    );
    if (lineItem && newQty <= 0) {
        // Calling deleteOne(), removes itself from the cart.lineItems array
        // Note that video shows remove(), which has been removed 😀 in Mongoose v7
        lineItem.deleteOne();
    } else if (lineItem) {
        // Set the new qty - positive value is assured thanks to prev if
        lineItem.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
