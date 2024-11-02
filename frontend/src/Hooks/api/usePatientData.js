import axios from 'axios';
import { useState, useEffect } from 'react';

const usePatientsData = () => {
      const [patients, setPatients] = useState([]);


      const fetchPatients = async () => {
            try {
                  const response = await axios.get('/patientsData.json')
                  setPatients(response?.data);
            } catch (err) {
                  console.log(err?.message);

            }
      };

      useEffect(() => {
            fetchPatients();
      }, [])

      return { patients };
};

export default usePatientsData;
