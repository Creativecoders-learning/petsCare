import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import MeetPets from "../../UI/MeetPets";
import SectionContent from "../../UI/SectionContent";
import Slider from 'react-slick'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Puppies = () => {
    const [puppies,setPuppies] = useState([]);
    const sliderRef = useRef();

    useEffect(()=>{
        fetch('/meetAdoptionPets.json')
        .then(res=>res.json())
        .then(data=> {
            // console.log(data);
            setPuppies(data)
        })
    },[puppies])

    const settings ={
        dots: false,
        infinite:true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:1,
        arrows: false,
        responsive: [
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
     }
   const slideRight = ()=>{
     sliderRef.current.slickNext()
     console.log('slick to nect')
   }
   const slideLeft = ()=>{
     sliderRef.current.slickPrev();
     console.log('slide to prev')
   }


    return (
        <div className=" relative py-10">
            <div className="py-10">
                <SectionContent alignStayle={'w-full px-5 lg:px-0 lg:w-[700px] mx-auto text-center '} tag={'Meet the animals'} first={'Puppies Waiting for Adoption'} text={'The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information most dogs'}/>
            </div>
            
            <div className="">
            <div className="arrow-right cursor-pointer absolute top-1/2 z-10 right-4  text-2xl rounded-md text-white bg-[#0A453A]" onClick={slideRight}>
                    <FaAngleRight></FaAngleRight>
                </div>
                <div className="arrow-left absolute top-1/2 z-10 left-4 cursor-pointer  text-2xl rounded-md text-white bg-[#0A453A]" onClick={slideLeft}>
                    <FaAngleLeft></FaAngleLeft>
                </div>
            <Slider ref={sliderRef} {...settings}>
            {
                puppies?.map(item=>(
                   <MeetPets key={item.id} item={item}/>
                ))
            }
            </Slider>

           
        </div>
         
        </div>
    );
};

export default Puppies;