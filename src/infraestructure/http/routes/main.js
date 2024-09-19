import express from "express";

const router = express.Router();

import HomeController from "../controllers/HomeController.js";

// Rota inicial
router.get("/", new HomeController().index);

// Rota para mostrar erros
router.get("/error", new HomeController().error);

export default router;
