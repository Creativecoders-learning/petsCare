import { useState } from "react";

const useUser = () => {

      const [user, setUser] = useState(() => {
            const userInfo = localStorage.getItem('userInfo');
            return userInfo ? JSON.parse(userInfo) : null;
      });

      // get userInfo from localStorage
      const getUserInfo = () => {
            const userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                  setUser(JSON.parse(userInfo))
                  return JSON.parse(userInfo)
            }
      }

      // set userInfo to localStorage
      const setUserInfo = (userInfo) => {
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }

      return { user, setUser, getUserInfo, setUserInfo };
};

export default useUser;