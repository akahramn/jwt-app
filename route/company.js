const express = require('express')
const authenticateJWT = require('../middleware/checkauth')

const router =  express.Router()

router.get('/', (req, res) => {
    res.send('HOME PAGE')
})


router.get('/secret', authenticateJWT ,(req, res) => {
    res.json({
        secret: 'SECRET PAGE'
    })
})


module.exports = router