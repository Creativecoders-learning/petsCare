import glide from '@glidejs/glide';
import { useEffect } from 'react';
import Button from '../../UI/Button';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  useEffect(() => {
    const slider = new glide('.glide-02', {
      type: 'carousel',
      focusAt: 'center',
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: '[&>*]:bg-wuiSlate-700',
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <h2 className="text-4xl text-center font-semibold pt-10">
        What People say <span className="text-secondary">about us</span>
      </h2>
      {/*<!-- Component: Carousel with indicators inside --> */}
      <div className="glide-02 relative w-full mt-10">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <TestimonialCard />
            </li>
            <li>
              <TestimonialCard />
            </li>
            <li>
              <TestimonialCard />
            </li>
            <li>
              <TestimonialCard />
            </li>
            <li>
              <TestimonialCard />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      <div className="text-center my-10">
        <Button primary>Write a Review</Button>
      </div>
      {/*<!-- End Carousel with indicators inside --> */}
    </>
  );
};
export default Testimonial;
