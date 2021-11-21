const express = require('express')
const router = express.Router()
const companyRouter = require('./company')
const userRouter = require('./user')

router.use(function timeLog(req, res, next) {
    console.log(
      "Time: ",
      new Date().toISOString() + " - " + req.method + " - " + req.originalUrl
    );
    next();
  });

router.use('/company', companyRouter)
router.use('/user', userRouter)

module.exports = router




