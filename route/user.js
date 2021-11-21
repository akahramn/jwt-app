const express = require('express')
const router =  express.Router()
const userService = require('../service/user-service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


router.post('/register', async (req, res) => {
    bcrypt.hash(req.body.password, 10 ,async (err, hash) => {
        if(err){
            console.log('Password dont get')
        }else {
            req.body.password = hash
            const user =  await userService.save(req.body)
            res.send(user)
        }
    })


    
    
})

router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    const user = await userService.findBy('email', email)
    if(user){
        bcrypt.compare(password, user[0].password, (err, result) => {
            if(result){
                const accessToken = jwt.sign({email: email, role: user.role}, `${process.env.accessTokenSecret}`)
                res.json({
                    accessToken
                })
            }else {
                res.send('Username or password incorrect');
            }
        })
    }
})




module.exports = router