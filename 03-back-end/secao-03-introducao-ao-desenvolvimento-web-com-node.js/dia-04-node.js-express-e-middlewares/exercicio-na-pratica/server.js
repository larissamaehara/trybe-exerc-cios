//  Crie o arquivo server.js e importe o arquivo criado no Primeiro passo. Agora, a partir dessa importação utilize o método listen adicionando como parâmetro a porta e a mensagem desejada para o servidor.
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));