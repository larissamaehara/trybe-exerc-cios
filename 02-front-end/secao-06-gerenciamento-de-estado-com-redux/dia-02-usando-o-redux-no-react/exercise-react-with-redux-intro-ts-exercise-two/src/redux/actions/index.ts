export const MOVE_CAR = 'MOVE_CAR';

export type Cars = 'red' | 'blue' | 'yellow';

export const moveCarAction = (car: Cars, side: boolean) => ({
  type: MOVE_CAR,
  payload: {
    car,
    side,
  },
});
