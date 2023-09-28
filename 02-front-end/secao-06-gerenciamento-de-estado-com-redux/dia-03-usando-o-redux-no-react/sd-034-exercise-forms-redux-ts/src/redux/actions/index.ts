import { INITIAL_STATE } from '../reducers';

export const sendFormDataAction = (
  field: string,
  payload: typeof INITIAL_STATE.professionalData | typeof INITIAL_STATE.personalData,
) => {
  return {
    type: 'ADD_INPUT_DATA',
    field,
    payload,
  };
};
