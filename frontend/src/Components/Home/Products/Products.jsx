import { useRef, useState } from 'react';
import usePetsProducts from '../../../Hooks/api/usePetsProducts';
import Container from '../../UI/Container';
import SectionContent from '../../UI/SectionContent';
import ShopCard from '../../UI/ShopCard';
import '../../../index.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';

const Products = () => {
  const { petsProducts } = usePetsProducts()
  const sliderRef = useRef()
  console.log('this pets product', petsProducts)

 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const slideRight = () => {
    sliderRef.current.slickNext()
  }

  const slideLeft = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <div className='p-16 bg-amber-50'>
      <Container>
          <SectionContent alignStayle={'text-center mb-10'} tag={"Our Store"} first={"Our Best Selling Products"} />

          <div className='relative group  pt-10'>
            {/* arrows */}
            <div className="hidden group-hover:block duration-500 arrow-right cursor-pointer absolute top-52 z-10 right-0 text-2xl rounded-full text-white bg-[#0A453A]" onClick={slideRight}>
              <TiArrowForward />
            </div>
            <div className="hidden group-hover:block duration-500 arrow-left absolute top-52 z-10 left-0 cursor-pointer  text-2xl rounded-full text-white bg-[#0A453A]" onClick={slideLeft}>
              <TiArrowBack />
            </div>

            <Slider ref={sliderRef} {...settings}>
            {
                petsProducts?.map(product => (
                  <ShopCard key={product.id} item={product} />
                ))
              }

            </Slider>


          </div>
      </Container>
    </div>
  );
};

export default Products;
