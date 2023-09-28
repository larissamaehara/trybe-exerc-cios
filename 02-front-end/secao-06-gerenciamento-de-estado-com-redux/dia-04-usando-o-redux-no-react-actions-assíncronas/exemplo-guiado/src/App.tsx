// Passo 1: Lendo e escrevendo no estado do Redux
// Para ler as informações de estado do Redux, é utilizado o hook useSelector e,
// Para escrever no estado do Redux, é utilizado o hook useDispatch.
// Ainda, para que o TypeScript reconheça os valores retornados pelos hooks corretamente,
// é necessário passar a tipagem, que foi definida no arquivo types.ts:
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';

// Passo 2: Realizar o dispatch da thunk action creator
import { fetchDogImage } from './redux/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();
  // o componente dispatch aceita receber como argumento tanto uma action creator quanto uma thunk action creator

  if (rootState.isFetching) return <p>Carregando...</p>;
  // Passo 3: Renderizar a imagem
  return (
    <div>
      <button // Adicionar ao clique do botão o dispatch de fetchDogImage
        onClick={ () => { dispatch(fetchDogImage()); } }
      >
        Novo Doguinho
      </button>
      { // Renderizar a imagem
        rootState.imageURL
        && <img
          src={ rootState.imageURL }
          alt="Imagem de um cachorro aleatório"
        />
      }
    </div>
  );
}
// Na sequência, entenda o que acontecerá na aplicação ao clicar no botão:

// 1-A aplicação aciona a thunk action creator chamada fetchDogImage.
// 2-fetchDogImage dispara a action “REQUEST_STARTED”, que altera para true o valor da chave isFetching do Redux.
// 3-Ela realiza a requisição para a API.
// 4-Se a requisição retornar com sucesso, dispara a action “REQUEST_SUCCESSFUL”, que altera o valor da chave imageURL do Redux e o valor de isFetching para false.
// 5-Se a requisição retornar erro, dispara a action “REQUEST_FAILED”, que altera isFetching para false e armazena a mensagem de erro na chave errorMessage.
export default App;
