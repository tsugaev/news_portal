const { Router } = require('express')
const router = Router()
const methods = require('../controllers/index')

router.get('/categories', methods.methodsCategory.getAllCategories)

router.get('/category/:id/', methods.methodsCategory.getCategoryById)

router.post('/category', methods.methodsCategory.addCategory)

router.delete('/category/:id', methods.methodsCategory.deleteCategory)



module.exports = router;