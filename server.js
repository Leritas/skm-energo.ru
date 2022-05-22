const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render("index", {
        title: 'СКМ - Энергосервис'
    })
})
const productRouter = require('./routes/product')
app.use('/product', productRouter)

app.listen(80)