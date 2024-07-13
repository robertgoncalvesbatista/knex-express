class HomeController {
  constructor() {}

  index(req, res) {
    return res.status(200).send({ message: "Hello, world!" });
  }

  // Uma rota que intencionalmente gera um erro
  error(req, res) {
    throw new Error("Algo deu errado!");
  }
}

export default HomeController;
