//use this to fetch from any api pass props how much item you want and pass api url as string

import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetPetData = (limit = null, url) => {
  const [petData, setPetData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await axios.get(url);

        setPetData(limit ? response.data.slice(0, limit) : response.data);
      } catch (error) {
        setError('Error fetching pet data');
        console.error('Error fetching pet data:', error);
      }
    };

    fetchPetData();
  }, [limit, url]);

  return { petData, error };
};

export default useGetPetData;
