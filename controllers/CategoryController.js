import CategoryModel from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const doc = new CategoryModel({
      title: req.body.title,
      icon: req.body.icon,
      amount: req.body.amount,
      budget: req.body.budget,
      currency: req.body.currency,
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

export const getUserCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate("user").exec();
    res.json(categories);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить категории",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const deletedItem = await CategoryModel.findOneAndDelete({
      _id: categoryId,
    });

    if (!deletedItem) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }

    //   if (err) {
    //     console.log(err);
    //     res.status(500).json({
    //       message: "Не удалось удалить категорию",
    //     });

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
