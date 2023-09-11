// Exercício 2 - Realize os testes da busca por Digimon
import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Teste da busca por Digimon', () => {
  afterEach(() => vi.clearAllMocks());

  it('Insere um valor na caixa de busca', async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    await user.type(searchInput, 'Koromon');
    expect(searchInput).toHaveValue('Koromon');
  });

  it('Verifica se a tela começa sem digimons renderizados', () => {
    renderWithRouter(<App />);

    const digimonName = screen.queryByTestId('digimonName');
    expect(digimonName).not.toBeInTheDocument();
  });

  it('Verifica se é possível buscar um Digimon com sucesso', async () => {
    const digimonMock = [
      {
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      },
    ];

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimonMock),
    })) as any;

    const { user } = renderWithRouter(<App />);

    expect(global.fetch).toBeCalledTimes(0);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });

    await user.type(searchInput, 'Agumon');
    await user.click(button);

    const digimonLevel = await screen.findByText('Level: Rookie');
    expect(digimonLevel).toBeInTheDocument();
    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();
    const digimonImage = await screen.findByText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });

  it('A mensagem de erro é renderizada caso o Digimon buscado não exista', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    })) as any;

    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });

    await user.type(searchInput, 'Pikachu');
    await user.click(button);

    await screen.findByText('Pikachu is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
  });

  it('Caso a caixa de busca esteja vazia, nenhum fetch é realizado', async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    await user.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });

  // Exercício 3 - Bônus - Consiga 100% de Cobertura e Stryker Passando
  it('Buscar falha (erro no servidor)', async () => {
    vi.spyOn(global, 'fetch');
    await (global.fetch as any).mockRejectedValue(
      new Error('Oops! Algo de errado não está certo!'),
    );

    vi.spyOn(global.console, 'log');

    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });

    await user.type(searchInput, 'Teste');
    await user.click(button);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toBeCalledWith(
        'Erro ao fazer a requisição: Error: Oops! Algo de errado não está certo!',
      );
    });
  });
});
