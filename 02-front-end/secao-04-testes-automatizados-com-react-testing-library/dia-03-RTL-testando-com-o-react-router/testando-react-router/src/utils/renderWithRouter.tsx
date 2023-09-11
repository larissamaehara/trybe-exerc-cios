import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// ui: recebe o componente que será renderizado (indicado pela tipagem JSX.Element);
// { route = '/' } = {}: recebe um objeto contendo uma chave route indicando qual rota será testada.
// Caso nenhum valor seja passado, a rota / será enviada por padrão.
export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);
// Assim que é executada, utiliza o método window.history.pushState para redirecionar a aplicação
// para a rota definida no argumento da função. Caso nenhuma rota tenha sido definida,
// o teste irá renderizar o componente na rota /.
  return { // A função retorna um objeto contendo:
    user: userEvent.setup(), // Uma chave user contendo o setup da biblioteca userEvent.
    ...render(ui, { wrapper: BrowserRouter }), // O componente renderizado, definido no primeiro argumento da renderWithRouter, envolvido pelo BrowserRouter.
  };
};
