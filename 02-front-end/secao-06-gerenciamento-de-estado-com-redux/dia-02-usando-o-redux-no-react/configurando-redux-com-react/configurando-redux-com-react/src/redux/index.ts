import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

/* type ActionType = { // ActionType foi criado para indicar que a action será um objeto que contém uma chave type do tipo string.
  type: string;
};
 */

// const INITIAL_STATE = { count: 0 };

// const reducer = (state = INITIAL_STATE, action: ActionType) => state;
// O reducer é uma função com dois parâmetros:
// o state, que recebe o valor do estado inicial como default, e a action, que será criada posteriormente

const store = createStore(rootReducer, composeWithDevTools());

export default store;
