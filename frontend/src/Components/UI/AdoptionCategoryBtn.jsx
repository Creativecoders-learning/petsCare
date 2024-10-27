/* eslint-disable react/prop-types */


const AdoptionCategoryBtn = ({items,selectedCategory,handleCategory}) => {
    return (
        <div className="flex items-center justify-center gap-2 lg:gap-x-5"> 
            {
              items?.map(item=>(
                <div key={item.id} > 
                  <button onClick={()=>handleCategory(item?.category)} className={`btn py-2 px-3  rounded-md ${selectedCategory === item?.category ? 'bg-[#675BC8] text-white' : 'border border-[#675BC8] text-[#675BC8] hover:bg-[#675BC8] hover:text-white duration-500'}  `}>{item?.category} </button>
                </div>
              ))
            }

          </div>
    );
};

export default AdoptionCategoryBtn;