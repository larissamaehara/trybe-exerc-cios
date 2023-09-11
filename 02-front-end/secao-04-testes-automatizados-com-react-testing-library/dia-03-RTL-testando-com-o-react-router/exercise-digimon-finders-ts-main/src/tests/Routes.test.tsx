// Exercício 1 - Realize os testes das rotas da aplicação
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testa se a aplicação renderiza corretamente em seu estado inicial', () => {
  it('Aplicação é renderizada com sucesso', () => {
    renderWithRouter(<App />);
    const headingEl = screen.getByRole('heading', {
      name: /Search Digimon/i,
    });

    expect(headingEl).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: 'About' });
    const searchLink = screen.getByRole('link', { name: 'Search Digimon' });
    expect(aboutLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });

  it('Ao clicar no link "About", direciona para a página About', async () => {
    const { user } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();

    await user.click(aboutLink);

    const aboutTitle = screen.getByRole(
      'heading',
      { name: 'About' },
    );

    expect(aboutTitle).toBeInTheDocument();
  });

  it('Renderiza o NotFound caso seja acessada uma rota inexistente', () => {
    renderWithRouter(<App />, { route: '/xablau' });

    const notFoundTitle = screen.getByRole(
      'heading',
      { name: 'Page Not Found' },
    );
    expect(notFoundTitle).toBeInTheDocument();

    const notFoundText = screen.getByText(
      'A página que você está procurando não existe!',
    );
    expect(notFoundText).toBeInTheDocument();
  });
});
