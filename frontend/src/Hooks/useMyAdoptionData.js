import { useEffect, useState } from "react";

const useMyAdoptionData = () => {

    const [myAdoptions,setMyAdoptions]=useState([])

    useEffect(()=>{
        fetch('myAdoptions.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyAdoptions(data)
        })
    },[])

    return [myAdoptions]
};

export default useMyAdoptionData;