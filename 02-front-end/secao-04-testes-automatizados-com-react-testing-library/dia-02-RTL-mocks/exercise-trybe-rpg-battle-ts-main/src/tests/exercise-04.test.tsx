import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';

it('Testa a requisição para a API', async () => {
  /*
    Exercício 04
  */
  // Criando um objeto com as informações que se quer retornar pelo mock.
  // Nesse caso, criou-se um objeto para o personagem Hannibal Lecter.
  const mockedCharacters = [{
    id: 1,
    name: 'Hannibal Lecter',
    source: 'Hannibal',
    defensePoints: 50,
  }];

  // Cria-se o mock para o global.fetch, usando primeiro a vi.spyOn e depois a função mockResolvedValue
  // Necessário usar a função mockResolvedValue duas vezes, pois a função fetch retorna primeiro um objeto que possui um método '.json'
  // O método `.json` retorna o resultado da API.
  vi.spyOn(global, 'fetch');
  (global.fetch as any).mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockedCharacters),
  });

  // Renderizando a aplicação
  render(<App />);
  // O elemento `h3` tem o nome do personagem.
  const enemyEl = await screen.findByRole('heading', { name: 'Hannibal Lecter' });
  // Verifica que ele está sendo renderizado na tela
  expect(enemyEl).toBeInTheDocument();
});
