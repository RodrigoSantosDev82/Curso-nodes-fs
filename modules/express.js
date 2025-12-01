// modules/express.js
const express = require("express");
const UserModel = require("../src/models/user.model");

function startServer() {
  const app = express();
  app.use(express.json());

  // rotas
  app.get("/users", async (req, res) => {
    try {
      const users = await UserModel.find({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

  app.post("/users", async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

module.exports = startServer;
