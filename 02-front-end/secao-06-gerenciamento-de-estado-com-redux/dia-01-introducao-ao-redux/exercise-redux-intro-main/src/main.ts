import { nextColor, previousColor, randomColor } from './redux/actions';
import store from './redux/store';

const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;

btnPrevious.addEventListener('click', () => {
  // realiza o dispatch da action
  store.dispatch(previousColor());
});

btnNext.addEventListener('click', () => {
  // realiza o dispatch da action
  store.dispatch(nextColor());
});

btnRandom.addEventListener('click', () => {
  // realiza o dispatch da action
  store.dispatch(randomColor());
});

// realiza o subscribe da store
store.subscribe(() => {
  const { colors, index } = store.getState();
  const color = colors[index];

  const container = document.getElementById('container') as HTMLDivElement;
  container.style.backgroundColor = color;
});