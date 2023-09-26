import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // componente chamado Provider proverá as informações da store para a aplicação
import App from './App.tsx';
import store from './redux/index.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
