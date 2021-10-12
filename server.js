const express = require("express");
const app = express();

app.use(express.static("public"));

/*app.use((request, response) => {
  //response.status(404);
  response.sendFile(`${__dirname}/erro/404.html`);
})*/

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/:aulas", (request, response) => {
  response.sendFile(`${__dirname}/views/aulas/${request.params.aulas}.html`);
})

app.get("/exercicios/:exercicio", (request, response) => {
  response.sendFile(`${__dirname}/exercicios/${request.params.exercicio}.html`);
})

/*app.get("/exercicios1-tipos", (request, response) => {
  response.sendFile(__dirname + "/exercicios/exercicios1-tipos.html");
});*/

/*app.get("/default", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/algoritmo.html");
});

app.get("/tipos", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/tipos.html");
});

app.get("/var", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/variaveis.html");
});

app.get("/decisao", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/decisao.html");
});

app.get("/repeticao", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/repeticao.html");
});

app.get("/vetmat", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/vetmat.html");
});

app.get("/funcao", (request, response) => {
  response.sendFile(__dirname + "/views/aulas/funcao.html");
});*/

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
