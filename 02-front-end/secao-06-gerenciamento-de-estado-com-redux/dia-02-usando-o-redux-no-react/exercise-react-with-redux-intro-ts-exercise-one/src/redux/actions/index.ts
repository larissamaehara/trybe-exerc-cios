import { Signals } from '../../types';

export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';

export const changeSignalAction = (payload: Signals) => ({
  type: CHANGE_SIGNAL,
  payload,
});
