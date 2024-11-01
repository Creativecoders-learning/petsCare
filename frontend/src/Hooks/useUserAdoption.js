import { useEffect, useState } from "react";

const useUserAdoption = () => {
    const [userAdoptions, setuserAdoptions] = useState([]);

    useEffect(() => {
      fetch('/userAdoption.json')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setuserAdoptions(data);
        });
    }, []);
  
    return { userAdoptions };
};

export default useUserAdoption;