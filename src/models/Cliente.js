module.exports = ({
    knex = require('../config/db.mysql2'),
    name = '',
    tableName = '',
    selectableProps = [],
    timeout = 1000
}) => {
    const query = knex.from(tableName)

    const findAll = () => {
        return knex.select(selectableProps)
            .from(tableName)
            .timeout(timeout)
    }

    const create = props => {
        delete props.id // Não cria o id por engano

        console.log(props)

        return knex.insert(props)
            .returning(selectableProps)
            .into(tableName)
            .timeout(timeout)
    }

    const find = filters => {
        return knex.select(selectableProps)
            .from(tableName)
            .where(filters)
            .timeout(timeout)
    }

    const update = (id, props) => {
        delete props.id // Não atualiza o id por engano

        return knex.update(props)
            .from(tableName)
            .where({ id })
            .returning(selectableProps)
            .timeout(timeout)
    }

    const destroy = id => {
        return knex.del()
            .from(tableName)
            .where({ id })
            .timeout(timeout)
    }

    return {
        query,
        name,
        tableName,
        selectableProps,
        timeout,
        findAll,
        create,
        find,
        update,
        destroy
    }
}