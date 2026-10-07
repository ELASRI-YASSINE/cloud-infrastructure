const pool = require("../config/database");

const createUser = async (name, email) => {
    const result = await pool.query(
        `
        INSERT INTO users (name, email)
        VALUES ($1, $2)
        RETURNING *
        `,
        [name, email]
    );

    return result.rows[0];
};

const getUsers = async () => {
    const result = await pool.query(
        "SELECT * FROM users ORDER BY id"
    );

    return result.rows;
};

module.exports = {
    createUser,
    getUsers
};