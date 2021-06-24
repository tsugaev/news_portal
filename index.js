//подключение библиотек
const mongoose = require('mongoose')
const express = require('express')
const hbs = require('express-handlebars')
const cors = require('cors')
const indexRouter = require('./routes/index')


const app = express()

app.set('view engine', 'handlebars')
app.engine('handlebars', hbs())

mongoose.connect('mongodb+srv://Tashu:160798i@cluster0.son5z.mongodb.net/news_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('Database connected...')
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(indexRouter)
app.use(cors())




app.listen(3001, ()=> {
  console.log('Server connected...')
})



