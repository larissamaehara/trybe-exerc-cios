import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';
import Coordinates from './components/Coordinates';
import ISSLocation from './components/ISSLocation';

import './App.css';

type Location = {
  latitude: number;
  longitude: number;
};

function App() {
  const [issLocation, setIssLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setLocation() {
      const location = await fetchCoordinates();
      setIssLocation(location);
      setLoading(false);
    }

    if (loading) {
      setLocation();
    }

    const intervalId = setInterval(() => {
      setLocation();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>International Space Station Location Tracker</h1>
      <Coordinates
        latitude={ issLocation.latitude }
        longitude={ issLocation.longitude }
      />
      <ISSLocation
        latitude={ issLocation.latitude }
        longitude={ issLocation.longitude }
      />
    </div>
  );
}

export default App;
