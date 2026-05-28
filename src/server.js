require('dotenv').config();

const Hapi = require('@hapi/hapi');

const ClienteRotas = require('./modulos/clientes/clientes.rotas');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
  });

  server.route(ClienteRotas);

  await server.start();

  console.log(`Servidor rodando em ${server.info.uri}`);
};

init();