import { useEffect, useState } from "react";
import useAxios from "../useAxios";


export default function usePetsProducts() {
    const [petsProducts, setPetsProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiHandler = useAxios();


    const refresh = async () => {
        setLoading(true);
        try {
            const response = await apiHandler.get("/shop-products");
            setPetsProducts(response.data);
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

    return { loading, error, petsProducts, refresh }
}
