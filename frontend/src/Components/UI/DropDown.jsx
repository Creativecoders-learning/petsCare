import { useState } from "react";

const DropDown = ({level,icon:Icon,items,updateFielder,filterKey}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [selected,setSelected]= useState(level);

    const toggleDropdown =()=> setIsOpen(!isOpen)

    const handleSelected =(item)=>{
        setSelected(item)
        updateFielder(filterKey,item)
        setIsOpen(false)
    }
    return (
        <div className="relative">
           <button  onClick={toggleDropdown} className="flex items-center justify-start text-left w-full border bg-white border-gray-300 rounded-md p-3 focus-visible:outline-none">
                <Icon className='text-gray-500'/>
                <span className="ml-1 pr-2 text-gray-700">{selected}</span>
                <span className="ml-auto text-[#0A453A]">{isOpen ? '▲' : '▼'}</span>
           </button> 

           {/* dropdown menu */}
           {
           isOpen && <div className="absolute top-10 max-w-fit mt-3 p-4 border bg-white rounded-md shadow-lg z-20 ">
            {
               items?.map((item,inx)=>(
                   <div onClick={()=>handleSelected(item)} key={inx}
                   className="px-4 py-2 cursor-pointer hover:text-white hover:bg-[#0A453A]"
                   >
                       {item}
                   </div>
               ))
            }
          </div>
           }
        </div>
    );
};

export default DropDown;