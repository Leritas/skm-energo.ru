const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req,res) => {
    res.render("index", {
        title: 'СКМ-Энергосервис',
        headLink: '<link rel="stylesheet" type="text/css" href="/styles/home.css">'
    })
})

app.get('/casram', (req,res) => {
    res.render('casram', {
        title: 'Casram | Компоненты подвижного состава (Switzerland)| СКМ-Энергосервис'
    })
})
app.get('/lampar', (req,res) => {
    res.render('lampar', {
        title: 'Lampar | Каталог промышленных щёток (Italy) | СКМ-Энергосервис'
    })
})



const productRouter = require('./routes/product')
app.use('/product', productRouter)

app.listen(80)