// Створити схему та модель Product з вказаними полями
/*
  title: String, required, 3-255 length
  description: String
  imageUrl: String, default(https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg)
  price: Number, required, min 0.1
  category: String, required, enum(Furniture, Tech, Food, Sports)
*/
const { Schema, model } = require("mongoose");
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default:
      "https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg",
  },
  price: {
    type: Number,
    required: true,
    min: 0.1,
  },
  title: {
    type: String,
    required: true,
    enum: ["Furniture, Tech, Food, Sports"],
  },
});

module.exports = model("product", ProductSchema);
