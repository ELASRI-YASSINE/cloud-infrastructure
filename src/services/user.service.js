const userModel = require("../models/user.model");

const createUser = async (name, email) => {
    if (!name || !email) {
        throw new Error("Name and email are required");
    }

    return await userModel.createUser(name, email);
};

const getUsers = async () => {
    return await userModel.getUsers();
};

module.exports = {
    createUser,
    getUsers
};