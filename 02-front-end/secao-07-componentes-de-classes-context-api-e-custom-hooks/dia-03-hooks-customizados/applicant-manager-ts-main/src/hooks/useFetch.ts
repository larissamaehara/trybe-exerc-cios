import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => setData(results))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refresh();
  }, []);

  return { loading, error, data, refresh };
}
