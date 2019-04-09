
function fetchproducts (done) {
    $.get('/products' , function ( data) {
        done(data)
    })
}

function addProduct (name,manuf,price,done) {
    $.post('/products' , {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

function createProductCard(product){
    return $(
        `<div class="col-3 card mx-2 p-4 ">
            <h2 class="product-name">${product.name}</h2>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col p-3 m-3">
                     Rs. ${product.price}
                </div>
                <button class="col-3 btn btn-primary m-3">+</button>
            </div>
         </div>`
    )
}


