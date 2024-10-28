import { useEffect, useState } from "react";

const useVetsData = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch("/vetData.json")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setVets(data);
          });
      }, []);

    return {vets}
};

export default useVetsData;