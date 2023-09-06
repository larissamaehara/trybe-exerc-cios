import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = { // O objeto MOCK_JOKE recebe um valor similar aos dados retornados pela API;
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };

    const MOCK_RESPONSE = { //  O objeto MOCK_RESPONSE recebe um valor similar aos dados retornados pela função fetch
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;
    // Note que aqui indicamos que esse objeto é do tipo Response.
    // Dessa forma, o TypeScript vai entender que esse objeto possui os mesmos valores que o retorno de uma requisição;

    /* global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(joke),
    } as Response)); */

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    // O vi.spyOn espiona as chamadas da função fetch do objeto global.
    // É por meio deste objeto que conseguimos usar qualquer função do sistema.
    // A partir da versão 18 do node, fetch também está definida em global;

    // Utilizando o método mockResolvedValue conseguimos definir que, quando o fetch for executado, o seu retorno será aquele definido em MOCK_RESPONSE.

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    const MOCK_JOKE_2 = {
      id: '8s5bGtrOfxc',
      joke: 'Whats red and bad for your teeth? A Brick.',
    };

    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;

    const secondMockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE_2);
    const newJokeButton = screen.getByRole('button', { name: 'New joke' });
    await userEvent.click(newJokeButton);

    const secondRenderedJoke = await screen.findByText('Whats red and bad for your teeth? A Brick.');
    expect(secondRenderedJoke).toBeInTheDocument();
    expect(secondMockFetch).toHaveBeenCalledTimes(1);
  });
});
