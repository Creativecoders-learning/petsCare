import { useEffect, useState } from "react";

const useMyAdoptionData = () => {

    const [myAdoptions,setMyAdoptions]=useState([])

    useEffect(()=>{
        fetch('/myAdoptions.json')
  .then(response => {
    console.log(response); 
    return response.json();
  })
  .then(data => {
    console.log(data);
    setMyAdoptions(data)
  })
  .catch(error => {
    console.error("Error:", error);
  });
    },[])

    return [myAdoptions]
};

export default useMyAdoptionData;