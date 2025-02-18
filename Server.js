const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Servir arquivos estáticos (como HTML, CSS, JS)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Página inicial
app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo ao Speed Demos Archive de Roblox!</h1>");
});

// Rota para ranking (exemplo)
app.get("/ranking", (req, res) => {
    res.send("<h1>Aqui estarão os recordes!</h1>");
});

// Rota para submissão de speedrun
app.post("/submeter-run", (req, res) => {
    const { game, category, videoUrl, userEmail } = req.body;

    // Aqui você pode processar os dados (armazenar no banco de dados ou logar no console)
    console.log("Nova Run Submetida:");
    console.log(`Jogo: ${game}`);
    console.log(`Categoria: ${category}`);
    console.log(`URL do vídeo: ${videoUrl}`);
    console.log(`E-mail do usuário: ${userEmail}`);

    // Resposta de sucesso
    res.send("<h1>Run submetida com sucesso!</h1>");
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:3000/`);
});
