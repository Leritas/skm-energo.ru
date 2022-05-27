const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render("index", {
        title: 'СКМ-Энергосервис',
        headLink: '<link rel="stylesheet" type="text/css" href="/styles/home.css">'
    })
})

router.get('/work-types', (req,res) => {
    res.render("index", {
        title: 'Виды работ | СКМ-Энергосервис',
        headLink: '<link rel="stylesheet" type="text/css" href="/styles/home.css">'
    })
})

router.get('/news', (req,res) => {
    res.render("index", {
        title: 'Новости | СКМ-Энергосервис',
        headLink: '<link rel="stylesheet" type="text/css" href="/styles/home.css">'
    })
})

router.get('/contacts', (req,res) => {
    res.render("index", {
        title: 'Контакты | СКМ-Энергосервис',
        headLink: '<link rel="stylesheet" type="text/css" href="/styles/home.css">'
    })
})

module.exports = router