import express from "express";

import HomeController from "../controllers/http/HomeController.js";
import ClienteController from "../controllers/http/ClienteController.js";

const router = express.Router();

// Rota inicial
router.get("/", new HomeController().index);
router.get("/error", new HomeController().error);

// Rotas de clientes
router.get("/cliente", new ClienteController().index);
router.post("/cliente", new ClienteController().store);
router.get("/cliente/:_id", new ClienteController().show);
router.put("/cliente/:_id", new ClienteController().update);
router.delete("/cliente/:_id", new ClienteController().destroy);

export default router;
