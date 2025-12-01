const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.qw5s3qc.mongodb.net/?appName=Cluster0`
    );
    console.log("Conexão com o banco realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o banco:", error);
  }
};

module.exports = connectToDatabase;
