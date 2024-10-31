import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {

      const [users, setUsers] = useState([]);

      const fetchUsers = async () => {
            try {
                  const response = await axios.get('/users.json');
                  setUsers(response?.data)
            } catch (error) {
                  console.log(error?.message);

            }
      }

      useEffect(() => {
            fetchUsers()
      }, [])

      return { users };
};

export default useUsers;