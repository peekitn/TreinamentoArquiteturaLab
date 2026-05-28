const ClienteControlador = require('./clientes.controlador');

module.exports = [
  {
    method: 'GET',
    path: '/clientes',
    handler: ClienteControlador.listar
  },
  {
    method: 'POST',
    path: '/clientes',
    handler: ClienteControlador.criar
  },
  {
    method: 'PUT',
    path: '/clientes/{id}',
    handler: ClienteControlador.atualizar
  },
  {
    method: 'DELETE',
    path: '/clientes/{id}',
    handler: ClienteControlador.deletar
  }
];