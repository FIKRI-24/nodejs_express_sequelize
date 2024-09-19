
const db  = require('../models')
const { where } = require('sequelize')


// create main model 
const Product = db.products
const review = db.reviews

//main work 

// 1. create produk

const addproduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        descriptions: req.body.descriptions,
        published: req.body.published ? req.body.published : false
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}



// 2. get all products 

const getAllproducts = async (req, res) => {
    try {
        let products = await Product.findAll({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


// 3. get singels  products 

// 3. Get single product 
const getOneproduct = async (req, res) => {
    try {
        const id = req.params.id;  // Mengambil ID dari request parameter
        const product = await Product.findOne({ where: { id: id } });  // Menggunakan model Product
        
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


// 4 update product
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        
        // Update produk menggunakan model Product
        const [updated] = await Product.update(req.body, { where: { id: id } });

        if (updated) {
            // Ambil produk yang diperbarui
            const updatedProduct = await Product.findOne({ where: { id: id } });
            res.status(200).send(updatedProduct);
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// 3. delete product

const deleteproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Product.destroy({ where: { id: id } });

        if (deleted) {
            res.status(200).send({ message: "Product deleted successfully" });
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


// 6 published product


const getpublishedproduct = async ( req, res) => {
    const products = await product.findAll({ where: {published: true}})
    
    res.status(200).send(products)
}


module.exports = {
    addproduct,
    getAllproducts,
    getOneproduct,
    updateProduct,
    deleteproduct,
    getpublishedproduct,
}