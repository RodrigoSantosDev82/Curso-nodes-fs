// index.js

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
const startServer = require("./modules/express");

dotenv.config();

async function init() {
  try {
    await connectToDatabase(); // conecta ao MongoDB
    startServer(); // inicia o servidor Express
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error.message);
    process.exit(1);
  }
}

init();
