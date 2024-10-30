import { useEffect, useState } from "react";
import MeetPets from "../../UI/MeetPets";
import SectionContent from "../../UI/SectionContent";

const Puppies = () => {
    const [puppies,setPuppies] = useState([]);

    useEffect(()=>{
        fetch('/meetAdoptionPets.json')
        .then(res=>res.json())
        .then(data=> {
            // console.log(data);
            setPuppies(data)
        })
    },[puppies])


    return (
        <div className=" py-10">
            <div className="py-10">
                <SectionContent alignStayle={'w-full px-5 lg:px-0 lg:w-[700px] mx-auto text-center '} tag={'Meet the animals'} first={'Puppies Waiting for Adoption'} text={'The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information most dogs'}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-3">
            {
                puppies?.map(item=>(
                   <MeetPets key={item.id} item={item}/>
                ))
            }
        </div>
        </div>
    );
};

export default Puppies;