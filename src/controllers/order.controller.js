const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
    try {
        const { product, price, userId } = req.body;

        const order = await orderService.createOrder(
            product,
            price,
            userId
        );

        res.status(201).json(order);
    } catch (error) {
        console.error(error);

        res.status(400).json({
            error: error.message
        });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();

        res.status(200).json(orders);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = {
    createOrder,
    getOrders
};