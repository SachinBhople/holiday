const { getPublicTours, getTourDetails } = require("../controllers/publicController")

const router = require("express").Router()

router

    .get("/tours", getPublicTours)
    .get("/tours/:id", getTourDetails)

module.exports = router