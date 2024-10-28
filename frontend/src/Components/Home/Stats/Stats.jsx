import useGetPetData from '../../../Hooks/useGetPetData';
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
    <div className="my-20 ">
      <h2 className="text-4xl text-center font-semibold ">
        <p className="text-primaryBold"> {items[1]?.count} </p>
        <span className="text-secondary "> lives touched and counting!</span>
      </h2>
      <div className="mt-10 ">
        {items.length > 0 && <Carousel items={items} />}
      </div>
    </div>
  );
};

export default Stats;
