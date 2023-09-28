export const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

type ActionType = {
  type: string;
  field: string;
  payload: typeof INITIAL_STATE.professionalData | typeof INITIAL_STATE.personalData;
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'ADD_INPUT_DATA':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export type State = typeof INITIAL_STATE;
export default reducer;
