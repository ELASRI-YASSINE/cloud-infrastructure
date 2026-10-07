const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes")
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "User & Order API is running"
    });
});
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
const PORT = 3000;

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});