// Passo 2: Definindo os tipos com TypeScript
// Definir o tipo do dispatch, para indicar ao TypeScript que ele aceita o middleware Thunk:
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errorMessage: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
