const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('/create', newsController.create)
router.post('/delete', newsController.delete)


module.exports = router