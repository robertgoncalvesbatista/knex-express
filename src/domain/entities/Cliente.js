class Cliente {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  // Métodos que encapsulam comportamentos específicos do usuário
  updatePassword(newPassword) {
    this.password = newPassword;
    this.updatedAt = new Date();
  }

  updateProfile({ name, email }) {
    this.name = name;
    this.email = email;
    this.updated_at = new Date();
  }

  // Validação básica da entidade
  validate() {
    if (!this.name || !this.email || !this.password) {
      throw new Error("Nome, email e senha são obrigatórios.");
    }

    if (!this.email.includes("@")) {
      throw new Error("Email inválido.");
    }
  }
}

export default Cliente;
