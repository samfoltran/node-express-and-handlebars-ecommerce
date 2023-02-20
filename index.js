const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

const database = require('./database/products.js')

app.get('/', (req, res) => {
    const products = database.getProducts()
    res.render('home', {products})
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = database.getProduct(id)
    res.render('product-details', {product})
})

app.listen(3000, () => console.log("Server is online."))