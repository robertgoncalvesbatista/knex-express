require("dotenv").config();

const express = require("express");
const server = express();

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

// Parser JSON
server.use(express.json());

// Rotas
server.use("/api", require("./routes"));

// Servidor
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
