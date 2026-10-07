const orderModel = require("../models/order.model");

const createOrder = async (product, price, userId) => {
    if (!product || !price || !userId) {
        throw new Error("Product, price and userId are required");
    }

    return await orderModel.createOrder(product, price, userId);
};

const getOrders = async () => {
    return await orderModel.getOrders();
};

module.exports = {
    createOrder,
    getOrders
};