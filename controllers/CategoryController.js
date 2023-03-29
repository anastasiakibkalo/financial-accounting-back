import CategoryModel from "../models/Category.js";

export const create = async (req, res) => {
  try {
    const doc = new CategoryModel({
      title: req.body.title,
      value: req.body.value,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать категорию",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate("user").exec();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить категории",
    });
  }
};
