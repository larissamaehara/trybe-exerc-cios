import { useEffect, useState } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import { PersonType } from './types';

function App() {
  const [data, setData] = useState<PersonType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [approvals, setApprovals] = useState<PersonType[]>(
    JSON.parse(localStorage.getItem('approvals') as string) || [],
  );
  const [rejections, setRejections] = useState<PersonType[]>(
    JSON.parse(localStorage.getItem('rejections') as string) || [],
  );

  const refresh = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then(({ results }) => setData(results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refresh();
  }, []);

  const setStorageApprovals = (value: PersonType[]) => {
    localStorage.setItem('approvals', JSON.stringify(value));
    setApprovals(value);
  };

  const setStorageRejections = (value: PersonType[]) => {
    localStorage.setItem('rejections', JSON.stringify(value));
    setRejections(value);
  };

  const clearApprovals = () => {
    localStorage.removeItem('approvals');
    setApprovals([]);
  };

  const clearRejections = () => {
    localStorage.removeItem('rejections');
    setRejections([]);
  };

  if (error) {
    return (
      <main>
        <h1>Um erro inesperado aconteceu</h1>
      </main>
    );
  }

  return (
    <main>
      { loading && <h1>Carregando...</h1> }
      { data.length > 0 && (
        <section>
          <section>
            <h1>Pessoas Aleatórias</h1>
            <PersonCard person={ data[0] } />
            <button type="button" onClick={ refresh }>
              ⏩ Próxima pessoa candidata
            </button>
            <button
              type="button"
              onClick={ () => setStorageApprovals([...approvals, data[0]]) }
            >
              ✅ Aprovar
            </button>
            <button
              type="button"
              onClick={ () => setStorageRejections([...rejections, data[0]]) }
            >
              ❌ Reprovar
            </button>
          </section>
          <section>
            <h1>✅ Aprovadas</h1>
            <button type="button" onClick={ clearApprovals }>
              Limpar
            </button>
            { approvals.map((person) => (
              <PersonCard key={ person.id.value } person={ person } />
            )) }
          </section>
          <section>
            <h1>❌ Reprovadas</h1>
            <button type="button" onClick={ clearRejections }>
              Limpar
            </button>
            { rejections.map((person) => (
              <PersonCard key={ person.id.value } person={ person } />
            )) }
          </section>
        </section>
      ) }
    </main>
  );
}

export default App;
