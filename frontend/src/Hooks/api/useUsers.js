import { useEffect, useState } from "react";
import useAxios from "../useAxios";

const useUsers = () => {

      const [users, setUsers] = useState([]);
      const apiHandler = useAxios()

      const fetchUsers = async () => {
            try {
                  const response = await apiHandler.get('/users');
                  setUsers(response?.data)
            } catch (error) {
                  console.log(error?.message);

            }
      }

      useEffect(() => {
            fetchUsers()
      }, [])

      return { users, fetchUsers };
};

export default useUsers;