'use strict';

var _hapi = require('hapi');

var Hapi = _interopRequireWildcard(_hapi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var server = new Hapi.Server();
server.connection({ host: 'localhost', port: 3000 });

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: 'public/index.html'
  }
});

server.route({
  path: '/{path*}',
  method: 'GET',
  handler: {
    directory: {
      path: './public',
      listing: false
    }
  }
});

server.route({
  path: '/Let/{path*}',
  method: 'GET',
  handler: {
    directory: {
      path: './Let',
      listing: false
    }
  }
});

server.start(function () {
  console.log('Listening on ' + server.info.uri);
});