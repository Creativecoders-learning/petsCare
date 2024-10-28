/* eslint-disable react/prop-types */

const HealthInfo = ({icon:Icon,title}) => {
    return (
        <div className="flex items-center gap-x-2">
            <Icon className="text-xl text-[#685CC8]"/>
            <h1 className="text-black text-base">{title} </h1>
        </div>
    );
};

export default HealthInfo;