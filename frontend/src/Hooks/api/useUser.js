import axios from "axios";
import { useEffect, useState } from "react";

export default function useUser() {
      const [user, setUser] = useState({});

      const refresh = async () => {
            try {
                  const response = await axios.get("/user.json"); // Updated path to JSON file
                  setUser(response.data);
            } catch (err) {
                  console.log(err.message || 'An error occurred');
            }
      };

      useEffect(() => {
            refresh();
      }, [])

      return user;
}
