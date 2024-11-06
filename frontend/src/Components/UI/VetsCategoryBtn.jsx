const VetsCategoryBtn = ({items,selectedCategory,handleCategory}) => {
    return (
        <div className="flex items-center justify-center gap-2 lg:gap-x-5"> 
            {
              items?.map(item=>(
                <div key={item.id} > 
                  <button onClick={()=>handleCategory(item?.category)} className={`btn py-2 px-3  rounded-md ${selectedCategory === item?.category ? 'bg-red-600 text-white' : 'border border-[#0A453A] text-[#0A453A] hover:bg-[#0A453A] hover:text-white duration-500'}  `}>{item?.category} </button>
                </div>
              ))
            }

          </div>
    );
};

export default VetsCategoryBtn;