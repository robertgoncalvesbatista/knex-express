import Database from "../config/Database.js";

class Controller {
  constructor() {
    this.db = new Database();

    // Binding methods to ensure `this` refers to the class instance
    this.index = this.index.bind(this);
    this.store = this.store.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async index(req, res) {
    // Implementar no ClienteController
  }

  async store(req, res) {
    // Implementar no ClienteController
  }

  async show(req, res) {
    // Implementar no ClienteController
  }

  async update(req, res) {
    // Implementar no ClienteController
  }

  async destroy(req, res) {
    // Implementar no ClienteController
  }
}

export default Controller;
