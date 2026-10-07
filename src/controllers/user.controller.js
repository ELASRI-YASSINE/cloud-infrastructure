const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await userService.createUser(name, email);

        res.status(201).json(user);
    } catch (error) {
        console.error(error);

        res.status(400).json({
            error: error.message
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = {
    createUser,
    getUsers
};