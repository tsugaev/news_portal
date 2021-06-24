const { Router } = require('express')
const router = Router()
const methods = require('../controllers/index')

router.get('/news', methods.methodsNews.getAllNews)

router.get('/', methods.methodsNews.getAllNews)

router.get('/category/:id/news', methods.methodsNews.getNewsCategoryById)

router.get('/news/:id', methods.methodsNews.getOneNews)

router.post('/news', methods.methodsNews.addNews)

router.delete('/news/:id', methods.methodsNews.deleteNews)

router.patch('/news/:id', methods.methodsNews.changedNews)




module.exports = router;