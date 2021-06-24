const Category = require("../models/Category");

const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find();

    res.json(category);
  } catch (e) {
    console.log(e.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    res.json(category);
  } catch (e) {
    console.log(e.message);
  }
};

const addCategory = async (req, res) => {
  try {
    const category = await new Category({
      name: req.body.name,
    });
    category.save();

    res.json(category);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });

    res.json("Category deleted");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  deleteCategory,
};
