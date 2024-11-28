import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import MeetPets from "../../UI/MeetPets";
import SectionContent from "../../UI/SectionContent";
import Slider from 'react-slick'
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import Container from "../../UI/Container";


const Puppies = () => {
    const [puppies, setPuppies] = useState([]);
    const sliderRef = useRef();

    useEffect(() => {
        fetch('/petsAdoption.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const allPuppies = data.filter(item => item.category === "Dog")
                setPuppies(allPuppies)
            })
    }, [puppies])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }      
    const slideRight = () => {
        sliderRef.current.slickNext()
        console.log('slick to nect')
    }
    const slideLeft = () => {
        sliderRef.current.slickPrev();
        console.log('slide to prev')
    }


    return (
        <Container>

            <div className=" py-10">
                <div className="py-10">
                    <SectionContent alignStayle={'w-full px-5 lg:px-0 lg:w-[700px] mx-auto text-center '} tag={'Meet the animals'} first={'Puppies Waiting for Adoption'} text={'The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information most dogs'} />
                </div>

                <div className="relative group">
                    <div className="hidden group-hover:block duration-500 arrow-right cursor-pointer absolute top-36 z-10 right-0 text-2xl rounded-full text-white bg-[#0A453A]" onClick={slideRight}>
                   
                    <TiArrowForward/>
                    </div>
                    <div className="hidden group-hover:block duration-500 arrow-left absolute top-36 z-10 left-0 cursor-pointer  text-2xl rounded-full text-white bg-[#0A453A]" onClick={slideLeft}>
                      <TiArrowBack />
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        {
                            puppies?.map(item => (
                                <MeetPets key={item._id} item={item} />
                            ))
                        }
                    </Slider>


                </div>

            </div>
        </Container>
    );
};

export default Puppies;