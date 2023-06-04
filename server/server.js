// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log(`Running server on http://localhost:${3000}`);
});
