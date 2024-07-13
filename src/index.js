import express from "express";

import ErrorHandler from "./config/ErrorHandler.js";
import Router from "./config/Router.js";

const app = express();

// Parser JSON
app.use(express.json());

// Rotas da api
app.use("/api", Router);

// Middleware de tratamento de erros
app.use(new ErrorHandler().register);

// Inicia o servidor
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

export default app;
