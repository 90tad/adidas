const router = require("express").Router()
const Product = require("../models/product.model")
const prefix = require("./prefixes")
const {handleErr, handleRes} = require("./handler")

router.route(prefix.READ).get((req, res, next) => {
    Product.find()
        .then(handleRes(res))
        .catch(handleErr(res))
})

router.route(prefix.ADD)
    .post((req, res, next) => {

        const productName = req.body.productName
        const price = Number(req.body.price)
        const newProduct = new Product({productName, price})
        newProduct.save()
            .then(handleRes(res))
            .catch(handleErr(res))
    })

router.route(prefix.READ_BY_ID)
    .get((req, res, next) => {
        Product.findById(req.params.id)
            .then(handleRes(res))
            .catch(handleErr(res))
    })

router.route(prefix.READ)
    .delete((req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(() => res.json('Exercise deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/update/:id')
    .post((req, res) => {
        Product.findById(req.params.id)
            .then(product => {
                product.productName = req.body.productName
                product.price = Number(req.body.price)
                product.save()
                    .then(() => res.json('Product updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router
