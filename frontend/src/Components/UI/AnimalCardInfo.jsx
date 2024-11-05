
const AnimalCardInfo = ({item,name}) => {
    return (
        <div>
            {/* <!-- Individual Info Card --> */}
            <div className=" rounded-md">
              <h1 className="text-xl font-nunito font-bold">{name}</h1>
              <h1 className="text-base font-nunito font-semibold text-red-600">{item} </h1>
            </div>
        </div>
    );
};

export default AnimalCardInfo;