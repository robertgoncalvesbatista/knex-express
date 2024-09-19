import IClienteRepository from "../interfaces/IClienteRepository.js";

class CreateCliente {
  constructor(clienteRepository) {
    // Espera um repositório que implemente IClienteRepository
    if (!(clienteRepository instanceof IClienteRepository)) {
      throw new Error("clienteRepository deve implementar IClienteRepository");
    }

    this.clienteRepository = clienteRepository;
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

    // Criar entidade de usuário (poderia incluir validação adicional aqui)
    const user = {
      name: createClienteDTO.name,
      email: createClienteDTO.email,
      password: createClienteDTO.password,
    };

    // Salvar usuário usando o repositório (infraestrutura desconhecida)
    return await this.clienteRepository.save(user);
  }
}

export default CreateCliente;
