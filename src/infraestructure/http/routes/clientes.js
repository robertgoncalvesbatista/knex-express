import express from "express";

const router = express.Router();

import ClienteController from "../controllers/ClienteController.js";

// Definição das rotas da API para o recurso "Cliente"

// Rota para buscar todos os clientes
router.get("/cliente", new ClienteController().index);

// Rota para criar um novo cliente
router.post("/cliente", new ClienteController().store);

// Rota para buscar um cliente pelo ID
router.get("/cliente/:_id", new ClienteController().show);

// Rota para atualizar um cliente pelo ID
router.put("/cliente/:_id", new ClienteController().update);

// Rota para deletar um cliente pelo ID
router.delete("/cliente/:_id", new ClienteController().destroy);

export default router;
