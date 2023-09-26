import { Signals } from '../../types';

export type Cars = 'red' | 'blue' | 'yellow';

export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
export const MOVE_CAR = 'MOVE_CAR';

export const changeSignalAction = (payload: Signals) => ({
  type: CHANGE_SIGNAL,
  payload,
});

export const moveCarAction = (car: Cars, side: boolean) => ({
  type: MOVE_CAR,
  payload: {
    car,
    side,
  },
});
