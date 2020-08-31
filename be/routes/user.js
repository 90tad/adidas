const router = require("express").Router()
const User = require("../models/user.model")
const prefix = require("./prefixes")
const {handleErr, handleRes} = require("./handler")

router.route("/").get((req, res, next) => {
    User.find()
        .then(handleRes(res))
        .catch(handleErr(res))
})

router.route(prefix.ADD)
    .post((req, res, next) => {
        const username = req.body.username
        const password = req.body.password
        const newProduct = new User({username, password})
        newProduct.save()
            .then(handleRes(res))
            .catch(handleErr(res))
    })

module.exports = router
