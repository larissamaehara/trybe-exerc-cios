import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


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

it('Navega para página Inicio', async () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /Início/i });
  await userEvent.click(homeLink);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

