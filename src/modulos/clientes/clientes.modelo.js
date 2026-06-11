const knex = require('../../config/database');

const listar = async () => {
  return knex('clientes').select('*');
};

const criar = async (dados) => {
  return knex('clientes')
    .insert(dados)
    .returning('*');
};

const atualizar = async (id, dados) => {
  return knex('clientes')
    .where({ id })
    .update(dados)
    .returning('*');
};

const deletar = async (id) => {
  return knex('clientes')
    .where({ id })
    .del();
};

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
};

// Lida com o banco de dados, nao faz validação, nem regra de negócio, nem resposta HTTP.