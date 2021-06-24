const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: String,
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News'
  },
  txt: {
    type: String
  }
})

module.exports = mongoose.model('Comment', commentSchema)