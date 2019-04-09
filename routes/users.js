const express = require('express')
const route = express.Router()
const { User } = require ('../db')

route.get('/', (req,res) => {

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve users"
            })
        })

})

route.post('/',(req,res) => {
    //create a new users
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=> {
        res.status(501).send({
            error:"Could not add new user"})
    })
})


module.exports = route
