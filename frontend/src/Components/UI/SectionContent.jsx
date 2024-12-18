
const SectionContent = ({tag,first,span,second,text,alignStayle}) => {
    return (
        <div className={` ${alignStayle} space-y-5 `}>
            <h1 className="text-xl font-nunito text-red-500 font-bold">
              {tag}
            </h1>
            <h1 className="text-[#0A453A] text-3xl md:text-4xl lg:text-4xl font-nunito font-extrabold">
              {first} <span className="text-red-500">{span}</span> <br /> {second}
            </h1>
            <p className="text-base text-gray-800 font-nunito">
              {text}
            </p>
        </div>
    );
};

export default SectionContent;