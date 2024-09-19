import ClienteService from "../../domain/services/ClienteService.js";

class CreateCliente {
  constructor(clienteRepository) {
    this.clienteService = new ClienteService(clienteRepository);
  }

  async execute(createClienteDTO) {
    // Validação básica dos dados pode ser feita aqui ou no serviço de domínio
    if (
      !createClienteDTO.name ||
      !createClienteDTO.email ||
      !createClienteDTO.password
    ) {
      throw new Error("Todos os campos são obrigatórios");
    }

    // Use o serviço de usuário para criar um novo usuário
    return await this.clienteService.createCliente(createClienteDTO); // Retorne o usuário criado
  }
}

export default CreateCliente;
