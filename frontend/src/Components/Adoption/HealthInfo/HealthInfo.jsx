
const HealthInfo = ({icon:Icon,title}) => {
    return (
        <div className="flex items-center gap-x-2">
            <Icon className="text-xl text-[#0A453A]"/>
            <h1 className="text-black text-base">{title} </h1>
        </div>
    );
};

export default HealthInfo;