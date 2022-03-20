const mongoose = require('mongoose');

const product = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['cocktail', 'appetizer'] },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    others: {
        vegan: { type: Boolean, default: false },
        spicy: { type: Boolean, default: false },
    },
});

const Product = mongoose.model('product', product);

module.exports = Product;
