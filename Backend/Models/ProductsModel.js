const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productModel: {
        type: String,
        required: true
    },
    productPhoto: {
        type: Buffer
    },
    productDescription: {
        type: String
    },
    Postedate:{
        type:Date,
        default:Date.now
    }
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;