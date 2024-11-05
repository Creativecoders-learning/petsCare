import axios from "axios";
import { useEffect, useState } from "react";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const refresh = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/FackData/blogs.json");
      setBlogs(response.data);
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
