const Hapi = require('@hapi/hapi');
const addNoteHandler = require('./handler');
const routes = require('./routes');


const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '13.212.20.26',
    routes: {
        cors: {
           origin: ['*'],
        }
    },
  });

  server.route(routes);
   
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
    
init();
