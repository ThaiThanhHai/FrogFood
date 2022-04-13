const Categories = require("../models/Categories");

class CategoriesController {
  // [GET] /categories
  async show(req, res, next) {
    try {
      const cats = await Categories.find();
      return res.status(200).json(cats);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /update
  async update(req, res, next) {
    try {
      const updatedCats = await Categories.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCats);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] /categories/create
  async create(req, res, next) {
    const newCat = new Categories(req.body);
    try {
      const savedCat = await newCat.save();
      res.status(200).json(savedCat);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // [GET] /courses/store
}

module.exports = new CategoriesController();
