import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useAdoptionData = () => {
  const [adoptions, setAdoptions] = useState([]);
  const apiHandle = useAxios()

  const refetch = ()=>{
    apiHandle.get('/getAdoption')
    .then(res=>{
      setAdoptions(res.data)
    })
  }
  useEffect(() => {
    refetch()
  }, []);

  return { adoptions,refetch };
};

export default useAdoptionData;
