const { Product } = require("../models");
exports.getAll = async (req, res, next) => {
  try {
    const all = await Product.find();
    // Знайти всі продукти
    res.json(all);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const { title } = req.query;
    // Знайти продукти по назві
    const productTitle = await Product.find({
      title: {
        $regex: title,
      },
    });
    if (!productTitle) {
      res.status(404).send("Not found");
      return;
    }

    res.json(productTitle);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description, imageUrl, price, category } = req.body;
    // Створити новий продукт
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Знайти продукт по id

    const product = await Product.findById(id);
    if (!product) {
      res.status(404).send("Not found");
      return;
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, price, category } = req.body;
    // Оновити існуючий продукт
    const product = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        imageUrl,
        price,
        category,
      },
      { new: true }
    );
    if (!product) {
      res.status(404).send("Not found");
      return;
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Видалити існуючий продукт
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).send("Not found");
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};
