import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import useAxios from "../useAxios";

const useVetsData = () => {
  const [vets, setVets] = useState([]);
  const apiHandler = useAxios();

  const refresh = async () => {
    try {
      const { data } = await apiHandler.get('/vets');
      setVets(data)
    } catch (error) {
      toast.error(error?.message)
      console.log(error?.message);

    }
  }

  useEffect(() => {
    refresh()
  }, []);

  return { vets,refresh }
};

export default useVetsData;