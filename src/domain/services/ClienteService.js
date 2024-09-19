import Cliente from "../entities/Cliente.js";

class ClienteService {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async createCliente(clienteData) {
    // Criação da entidade usuário
    const cliente = new Cliente(clienteData);

    // Validação da entidade (pode ser delegada para dentro da entidade)
    cliente.validate();

    // Verificar se o e-mail já está em uso
    const existingCliente = await this.clienteRepository.findByEmail(
      cliente.email
    );

    if (existingCliente) {
      throw new Error("O e-mail já está em uso.");
    }

    // Lógica adicional, como hashing da senha, pode ser feita aqui
    cliente.password = this.hashPassword(cliente.password);

    // Salvar o usuário no repositório
    return await this.clienteRepository
      .save(cliente)
      .then(async (ids) => {
        return await this.clienteRepository.findById(ids[0]);
      })
      .catch(() => {
        throw new Error("Erro ao criar o cliente");
      });
  }

  hashPassword(password) {
    // Lógica de hash da senha (pode ser movida para um utilitário separado)
    const salt = "randomSalt"; // Simplificado
    return password + salt; // Isso seria um hash real na prática
  }
}
export default ClienteService;
