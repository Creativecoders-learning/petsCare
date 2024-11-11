import { useEffect, useState } from "react";

const useVetsData = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch("/vetsData.json")
          .then((res) => res.json())
          .then((data) => {
            console.log(data?.category)
            setVets(data);
          });
      }, []);

    return {vets}
};

export default useVetsData;