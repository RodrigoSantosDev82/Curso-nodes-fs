const path = require("path");

// Basename Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do Diretorio Atual
console.log(path.dirname(__filename));

// Extensão do Arquivo
console.log(path.extname(__filename));

// Criar um obeo PAth
console.log(path.parse(__filename));

// untar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
