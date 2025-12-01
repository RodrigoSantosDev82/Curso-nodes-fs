const fs = require("fs");
const path = require("path");

// Caminho da pasta e do arquivo
const folderPath = path.join(__dirname, "test");
const filePath = path.join(folderPath, "test.txt");

// Criar uma pasta (se não existir)
fs.mkdir(folderPath, { recursive: true }, (error) => {
  if (error) {
    return console.log("Erro ao criar pasta:", error);
  }
  console.log("Pasta criada com sucesso!");

  // Criar um arquivo
  fs.writeFile(filePath, "hello node!\n", (error) => {
    if (error) {
      return console.log("Erro ao criar arquivo:", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar conteúdo ao arquivo
    fs.appendFile(filePath, "hello world", (error) => {
      if (error) {
        return console.log("Erro ao modificar arquivo:", error);
      }
      console.log("Arquivo modificado com sucesso!");
    });

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log(data);
      }
    );
  });
});
