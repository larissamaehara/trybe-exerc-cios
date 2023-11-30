// Importa a bibilioteca express, cria uma variável para instanciar o express e exporta essa variável

const express = require('express');

// Importação dos módulos fd e path:
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
// Função assíncrona para utilizar o módulo fs.
// Utilizaremos o path para garantir que o arquivo com nossos filmes seja encontrado sem problemas.
// usaremos esse caminho de arquivo em todas as rotas, vamos definir uma variável para guardar seu valor e reutilizá-la sempre que necessário.
// Para fazer leitura do JSON, usaremos o método readFile
// Retornaremos os dados lidos convertidos em objeto:

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não poder ser lido :${error}`);
  }
};
// Criando um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query; // Desestruture o q do query da requisição.
    const movies = await readFile(); // chama a função de leitura do JSON.
    // Se o parâmetro q for passado na requisição, filtre o array de objetos movies pelo filme que contenha o valor do parâmetro q.
    if (q) {
      const filteredMovies = movies.filter((element) =>
        element.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Criando um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    // método find no array de objetos movies, buscando pelo filme cuja propriedade id seja igual ao id recebido como parâmetro de rota na requisição (req), que capturamos por meio do req.params.id.
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    // método status para enviar o código de resposta HTTP 200 e retornar a atividade em formato json correspondente ao id solicitado pelo cliente como resposta.
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Criando um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    // método status para enviar o código de resposta HTTP 200 e retornando o array de objetos movies em formato json com todos os filmes para o cliente como resposta.
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Criando um endpoint do tipo POST com a rota /movies, que possa adicionar um novo filme ao JSON.
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile(); // chama a função de leitura do JSON.
    // objeto contendo as informações do corpo da requisição e adicione uma chave id.
    const newMovie = {
      // acessamos a chave id do ultimo objeto do array de maneira dinâmica e incrementamos + 1 em seu valor
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    // utilizando o modulo fs e para garantir que não teremos problemas, utilizaremos também o express.json.
    await fs.writeFile(moviesPath, allMovies);
    // método status para enviar o código de resposta HTTP 201 e retornando o novo filme em formato json para o cliente como resposta.
    res.status(200).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Criando um endpoint do tipo PUT com a rota /movies/:id, que possa editar um filme do JSON por id.
app.put('/movies/:id', async (req, res) => {
  try {
    // Desestruture o id do parametro da requisição e as informações movie e price do corpo da requisição.
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile(); // chama a função de leitura do JSON.
    const index = movies.findIndex((element) => element.id === Number(id)); // localiza o index do filme a ser editado.
    movies[index] = { id: Number(id), movie, price }; // edita o filme.
    const updatedMovies = JSON.stringify(movies, null, 2); // transforma o array de objetos em string.
    await fs.writeFile(moviesPath, updatedMovies); // escreve o arquivo com o array de objetos atualizado.
    // método status para enviar o código de resposta HTTP 200 e retornando o filme editado em formato json para o cliente como resposta.
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Criando um endpoint do tipo DELETE com a rota /movies/:id, que possa deletar um filme do JSON por id.
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params; // Desestruture o id do parametro da requisição.
    const movies = await readFile(); // chama a função de leitura do JSON.
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id)); //  Filtre o array pelos objetos que não possuem o mesmo id que o fornecido pelo parâmetro da requisição.
    const updatedMovies = JSON.stringify(filteredMovies, null, 2); // transforma o array de objetos em string.
    await fs.writeFile(moviesPath, updatedMovies); // escreve o arquivo com o array de objetos atualizado.
    res.status(204).end(); // método status para enviar o código de HTTP 204 como resposta.
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
