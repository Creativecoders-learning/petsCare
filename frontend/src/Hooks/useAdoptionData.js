import { useEffect, useState } from 'react';

const useAdoptionData = () => {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    fetch('/petsAdoption.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdoptions(data);
      });
  }, []);

  return { adoptions };
};

export default useAdoptionData;
