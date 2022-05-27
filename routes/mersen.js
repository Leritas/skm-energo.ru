const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`SELECT * FROM links WHERE parent=0`, (err, res) => {
            console.log(res.rows);
            done()
        })
    })
    res.render('mersen', {
        title: 'Mersen | СКМ-Энергосервис',
        renderAll:true
    })
})

router.get('/:childUrl', (req, res) => {
    let queryUrl = `SELECT * FROM links WHERE url='${req.params.childUrl}';`
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(queryUrl, (err, res) => {
            console.log(res.rows);
            done()
        })
    })
    res.render('mersen', {
        title: `${toTitle} | СКМ-Энергосервис`,
        renderAll: false
    })
})


module.exports = router