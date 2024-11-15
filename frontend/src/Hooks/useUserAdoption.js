import { useEffect, useState } from "react";
import useAxios from "./useAxios";


const useUserAdoption = () => {
    const [userAdoptions, setUserAdoptions] = useState([]);
    const apiHandle = useAxios();

    const refetch = ()=>{
      apiHandle.get(`/getReceiver`)
      .then(res=>{
        console.log(res.data)
        setUserAdoptions(res.data)
      })
    }
    useEffect(() => {
       refetch()
    },[]);
  
    return { userAdoptions, refetch };
};

export default useUserAdoption;