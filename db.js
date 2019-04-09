const Sequelize = require('sequelize')
const db = new Sequelize ({
    dialect:'sqlite',
    storage: __dirname+'/database1.db'
})

// const Manufacturers = db.define('manufacturer',{
//     name:{
//         type: Sequelize.STRING(40),
//         allowNull: false
//     }

// })

const Product = db.define('product',{
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // quantity: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     defaultValue: 1
    // },
    manufacturer: {
        type: Sequelize.STRING(40),
        allowNull: false
    }
})

// Manufacturers.hasMany(Products)
// Products.belongsTo(Manufacturers)

const User = db.define('user',{
    name:{
        type: Sequelize.STRING(30),
        allowNull: false
    }
})





module.exports = {
    db,Product,
    // Manufacturers,
    User
}