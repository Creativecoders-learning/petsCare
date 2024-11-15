import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useAdoptionData = () => {
  const [adoptions, setAdoptions] = useState([]);
  const apiHandle = useAxios()

  useEffect(() => {
    apiHandle.get('/getAdoption')
    .then(res=>{
      setAdoptions(res.data)
    })
  }, []);

  return { adoptions };
};

export default useAdoptionData;
