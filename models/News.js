const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
  imgUrl: {
    type: String
  },
  title: {
    type: String
  },
  txt: {
    type: String
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

module.exports = mongoose.model('News', newsSchema)