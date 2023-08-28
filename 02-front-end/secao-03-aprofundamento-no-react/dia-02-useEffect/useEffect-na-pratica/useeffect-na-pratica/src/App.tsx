import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';

import './App.css';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {coordinates && (
        <>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </>
      )}
    </>
  );
}

export default App;
