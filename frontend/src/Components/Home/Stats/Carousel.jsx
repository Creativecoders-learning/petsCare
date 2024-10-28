import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import PropTypes from 'prop-types';
import CarsoulsItem from './CarsoulsItem';

const Carousel = ({ items }) => {
  const glideRef = useRef(null);

  useEffect(() => {
    const slider = new Glide(glideRef.current, {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 3500,
      animationTimingFunc: 'linear',
      perView: 4,
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div ref={glideRef} className="glide-09 relative w-full">
      <div data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap flex w-full overflow-hidden p-0 gap-6">
          {items.map((item, index) => (
            <CarsoulsItem
              key={index}
              icon={item.icon}
              count={item.count}
              label={item.label}
              subtitle={item.subtitle}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Carousel;
