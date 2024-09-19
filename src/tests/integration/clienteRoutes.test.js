import request from "supertest";
import { expect, use, should } from "chai";
import chaiHttp from "chai-http";

use(chaiHttp);
should();

describe("Cliente Routes", () => {
  // Teste de criação de cliente (POST /cliente)
  describe("POST /api/cliente", () => {
    it("deve criar um novo cliente com sucesso", (done) => {
      const newCliente = {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
      };

      request("http://localhost:3000")
        .post("/api/cliente")
        .send(newCliente)
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
      const invalidCliente = {
        name: "",
        email: "invalid-email",
        password: "123",
      };

      request("http://localhost:3000")
        .post("/api/cliente")
        .send(invalidCliente)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("error");
          done();
        });
    });
  });

  // Teste de obtenção de cliente (GET /cliente/:id)
  describe("GET /api/cliente/:id", () => {
    it("deve retornar um cliente existente", (done) => {
      const clienteId = 1; // Certifique-se de ter um cliente com esse ID

      request("http://localhost:3000")
        .get(`/api/cliente/${clienteId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("id", clienteId);
          expect(res.body).to.have.property("name");
          done();
        });
    });

    it("deve retornar erro 404 se o cliente não for encontrado", (done) => {
      const nonExistentClienteId = 9999;

      request("http://localhost:3000")
        .get(`/api/cliente/${nonExistentClienteId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property(
            "message",
            "Registro não encontrado"
          );
          done();
        });
    });
  });

  // Testes para outras rotas, como PUT e DELETE, seguem o mesmo padrão...
});
