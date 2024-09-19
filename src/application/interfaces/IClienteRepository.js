class IClienteRepository {
  // Método que o repositório concreto deve implementar para salvar o usuário
  async save(cliente) {
    throw new Error("Método não implementado");
  }

  // Método para buscar usuário pelo ID (ou outros métodos)
  async findById(clienteId) {
    throw new Error("Método não implementado");
  }

  // Outros métodos que podem ser necessários, como update, delete, etc.
}

export default IClienteRepository;
