import path from 'path';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import SocketIo from 'socket.io';
import { v2 as cloudinary } from 'cloudinary';
import configureUser from './lib/configure-user';
import queryHandler from './lib/query-handler';

const upload = multer({ dest: '/tmp/multer' });

export default class Server {
  constructor(params) {
    this.serverPort = params.port || 3000;
    this.app = express();
    this.server = null;
  }

  start() {
    this.server = this.app.listen(this.serverPort, '0.0.0.0');
    const io = SocketIo(this.server);

    this.app.use(express.static(path.resolve(`${__dirname}/../frontend/`)));
    this.app.use(bodyParser.json());

    this.app.post('/photos/', upload.single('photo'), (req, res) => {
      const imageFile = req.file.path;
      cloudinary.uploader.upload(imageFile)
        .then((image) => {
          res.send({ photoUrl: image.url });
        }).catch(() => {
          res.send(422, 'Unprocessable Entity');
        });
    });

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
