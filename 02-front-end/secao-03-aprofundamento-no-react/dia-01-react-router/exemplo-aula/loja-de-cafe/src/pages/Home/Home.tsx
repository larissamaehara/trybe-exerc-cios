import { useNavigate } from 'react-router-dom';

import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-title">
      <h1>Coffeeteria</h1>
        <h2>Com o passar dos cafés, os anos ficam melhores</h2>
      </div>
      <hr />
      <main>
        <p>Cafés especiais, nacionais e importados.</p>
        <button onClick={() => navigate('/coffees')}>
          Conheça nossos produtos
        </button>
      </main>
    </div>
  );
}

export default Home;
