import Card from './Card.tsx';

const infoRioDeJaneiro = {
  city: 'Rio de Janeiro',
  country: 'Brasil',
  imageUrl: '/src/assets/rio.jpg',
  visited: true,
};

const infoCidadeDoCabo = {
  city: 'Cidade do Cabo',
  country: 'África do Sul',
  imageUrl: '/src/assets/cidade-do-cabo.jpg',
  visited: true,
};

const infoAcapulco = {
  city: 'Acapulco',
  country: 'México',
  imageUrl: '/src/assets/acapulco.webp',
};

function CardList() {
  return (
    <div className="card-list">
      <Card cityInfo={ infoRioDeJaneiro } />
      <Card cityInfo={ infoCidadeDoCabo } />
      <Card cityInfo={ infoAcapulco } />
    </div>
  );
}

export default CardList;
