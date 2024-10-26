import { useState, useEffect } from 'react';

const usePetData = (limit = null) => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetch('/pets.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Limit the data if a limit is provided
        setPetData(limit ? data.slice(0, limit) : data);
      })
      .catch((error) => console.error('Error fetching pet data:', error));
  }, [limit]);

  return petData;
};

export default usePetData;
