import { useParams } from "react-router-dom";
import useAdoptionData from "../../../hooks/useAdoptionData";

const AdopDetails = () => {
    const {id}=useParams();
    console.log(typeof(id))
    const {adoptions} = useAdoptionData();
    const adoption = adoptions.find(item=> item.id === id)
    console.log(adoption)
    return (
        <div>
            <h1>details pages</h1>
        </div>
    );
};

export default AdopDetails;