import { useState } from "react";

const DropDown = ({level,icon:Icon,items}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [selected,setSelected]= useState(level);

    const toggleDropdown =()=> setIsOpen(!isOpen)

    const handleSelected =(item)=>{
        setSelected(item)
        setIsOpen(false)
    }
    return (
        <div className="relative">
           <button  onClick={toggleDropdown} className="flex items-center w-full border rounded-md p-3 mb-3 focus-visible:outline-none">
                <Icon className='text-gray-500'/>
                <span className="ml-2 text-gray-500">{selected}</span>
                <span className="ml-auto text-[#0A453A]">{isOpen ? '▲' : '▼'}</span>
           </button> 
           {
           isOpen && <div className="absolute top-10 w-full mt-2 p-3 border bg-white rounded-md shadow-lg z-10 ">
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