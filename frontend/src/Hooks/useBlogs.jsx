// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useBlogs = (url) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (  () =>  {
         try{
            // if (blogs === "All") {
            //     // Show all data when "All" is selected
            //     fetch(url)
            //     .then(res =>res.json())
            //     .then(data => setBlogs(data))
            // }
             fetch(url)
                .then(res =>res.json())
                .then(data => setBlogs(data))
           
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false)
        }
       
        // const fetchData = async () => {
        //     setLoading(true);
        //     try {
        //         const response = await fetch(url);
        //         if (!response.ok) {
        //             throw new Error(`Error: ${response.statusText}`);
        //         }
        //         const result = await response.json();
        //         setData(result);
        //         console.log(data);
        //     } catch (err) {
        //         setError(err.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };
        // fetchData();
    }, [url,]);

    return { blogs, error, loading};
};

export default useBlogs;
