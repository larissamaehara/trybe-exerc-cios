import { useDispatch } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import { Dispatch } from '../types';

function Button() {
  const dispatch: Dispatch = useDispatch();
  return (
    <button type="button" onClick={ () => dispatch(fetchAPI()) }>
      Find a fox!
    </button>
  );
}

export default Button;
