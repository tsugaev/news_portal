const Comment = require("../models/Comment");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();

    res.json(comments);
  } catch (e) {
    console.log(e.message);
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    res.json(comment);
  } catch (e) {
    console.log(e.message);
  }
};


// const getCommentNews = async (req, res) => {
//   try{
//     const comment = await News.aggregate([
//       {
//         $lookup:
//           {
//             from: "comments",
//             localField: "_id",
//             foreignField: "newsId",
//             as: 'comments_news'
//           }
//       }
//     ])
//     res.json(comment)
//   } catch (e) {
//     console.log(e.message)
//   }
// }

//[ { $match : { author : "dave" } } ]
// const getCommentNews = async (req, res) => {
//   try{
//     const comment = await News.aggregate([
      // {
      //   $match: {
      //     _id: req.params.id
      //   },
      //   $lookup:
      //     {
      //       from: "comments",
      //       localField: "_id",
      //       foreignField: "newsId",
      //       as: 'comments_news'
      //     }
      // }

    //])
//     res.json(comment)
//   } catch (e) {
//     console.log(e.message)
//   }
// }













const addComment = async (req, res) => {
  try {
    const comment = await new Comment({
      user: req.body.user,
      newsId: req.params.id,
      txt: req.body.txt,
    });

    comment.save();

    res.redirect(`/news/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
  }
};

const changedComment = async (req, res) => {
  try {
    await Comment.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ...req.body,
        },
      }
    );
    res.json("Comment changed");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id });

    res.json("Comment deleted");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  addComment,
  changedComment,
  deleteComment,
};
