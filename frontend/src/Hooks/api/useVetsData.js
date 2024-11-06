import { useEffect, useState } from "react";

const useVetsData = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch("/vetsData.json")
          .then((res) => res.json())
          .then((data) => {
            setVets(data);
          });
      }, []);

    return {vets}
};

export default useVetsData;