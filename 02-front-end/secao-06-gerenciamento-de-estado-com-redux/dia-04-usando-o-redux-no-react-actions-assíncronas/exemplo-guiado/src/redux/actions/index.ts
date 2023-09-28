// Passo 3: Criando as action creators e thunk action creators
// Com os tipos definidos, você pode criar as actions. Serão definidos três cenários:
// Para indicar que a requisição foi realizada.
// Para indicar que a requisição foi aceita.
// Para indicar que a requisição foi recusada.
import { Dispatch } from '../../types';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

// Cria o thunk action creator, que será o responsável por acionar as action creators definidas anteriormente:
export function fetchDogImage() {
  return async (dispatch: Dispatch) => {
    // Retorna uma função que recebe como argumento o dispatch,
    // que precisa ser definido com o tipo Dispatch criado no passo 2,
    // a fim de que a aplicação entenda que ele aceita o middleware thunk.
    try {
      dispatch(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(requestSuccessful(data.message));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}
