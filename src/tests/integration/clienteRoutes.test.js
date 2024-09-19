const { expect } = require("chai");
const request = require("supertest");

const app = require("../../main/server"); // Aponte para o arquivo que inicia sua aplicação Express

describe("User Routes", () => {
  // Teste de criação de usuário (POST /clientes)
  describe("POST /api/clientes", () => {
    it("deve criar um novo usuário com sucesso", (done) => {
      const newUser = {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
      };

      request(app)
        .post("/api/clientes")
        .send(newUser)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("id");
          expect(res.body.name).to.equal("John Doe");
          expect(res.body.email).to.equal("johndoe@example.com");
          done();
        });
    });

    it("deve retornar erro 400 se os dados estiverem inválidos", (done) => {
      const invalidUser = {
        name: "",
        email: "invalid-email",
        password: "123",
      };

      request(app)
        .post("/api/clientes")
        .send(invalidUser)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("error");
          done();
        });
    });
  });

  // Teste de obtenção de usuário (GET /clientes/:id)
  describe("GET /api/clientes/:id", () => {
    it("deve retornar um usuário existente", (done) => {
      const userId = 1; // Certifique-se de ter um usuário com esse ID

      request(app)
        .get(`/api/clientes/${userId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("id", userId);
          expect(res.body).to.have.property("name");
          done();
        });
    });

    it("deve retornar erro 404 se o usuário não for encontrado", (done) => {
      const nonExistentUserId = 9999;

      request(app)
        .get(`/api/clientes/${nonExistentUserId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("message", "User not found");
          done();
        });
    });
  });

  // Testes para outras rotas, como PUT e DELETE, seguem o mesmo padrão...
});
