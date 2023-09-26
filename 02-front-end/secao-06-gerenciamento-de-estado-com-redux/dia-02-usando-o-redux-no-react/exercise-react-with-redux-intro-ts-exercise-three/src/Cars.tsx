import { useDispatch, useSelector } from 'react-redux';
import blueCarImg from './images/carBlue.png';
import redCarImg from './images/carRed.png';
import yellowCarImg from './images/carYellow.png';
import { moveCarAction } from './redux/actions';
import { ReduxState } from './types';

function Cars() {
  const { red, blue, yellow } = useSelector((state: ReduxState) => state.cars);
  const dispatch = useDispatch();

  return (
    <main>
      <section>
        <img
          className={ red ? 'car-right' : 'car-left' }
          src={ blueCarImg }
          alt="red car"
        />
        <button
          onClick={ () => dispatch(moveCarAction('red', !red)) }
          type="button"
        >
          move
        </button>
      </section>
      <section>
        <img
          className={ blue ? 'car-right' : 'car-left' }
          src={ redCarImg }
          alt="blue car"
        />
        <button
          onClick={ () => dispatch(moveCarAction('blue', !blue)) }
          type="button"
        >
          move
        </button>
      </section>
      <section>
        <img
          className={ yellow ? 'car-right' : 'car-left' }
          src={ yellowCarImg }
          alt="yellow car"
        />
        <button
          onClick={ () => dispatch(moveCarAction('yellow', !yellow)) }
          type="button"
        >
          move
        </button>
      </section>
    </main>
  );
}

export default Cars;
