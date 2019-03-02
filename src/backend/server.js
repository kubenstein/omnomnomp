import path from 'path';
import express from 'express';
import SocketIo from 'socket.io';
import configureUser from './lib/configure-user';
import queryHandler from './lib/query-handler';

export default class Server {
  constructor(params) {
    this.serverPort = params.port || 3000;
    this.app = express();
    this.server = null;
  }

  start() {
    this.server = this.app.listen(this.serverPort);
    const io = SocketIo(this.server);

    this.app.use(express.static(path.resolve(`${__dirname}/frontend/`)));

    io.on('connection', (socket) => {
      const { handshake: { query: { email } } } = socket;
      configureUser({ email })
        .then(() => {
          this.configureSocket(socket);
          socket.emit('connected');
        })
        .catch(() => socket.disconnect());
    });
  }

  stop() {
    this.server.close();
    this.server = null;
  }

  // private

  configureSocket(socket) {
    socket.on('query', (query, sendBack) => {
      const { handshake: { query: { email } } } = socket;
      queryHandler(query, email).then(sendBack);
    });
  }
}
