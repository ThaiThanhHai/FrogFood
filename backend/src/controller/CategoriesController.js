const Categories = require("../models/Categories");

class CategoriesController {
  // [POST] /categories/create
  async create(req, res, next) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    const image = req.body.image;
    console.log(id, name, image);
    const newCat = new Categories({ id, name, image });
    try {
      const savedCat = await newCat.save();
      res.status(200).json(savedCat);
      console.log("Create Successfully");
    } catch (error) {
      res.status(500).json(error);
      console.log("Create failure");
    }
  }

  // [GET] /categories
  async show(req, res, next) {
    try {
      const cats = await Categories.find();
      return res.status(200).json(cats);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /categories/update
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

  // [DELETE] /categories/delete/2:id
  async delete(req, res, next) {
    try {
      await Categories.deleteOne({ _id: req.params.id });
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = new CategoriesController();
