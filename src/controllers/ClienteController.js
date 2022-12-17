const model = require("../models/Cliente")

const cliente = model({
    name: "clientes",
    tableName: "clientes",
});

module.exports = {
    async all(req, res) {
        try {
            const data = await cliente.findAll()

            return res.send(data)
        } catch (error) {
            return res.send(error);
        }
    },
    async create(req, res) {
        try {
            const data = await cliente.create(req.body)

            return res.send(data)
        } catch (error) {
            return res.send(error);
        }
    },
    async read(req, res) {
        try {
            const data = await cliente.find(req.params._id)
            console.log(data)

            return res.send(data)
        } catch (error) {
            return res.send(error);
        }
    },
    async update(req, res) {
        try {
            const data = await cliente.update(req.params._id, req.body)

            return res.send(data)
        } catch (error) {
            return res.send(error);
        }
    },
    async delete(req, res) {
        try {
            const data = await cliente.destroy(req.params._id)

            return res.send(data)
        } catch (error) {
            return res.send(error);
        }
    },
}