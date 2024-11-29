
import React from 'react';
import SectionContent from '../../UI/SectionContent';
import { FaArrowRight } from 'react-icons/fa';
import VetProfile from '../../UI/VetProfile';

const vets = [
    {name:'Benjamin Shah',specialist:'Pharmacology Specialist', img:'https://i.ibb.co.com/fGQJs8Q/team-pic-1.jpg', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ulla."},
    {name:'Helene Paquet',specialist:'Parasitology Specialist', img:'https://i.ibb.co.com/5jnQ5vz/team-pic-2.jpg',text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ulla."},
    {name:'Itsuki Takahashi',specialist:'Veterinary Surgeon', img:'https://i.ibb.co.com/fvLrQL4/team-pic-3.jpg',text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ulla."},
]

const MeetVets = () => {
    return (
        <div className='bg-amber-50 py-20'>
            {/* title of vets section */}
            <div
                className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-end justify-between gap-10 px-5 md:px-40 lg:px-0"
            >
                <div className="flex items-center justify-center text-center lg:text-left lg:w-4/6">
                    <SectionContent
                        alignStayle={""}
                        first={"Meet our veterinarian "}
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum assum."
                        }
                    />
                </div>
                <div className="w-full lg:w-2/6 flex justify-center lg:justify-end items-end">
                    <button className="flex items-center gap-x-2 text-xl font-medium ">View All Vets <FaArrowRight></FaArrowRight> </button>
                </div>
            </div>

            {/* here added vets card */}
            <div className='mt-32 px-5 md:px-20 lg:px-0 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-36 items-center gap-5'>
                {vets.map(item=>(
                    <VetProfile vetName={item.name} specialist={item.specialist} img={item.img} text={item.text}/>
                ))}
            </div>
        </div>
    );
};

export default MeetVets;