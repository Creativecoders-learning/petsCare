import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useOrderById(id) {
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiHandler = useAxios()



    // fetch pest foods data
    useEffect(() => {
        const refresh = async () => {
            setLoading(true);
            try {
                const response = await apiHandler.get("/orders");
                const allOrders = response?.data || [];

                if (id) {
                    const filteredOrder = allOrders?.filter(item => item?.transId === id);
                    setOrder(filteredOrder)
                }
                else {
                    setOrder({});
                }

            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
        refresh();
    }, [apiHandler, id])

    return { loading, error, order }
}
