const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {type: String},
    price: {type: Number}
}, {timestamps: true})

const Product = mongoose.model("Product", productSchema)
module.exports = Product
