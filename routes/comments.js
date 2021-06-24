const { Router } = require('express')
const router = Router()
const methods = require('../controllers/index')

// router.get('/news/:id/comments', methods.methodsComment.getAllComments)

router.get('/news/:id/comments/:id', methods.methodsComment.getCommentById)

//router.get('/news/:id/comments', methods.methodsComment.getCommentNews)

router.post('/news/:id/comments', methods.methodsComment.addComment)

router.delete('/news/:id/comments/:id', methods.methodsComment.deleteComment)

router.patch('/news/:id/comments/:id', methods.methodsComment.changedComment)




module.exports = router;