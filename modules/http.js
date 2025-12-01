const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Home Page</h1>");
  } else if (req.url === "/users") {
    const users = [
      { name: "Santos", email: "clp.free@mail" },
      { name: "Jua", email: "jua@com" },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("<h1>Página não encontrada</h1>");
  }
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
