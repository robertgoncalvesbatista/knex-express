import Controller from "../Controller.js";

class ClienteController extends Controller {
  constructor() {
    super();
  }

  async index(req, res) {
    const result = await this.db("clientes");

    return res.status(200).json(result);
  }

  async store(req, res) {
    const result = await this.db("clientes").insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(202).json(result);
  }

  async show(req, res) {
    const result = await this.db("clientes")
      .where("id", req.params._id)
      .first();

    if (!result) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }

    return res.status(200).json(result);
  }

  async update(req, res) {
    const found = await this.db("clientes").where("id", req.params._id).first();

    if (!found) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }

    const result = await this.db("clientes")
      .where("id", req.params._id)
      .update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

    return res.status(202).json(result);
  }

  async destroy(req, res) {
    const found = await this.db("clientes").where("id", req.params._id).first();

    if (!found) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }

    await this.db("clientes").where("id", req.params._id).del();

    return res.status(200).json({ message: "Registro deletado" });
  }
}

export default ClienteController;
