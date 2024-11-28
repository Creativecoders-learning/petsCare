import { useEffect, useRef, useState } from "react";
import SectionContent from "../../UI/SectionContent";
import Slider from "react-slick";
import { Rating } from '@smastrom/react-rating'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";


import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const sliderRef = useRef()
   const [reviews,setReviews]=useState([])

   useEffect(()=>{
      fetch('/review.json')
      .then(res=>res.json())
      .then(data=>{
        setReviews(data)
      })
   },[])


   const settings ={
    dots: false,
    infinite:true,
    speed: 500,
    slidesToShow:1,
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
        <div className="relative group py-5 lg:py-12">
            <SectionContent alignStayle={'text-center mb-10'} tag={'Testimonial'} first={'Our Happy Customers'}/>

           <div className="w-full md:w-3/6 mx-auto px-5 md:px-0 text-center">
           <div className="hidden group-hover:block duration-500 arrow-right cursor-pointer absolute top-1/2 z-10 right-2 md:right-24 lg:right-80 p-1 text-4xl rounded-full text-[#0A453A]" onClick={slideRight}>
                    <FaAngleRight/>
                </div>
                <div className="hidden group-hover:block duration-500 arrow-left absolute top-1/2 z-10 left-2 md:left-20 lg:left-80 cursor-pointer  text-4xl p-1  rounded-full text-[#0A453A]" onClick={slideLeft}>
                    <FaAngleLeft/>
                </div>
           <Slider ref={sliderRef} {...settings}>
                {

                    reviews?.map((item)=>(
                        <div className="space-y-4" key={item?._id}>
                            <FaQuoteLeft className="mx-auto text-primaryBold text-6xl "/>
                            <Rating style={{ maxWidth: 250 }} value={item?.rating} readOnly className=" mx-auto"  />
                             <h1 className="lg:px-5">{item?.details} </h1>
                             <h1 className="text-3xl">{item?.name} </h1>
                        </div>
                    ))
                }
            </Slider>
           </div>
        </div>
    );
};

export default Testimonials;