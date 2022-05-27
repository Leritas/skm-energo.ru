const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

const homeRouter = require('./routes/home')
app.use('/', homeRouter)

const mersenRouter = require('./routes/mersen')
app.use('/products/mersen', mersenRouter)

const productRouter = require('./routes/products')
app.use('/products', productRouter)

app.listen(80)