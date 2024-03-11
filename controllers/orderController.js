const asyncHandler = require("express-async-handler")
const Order = require("../modals/Order")



exports.placeOrder = asyncHandler(async (req, res) => {

    // const { userId, holidayId } = req.body
    await Order.create(req.body)
    res.json({ message: "Holiday Place Success" })
})
exports.userOrderHistory = asyncHandler(async (req, res) => {

    // const { userId, holidayId } = req.body
    const result = await Order.find({ userId: req.body.userId }).populate("holidayId")
    res.json({ message: "Histry Fetch Success", result })
})






