// Dependencies
require('dotenv').config();
const path = require('path');
const faker = require('faker');
const jsonServer = require('json-server');

const PORT = process.env.API_PORT;
const server = jsonServer.create();
const router = jsonServer.router(path.join(`${__dirname}/../..`, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  const now = new Date();
  if (req.method === 'POST') {
    req.body.createdAt = now;
    req.body.updatedAt = now;
    req.body.avatar = faker.internet.avatar();
  }

  if (req.method === 'PUT') {
    req.body.createdAt = now;
    req.body.updatedAt = now;
  }
  next();
});

server.use(router);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} - Host: http://localhost:${PORT}`);
});
