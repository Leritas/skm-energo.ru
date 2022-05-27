const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('products', {
        title: 'Продукция и Производители | СКМ-Энергосервис'
    })
})

router.get('/casram', (req,res) => {
    res.render('casram', {
        title: 'Casram | Компоненты подвижного состава (Switzerland)| СКМ-Энергосервис'
    })
})

router.get('/lampar', (req,res) => {
    res.render('lampar', {
        title: 'Lampar | Каталог промышленных щёток (Italy) | СКМ-Энергосервис'
    })
})



module.exports = router