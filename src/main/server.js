import express from "express";

import ErrorHandler from "../infraestructure/config/ErrorHandler.js";

import Clientes from "../infraestructure/http/routes/clientes.js";
import Main from "../infraestructure/http/routes/main.js";

const app = express();

// Parser JSON
app.use(express.json());

// Rotas da api
app.use("/api", Main);
app.use("/api", Clientes);

// Middleware de tratamento de erros
app.use(new ErrorHandler().register);

// Inicia o servidor
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

export default app;
