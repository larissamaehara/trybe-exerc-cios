// A função reducer criada recebe como parâmetro o estado inicial e uma action.
// Por padrão, a action sempre retornará um objeto com a chave type, que informa qual ação deve ser feita no estado.
// Você deve verificar se a ação é INCREMENT_COUNTER.
// Em caso positivo, ela irá incrementar o valor da chave count, que está no estado global, em 1.
type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  count: 0,
  clicks: 0,
};

function counterReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.payload };
    case 'INCREMENT_CLICKS':
      return {
        ...state,
        clicks: state.clicks + 1 };
    default:
      return state;
  }
}

export default counterReducer;
