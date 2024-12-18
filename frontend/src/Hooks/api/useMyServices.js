import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";

const useMyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const apiHandler = useAxios();
  const refresh = async () => {
    try {
      const { data } = await apiHandler.get('/vetServices');
      setMyServices(data)
    } catch (error) {
      toast.error(error?.message)
      console.log(error?.message);
    }
  }

  useEffect(() => {
    refresh()
  }, []);

  return {myServices,refresh}
};
export default useMyServices;