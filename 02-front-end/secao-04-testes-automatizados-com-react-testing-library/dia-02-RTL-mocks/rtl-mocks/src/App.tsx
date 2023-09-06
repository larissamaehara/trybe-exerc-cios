import { useState, useEffect } from 'react';
import fetchJoke from './utils/fetchJoke';
import './App.css';

// Criando um botão chamado “New Joke” que, ao ser clicado,
// faz uma nova requisição para API para atualizar a piada que está sendo renderizada na tela.

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
      const jokes = await fetchJoke();
      setJoke(jokes.joke);
    }
    getJoke();
  }, []);

  async function handleClick() {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  }

  return (
    <div className="App">
      <button onClick={ handleClick }>New joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
