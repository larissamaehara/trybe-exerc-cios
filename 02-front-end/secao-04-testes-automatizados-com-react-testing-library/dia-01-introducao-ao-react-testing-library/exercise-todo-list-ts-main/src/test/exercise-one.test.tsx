import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação; testando o botão e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    // 1- Selecionar o botão com a query 'getByText'
    // 2- Verificar se o botão está na tela com o matcher 'toBeInTheDocument'
    // 3- Verificar se a propriedade 'type' é igual a 'button' com o matcher 'toBe'
    const buttonAdd: HTMLButtonElement = screen.getByRole('button', { name: /adicionar/i });
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada na tela', async () => {
    render(<App />);

    // 4- Selecionar o input e o botão com as queries 'getByLabelText' e 'getByText',
    // 5- Adicionar um valor no input através da biblioteca 'userEvent'
    // 6- Testar se a tarefa ainda não foi inserida na tela, uma vez que ela só deve aparecer após clicar no botão
    // 7- Dispar o clique no botão, e então verificar que a tarefa agora aparece na tela
    // 8- Conferir que o input está limpo após a inserção da tarefa

    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByRole('button', { name: /adicionar/i });
    await userEvent.type(inputTask, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();
    await userEvent.click(buttonAdd);
    expect(screen.getByText(TASK_DESCRIPTION)).toBeInTheDocument();
    expect(inputTask).toHaveValue('');
  });
});
