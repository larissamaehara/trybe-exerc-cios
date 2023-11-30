// A importação utiliza o método listen adicionando como parâmetro a porta e a callback com a mensagem desejada para o servidor.

const app = require('./app');

app.listen(3001, () => console.log('Server running on port 3001'));