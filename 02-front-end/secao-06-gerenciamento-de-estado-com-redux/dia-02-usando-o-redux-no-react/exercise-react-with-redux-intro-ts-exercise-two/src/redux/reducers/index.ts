import { AnyAction } from 'redux';
import { MOVE_CAR } from '../actions';

const INITIAL_STATE = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
};

function reducer(
  state = INITIAL_STATE,
  action: AnyAction,
) {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        [`${action.payload.car}Car`]: action.payload.side,
      };
    default:
      return state;
  }
}

export default reducer;
