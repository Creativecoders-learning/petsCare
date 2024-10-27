import axios from "axios";
import { useEffect, useState } from "react";

export default function usePetsAccessories() {
    const [petsAccessories, setPetsAccessories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    const refresh = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/FackData/ShopAccessories.json");
        setPetsAccessories(response.data);
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
  
    return {loading, error, petsAccessories, refresh}
}
