import request from "supertest";
import { expect } from "chai";

import Database from "../../infraestructure/config/Database.js";
import app from "../../main/server.js";

const knex = new Database();

describe("Cliente Routes", () => {
  before(async function () {
    // Limpar a tabela antes dos testes
    await knex("clientes").del();
  });

  // Teste de criação de cliente (POST /cliente)
  describe("POST /api/cliente", () => {
    it("deve criar um novo cliente com sucesso", (done) => {
      const newCliente = {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "123456",
      };

      request(app)
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

      request(app)
        .post("/api/cliente")
        .send(invalidCliente)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property("error");
          done();
        });
    });

    after(async function () {
      // Limpar a tabela após os testes
      await knex("clientes").del();
    });
  });

  // Teste de obtenção de cliente (GET /cliente/:id)
  describe("GET /api/cliente/:id", () => {
    before(async function () {
      // Limpar a tabela antes dos testes
      await knex("clientes").del();

      await knex("clientes").insert({
        id: 1,
        name: "robert",
        email: "robert@gmail.com",
        password: "12345678",
      });
    });

    it("deve retornar um cliente existente", (done) => {
      const clienteId = 1; // Certifique-se de ter um cliente com esse ID

      request(app)
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

      request(app)
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

    after(async function () {
      // Limpar a tabela após os testes
      await knex("clientes").del();
    });
  });

  // Testes para outras rotas, como PUT e DELETE, seguem o mesmo padrão...
});
