const express = require("express");
const cors = require("cors");
const contactoRoutes = require("./routes/contactoRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacto", contactoRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "Backend funcionando correctamente"
    });
});

module.exports = app;