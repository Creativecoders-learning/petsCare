/* eslint-disable react/prop-types */


const AdoptionCategoryBtn = ({items,selectedCategory,handleCategory}) => {
    return (
        <div className="flex items-center justify-center gap-x-10"> 
            {
              items?.map(item=>(
                <div key={item.id} > 
                  <button onClick={()=>handleCategory(item?.category)} className={`btn py-2 px-3  rounded-md ${selectedCategory === item?.category ? 'bg-indigo-500' : 'bg-indigo-300'}  `}>{item?.category} </button>
                </div>
              ))
            }

          </div>
    );
};

export default AdoptionCategoryBtn;