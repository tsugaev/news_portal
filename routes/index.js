const { Router } = require("express");
const router = Router();
const categoriesRouter = require("./categories");
const newsRouter = require("./news");
const commentRouter = require('./comments')

router.use(categoriesRouter);
router.use(newsRouter);
router.use(commentRouter)


module.exports = router;
