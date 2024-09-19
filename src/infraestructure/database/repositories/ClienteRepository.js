import IClienteRepository from "../../../application/interfaces/IClienteRepository.js";

// Esta classe implementa a interface IClienteRepository, conectando-se ao banco de dados
class ClienteRepository extends IClienteRepository {
  constructor(dbConnection) {
    super();
    this.db = dbConnection; // Aqui você pode ter a conexão com o banco (por exemplo, usando Sequelize, MongoDB, etc.)
  }

  async save(user) {
    // Lógica para salvar o usuário no banco de dados
    const id = await this.db("clientes").insert(user);

    return await this.db("clientes").where("id", id).first(); // Retorna o usuário salvo
  }

  async findById(clienteId) {
    // Lógica para buscar um usuário pelo ID
    return await this.db("clientes").where("id", clienteId).first();
  }
}

export default ClienteRepository;
