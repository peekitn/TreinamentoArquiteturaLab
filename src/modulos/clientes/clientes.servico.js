const ClienteModelo = require('./clientes.modelo');

const listar = async (reply) => {
  const clientes = await ClienteModelo.listar();

  return reply.response({
    message: null,
    data: clientes,
    errors: []
  }).code(200);
};

const criar = async (reply, payload) => {
  const cliente = await ClienteModelo.criar(payload);

  return reply.response({
    message: 'Cliente criado com sucesso',
    data: cliente,
    errors: []
  }).code(201);
};

const atualizar = async (reply, id, payload) => {
  const cliente = await ClienteModelo.atualizar(id, payload);

  return reply.response({
    message: 'Cliente atualizado com sucesso',
    data: cliente,
    errors: []
  }).code(200);
};

const deletar = async (reply, id) => {
  await ClienteModelo.deletar(id);

  return reply.response({
    message: 'Cliente removido com sucesso',
    data: null,
    errors: []
  }).code(200);
};

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
};