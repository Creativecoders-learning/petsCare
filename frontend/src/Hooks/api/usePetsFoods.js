import { useEffect, useState } from "react";
import axios from "axios";

export default function usePetsFoods() {
  const [petsFoods, setPetsFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const refresh = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/FackData/ShopFoods.json");
      setPetsFoods(response.data);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // fetch pest foods data
  useEffect(() => {
    refresh();
  }, [])

  return {loading, error, petsFoods, refresh}
}
