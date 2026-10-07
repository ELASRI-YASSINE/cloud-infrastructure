const pool = require("../config/database");

const createOrder = async (product, price, userId) => {
    const result = await pool.query(
        `
        INSERT INTO orders (product, price, user_id)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [product, price, userId]
    );

    return result.rows[0];
};

const getOrders = async () => {
    const result = await pool.query(
        "SELECT * FROM orders ORDER BY id"
    );

    return result.rows;
};

module.exports = {
    createOrder,
    getOrders
};