import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import UseAuth from "../UseAuth";

const useUser = () => {
      const [users, setUsers] = useState([])
      const [user, setUser] = useState({})

      const apiHandler = useAxios();
      const { user: authUser } = UseAuth();
      const authEmail = authUser?.email;

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


      useEffect(() => {
            const logInUser = users?.find(user => user?.email === authEmail);
            setUser(logInUser);
      }, [authEmail, users])

      return { user, setUser };
};

export default useUser;