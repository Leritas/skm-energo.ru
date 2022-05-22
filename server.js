const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req,res) => {
    res.render("index", {
        title: 'СКМ - Энергосервис'
    })
})

app.get('/manufacturers', (req,res) => {
    res.render('mfacrurers')
})

const productRouter = require('./routes/product')
app.use('/product', productRouter)

app.listen(80)