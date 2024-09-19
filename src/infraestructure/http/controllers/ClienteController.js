import CreateClienteDTO from "../../../application/dtos/CreateClienteDTO.js";
import CreateCliente from "../../../application/use_cases/CreateCliente.js";

import ClienteRepository from "../../database/repositories/ClienteRepository.js";

import Database from "../../config/Database.js";

import Controller from "./Controller.js";

const clienteRepository = new ClienteRepository(new Database());

class ClienteController extends Controller {
  constructor() {
    super();
  }

  async index(req, res) {
    try {
      const result = await this.db("clientes");

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const createClienteDTO = CreateClienteDTO.fromRequest(req.body);

      // Instancia o caso de uso e executa a lógica
      const createCliente = new CreateCliente(clienteRepository);
      const result = await createCliente.execute(createClienteDTO);

      return res.status(202).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const result = await this.db("clientes")
        .where("id", req.params._id)
        .first();

      if (!result) {
        return res.status(404).json({ message: "Registro não encontrado" });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const found = await this.db("clientes")
        .where("id", req.params._id)
        .first();

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
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const found = await this.db("clientes")
        .where("id", req.params._id)
        .first();

      if (!found) {
        return res.status(404).json({ message: "Registro não encontrado" });
      }

      await this.db("clientes").where("id", req.params._id).del();

      return res.status(200).json({ message: "Registro deletado" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default ClienteController;
