const route = require('express').Router()

const { Product } = require('../db')

route.get ('/',(req,res) => {
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retreive products"
            })
        })
})


route.post ('/',(req,res) => {
    Product.create({
        name:req.body.name,
        price: req.body.price,
        manufacturer: req.body.manufacturer
    }).then((product) => {
        res.status(201).send(product)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})


module.exports = route