const express = require("express");
const app = express();

// Parser JSON
app.use(express.json())

// Rotas
app.use("/api", require("./routes/index"));

// Servidor
app.listen(8080, () => {
    console.log("Servidor rodando! http://127.0.0.1:8080");
});