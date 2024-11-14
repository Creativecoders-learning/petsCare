import axios from "axios";

const instance = axios.create({
      baseURL: 'https://petscarebackend.vercel.app'
})

const useAxios = () => {
      return instance;
};

export default useAxios;