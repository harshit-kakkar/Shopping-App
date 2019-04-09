const express = require('express')
const app = express()
const { db } = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

const routes = {
    // manufacturers: require('./routes/manufacturers'),
    products: require('./routes/products'),
    users: require('./routes/users.js')
    
}

// app.use('/manufacturers' , routes.manufacturers)
app.use('/products' , routes.products)
app.use('/users' , routes.users)



db.sync({alter: true})
    .then(() => {
        app.listen (7777)
    })
