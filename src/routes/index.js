const express = require("express");
const router = express.Router();

const ClienteController = require("../controllers/ClienteController");

router.get("/home", (req, res) => {
  return res.send({ message: "hello wolrd" });
});

router.get("/cliente", ClienteController.all);
router.post("/cliente", ClienteController.create);
router.get("/cliente/:_id", ClienteController.read);
router.put("/cliente/:_id", ClienteController.update);
router.delete("/cliente/:_id", ClienteController.delete);

module.exports = router;
