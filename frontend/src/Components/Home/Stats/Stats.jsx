import useGetPetData from '../../../Hooks/useGetPetData';
import Container from '../../UI/Container';
import SectionContent from '../../UI/SectionContent';
import Carousel from './Carousel';

const Stats = () => {
  const url = '/stats.json';
  const limit = 10;
  const { petData, error } = useGetPetData(limit, url);

  if (error) {
    return <div>{error}</div>;
  }

  const items = Array.isArray(petData)
    ? petData.map((item) => ({
        id: item.id,
        count: item.count,
        icon: item.icon,
        label: item.label,
        subtitle: item.subtitle,
      }))
    : [];

  console.log(items);

  return (
   <Container>
     <div className="py-5 lg:py-12 mx-5 md:mx-10  overflow-hidden">
      <div className='md:w-5/6 lg:w-3/5 mx-auto text-center my-10'>
        <SectionContent tag={'Why Choose Us?'} first={'Best Service to '} span={'Breeds'} second={'Your Loved Dog Explore '}/>
      </div>
      <div className="mt-10">
        {items.length > 0 && <Carousel items={items} />}
      </div>
    </div>
   </Container>
  );
};

export default Stats;
