// Parte 9
// Crie um middleware validateDifficulty que será responsável por verificar se o campo difficulty possui um valor válido. O campo difficulty deve ser uma string e pode assumir os seguintes valores: "easy", "medium" ou "hard".

module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    return res.status(400).json(
      { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' },
    );
  }

  next();
};