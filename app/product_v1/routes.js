const router = require('express').Router();
const productController = require('./controller');

router.get('/product', productController.index );
router.get('/product/:id', productController.view );
router.post('/product', productController.create );
router.put('/product/:id', productController.update );
router.delete('/product/:id', productController.remove );

module.exports = router;