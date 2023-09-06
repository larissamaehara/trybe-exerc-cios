import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Testa a aplicação, e o input', () => {
  test('Testa a adição de vários itens a aplicação', async () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium'];

    render(<App />);

    // 1- Selecionar o input e o botão.
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    // 2- Pegar os valores do array de tarefas 'listTodo' e, para cada um desses valores, dispar os eventos de digitar no input e de clicar no botão com a biblioteca 'userEvent'.

    await userEvent.type(inputTask, listTodo[0]);
    await userEvent.click(btnAdd);

    await userEvent.type(inputTask, listTodo[1]);
    await userEvent.click(btnAdd);

    // 3- Iterar mais uma vez sobre o array. Dessa vez, verifica-se se, para cada um dos valores, nós podemos selecioná-los com a query 'getByText' e encontrá-los em tela com o matcher 'toBeInTheDocument'
    listTodo.forEach((task) => {
      const currentTask = screen.getByText(task);
      expect(currentTask).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string como props, ela precisa aparecer na tela.', () => {
    // Renderizar apenas o componente que se quer testar
    // Deve-se passar algum valor para a prop 'content'. Neste caso, estamos passando a frase "Limpar a casa"
    // Após a renderização, verifica se é possível encontrar a frase em tela, usando nossa query 'getByText' e nosso matcher 'toBeInTheDocument'

    render(<Item content="Limpar a casa" />);
    expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string como props, ela precisa aparecer na tela.', () => {
    // Renderizar apenas o componente que se quer testar aqui
    // De acordo com nosso componente, deve-se passar algum valor para a prop 'content'. Neste caso, estamos passando a frase "Limpar a casa"
    // Após a renderização, verifica se é possível encontrar a frase em tela, usando nossa query 'getByText' e nosso matcher 'toBeInTheDocument'

    render(<Item content="Limpar a casa" />);
    expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
  });
});
