const AdoptionFacts = ({ title, percentage }) => {
  return (
    <div className="p-8 bg-white shadow-xl flex items-center justify-center rounded-md">
      <div className="text-center">
        <h1 className="text-6xl text-[#0A453A] hover:text-red-600 duration-300 font-nunito font-extrabold ">{percentage} </h1>
        <h1 className="text-xl text-gray-500">{title} </h1>
      </div>
    </div>
  );
};

export default AdoptionFacts;
