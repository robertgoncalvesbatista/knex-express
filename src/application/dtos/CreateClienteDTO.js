class CreateClienteDTO {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Métodos estáticos para transformar entrada bruta (request body) em DTO
  static fromRequest(body) {
    const { name, email, password } = body;
    return new CreateClienteDTO({ name, email, password });
  }
}

export default CreateClienteDTO;
