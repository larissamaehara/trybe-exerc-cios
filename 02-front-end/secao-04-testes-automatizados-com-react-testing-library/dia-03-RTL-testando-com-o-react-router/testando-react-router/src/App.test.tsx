import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './utils/renderWithRouter';

import App from './App';
import About from './pages/About';

// O componente BrowserRouter para envolver o App.
// O mesmo procedimento precisa ser feito ao renderizar o componente no contexto de um teste:
it('Renderiza texto da página inicial', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

// Outra forma de envolver o App com o componente BrowserRouter é utilizando o argumento wrapper:
it('Renderiza o texto utilizando wrapper', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

// Observação 🔎: As duas formas funcionam de maneira semelhante. Você pode optar por utilizar a forma que preferir!


// Após a renderização do componente App, faz o click no link com o texto Sobre,
// com o auxílio do userEvent. Ao ser clicado, ele buscará pelo texto Você está na página Sobre,
// indicando que o teste navegou para o componente About.
it('Navega para página About', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

it('Renderiza o componente About', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

/* it('Navega para página Inicio', async () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /Início/i });
  await userEvent.click(homeLink);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
}); */

// Perceba que agora não é mais necessário importar o BrowserRouter nem o render, pois isso tudo é provido pelo renderWithRouter
it('Renderiza página inicial', () => { 
  renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

// Algo semelhante acontece se utilizarmos o userEvent para simular um evento de usuário:
it('Navega para a página About', async () => {
// Recuperamos o valor user retornado pela renderWithRouter para simular a interação de uma pessoa com a aplicação
  const { user } = renderWithRouter(<App />);
// O valor user nada mais é que a utilização do userEvent definida na função auxiliar. Perceba que, dessa forma, o código fica muito mais legível.
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

//Renderizando um rota especifica no teste
it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});
// O teste acima é aprovado, pois ele renderiza o componente App já na página /about.
// Agora, o teste encontra os links que são renderizados pelo componente Layout,
// visto que a página inteira está sendo renderizada.

// Testando um rota nao definida
// Esse teste renderiza a aplicação em uma rota que não foi definida pela nossa aplicação.
// Ao acessar essa rota, o texto Página não encontrada é renderizado.
it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
