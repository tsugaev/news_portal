const News = require("../models/News");
const Comment = require('../models/Comment')


const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find().lean();
    res.render("home", {
      news: allNews,
    });
  } catch (e) {
    console.log(e.message);
  }
};

// const getNewsById = async (req, res) => {
//   try {
//     const news = await News.findById(req.params.id).lean();
//     res.render("newsPost", news);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

const getOneNews = async (req, res) => {
  try {
    const commentList = await Comment.find({
      newsId: req.params.id
    }).lean();

    const newsPost = await News.findById(req.params.id).lean();

    const news = { post: newsPost, comments: commentList}

    res.render('newsPost', news);
  } catch (e) {
    console.log(e.message)
  }
}

const getNewsCategoryById = async (req, res) => {
  try {
    const newsByCat = await News.find({ categoryId: req.params.id }).lean();
    res.render("categoryNews", {
      news: newsByCat,
    });
  } catch (e) {
    console.log(e.message);
  }
};




const addNews = async (req, res) => {
  try {
    const news = await new News({
      imgUrl: req.body.imgUrl,
      title: req.body.title,
      txt: req.body.txt,
      categoryId: req.body.categoryId,
    });
    news.save();
    res.json(news);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteNews = async (req, res) => {
  try {
    await News.deleteOne({ _id: req.params.id });

    res.json("News deleted");
  } catch (e) {
    console.log(e.message);
  }
};

const changedNews = async (req, res) => {
  try {
    await News.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
        },
      }
    );
    res.json("News changed");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllNews,
  addNews,
  deleteNews,
  changedNews,
  getNewsCategoryById,
  getOneNews
};
