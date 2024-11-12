import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";

const useMyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const apiHandler = useAxios();
  const fetchAllVets = async () => {
    try {
      const { data } = await apiHandler.get('/vetServices');
      setMyServices(data)
    } catch (error) {
      toast.error(error?.message)
      console.log(error?.message);
    }
  }

  useEffect(() => {
    fetchAllVets()
  }, []);

  return [myServices]
};
export default useMyServices;