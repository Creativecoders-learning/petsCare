/* eslint-disable react/prop-types */

const AnimalCardInfo = ({item,name, icon:Icon}) => {
    return (
        <div>
            {/* <!-- Individual Info Card --> */}
            <div className="relative bg-blue-100 py-5 px-10 space-y-5 rounded-md">
              <div className=" rounded-full px-2 py-3 bg-indigo-500 flex items-center justify-center hover:scale-110 duration-300">
                <Icon className="text-6xl text-white"/>
              </div>
              <div className="text-center ">
             <h1 className="text-xl text-black"> {name}</h1>
             <h1 className="text-xl text-indigo-500">{item}</h1>
             </div>
            </div>
        </div>
    );
};

export default AnimalCardInfo;