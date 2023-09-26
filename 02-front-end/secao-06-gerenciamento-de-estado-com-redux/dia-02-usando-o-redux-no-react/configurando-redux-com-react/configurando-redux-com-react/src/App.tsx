import { useDispatch, useSelector } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions/index';
import './App.css';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  // Criou-se a constante rootState, que recebe o valor retornado pelo hook useSelector.
  const rootState = useSelector((state: RootState) => state);
  // O hook recebe como parâmetro a callback (state: RootState) => state.
  // A callback está recebendo como parâmetro o state, que é o estado do Redux.
  // A callback retorna esse mesmo estado.

  // A constante rootState recebe o valor armazenado no estado do Redux ({ count: 0 }).
  // Por fim, utiliza-se a chave count do estado global para renderizar o valor.

  const dispatch = useDispatch();
  // O hook useDispatch retorna uma função que permite disparar uma action para o reducer.

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  return (
    <main>
      <div className="counter-container">
        <h1>Contador</h1>
        <h2>{ rootState.counterReducer.count }</h2>
        <h1>Clicks</h1>
        <h2>{ rootState.counterReducer.clicks }</h2>
      </div>
      <div className="button-container">
        <button onClick={ () => handleClick() }>Incrementa 1</button>
        <button onClick={ () => handleClick(5) }>Incrementa 5</button>
      </div>
    </main>
  );
}

export default App;
