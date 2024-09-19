const productcontroller = require('../controllers/productcontroller.js');
const router = require('express').Router(); // Inisialisasi router dengan benar

// Definisikan rute
router.post('/addproduct', productcontroller.addproduct);

router.get('/allproducts', productcontroller.getAllproducts);

router.get('/published', productcontroller.getpublishedproduct);

router.get('/:id', productcontroller.getOneproduct);

router.put('/:id', productcontroller.updateProduct);

router.delete('/:id', productcontroller.deleteproduct);

module.exports = router; // Ekspor router dengan benar

