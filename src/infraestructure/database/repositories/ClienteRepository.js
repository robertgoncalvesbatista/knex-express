import IClienteRepository from "../../../application/interfaces/IClienteRepository.js";

// Esta classe implementa a interface IClienteRepository, conectando-se ao banco de dados
class ClienteRepository extends IClienteRepository {
  constructor(dbConnection) {
    super();
    this.db = dbConnection; // Aqui você pode ter a conexão com o banco (por exemplo, usando Sequelize, MongoDB, etc.)
  }

  async save(user) {
    // Lógica para salvar o cliente no banco de dados
    return await this.db("clientes").insert(user); // Retorna o cliente salvo
  }

  async findById(clienteId) {
    // Lógica para buscar um cliente pelo ID
    return await this.db("clientes").where("id", clienteId).first();
  }

  async findByEmail(email) {
    // Lógica para buscar um cliente pelo email
    return await this.db("clientes").where("email", email).first();
  }
}

export default ClienteRepository;
