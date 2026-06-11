// Recebe a requisição, chama o serviço e captura erros. Não faz query, não usa knex e nem acessa banco.
// req representa a reuisicao do cliente e o reply eh o retorno  do cliente
const ClienteServico = require('./clientes.servico');

const listar = async (req, reply) => {
  try {
    return await ClienteServico.listar(reply);
  } catch (error) {
    return reply.response({
      message: 'Erro interno',
      data: null,
      errors: [error.message]
    }).code(500);
  }
};

const criar = async (req, reply) => {
  try {
    return await ClienteServico.criar(
      reply,
      req.payload
    );
  } catch (error) {
    return reply.response({
      message: 'Erro interno',
      data: null,
      errors: [error.message]
    }).code(500);
  }
};

const atualizar = async (req, reply) => {
  try {
    return await ClienteServico.atualizar(
      reply,
      req.params.id,
      req.payload
    );
  } catch (error) {
    return reply.response({
      message: 'Erro interno',
      data: null,
      errors: [error.message]
    }).code(500);
  }
};

const deletar = async (req, reply) => {
  try {
    return await ClienteServico.deletar(
      reply,
      req.params.id
    );
  } catch (error) {
    return reply.response({
      message: 'Erro interno',
      data: null,
      errors: [error.message]
    }).code(500);
  }
};

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
};