import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useAdoptionData = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [filteredAdoption,setFilteredAdoption] = useState([])
  const [filters,setFilters]=useState({
    location: '',
    color: '',
    category:'',
    breed: '',
    age: ''
  })
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const apiHandle = useAxios()

  const refetch = ()=>{
    setLoading(true)
    try{
      apiHandle.get('/getAdoption')
    .then(res=>{
      setAdoptions(res.data) // Update original data
      setFilteredAdoption(res.data) // Default: show all data
    })
    }catch(error){
      setErr(error.message || "Failed to fetch adoption data")
    }finally{
      setLoading(false)
    }
  }

  // filter adoption data base on criteria
  const applyFilter = ()=>{
    const filtering = adoptions.filter((adoption)=>{
      return(
        (filters.location === '' || adoption.location.includes(filters.location)) && 
        (filters.color === '' || adoption.color === filters.color) &&
        (filters.category === '' || adoption.category === filters.category) &&
        (filters.breed === '' || adoption.breed === filters.breed) && 
        (filters.age === '' || adoption.age === filters.age) 
      )
    })

    setFilteredAdoption(filtering)
  }

  // update filter when any field is change
  const updateFielder =(name, value)=>{
    setFilters((prev)=> ({...prev, [name]:value}))
  }

  useEffect(() => {
    refetch()
  }, []);

   // Automatically apply filters whenever filter criteria or data changes
  useEffect(()=>{
    applyFilter()
  },[])

  return { filteredAdoption,filters,updateFielder,applyFilter, loading, err, refetch,adoptions};
};

export default useAdoptionData;
