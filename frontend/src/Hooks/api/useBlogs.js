import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useBlogs(email) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiHandler = useAxios()

  const refresh = async () => {
    setLoading(true);
    try {
      const response = await apiHandler.get("/blogs");
      const allBlogs = response?.data || [];

      if (email) {
        const filteredBlogs = allBlogs?.filter(blog => blog?.author?.email === email);        
        setBlogs(filteredBlogs)
      }
      else {
        setBlogs(allBlogs);
      }

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

  return { loading, error, blogs, refresh }
}
