export type Signals = 'red' | 'yellow' | 'green';

export type TrafficSignalState = {
  color: Signals;
};

export type CarsState = {
  redCar: boolean;
  blueCar: boolean;
  yellowCar: boolean;
};

export type ReduxState = {
  color: any;
  cars: any; // lembre de alterar com os nomes do seu combineReducers
  trafficSignalReducer: TrafficSignalState;
  carsReducer: CarsState;
};
