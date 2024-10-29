import { useState } from "react";

const DropDown = ({level,icon,items}) => {
    const [selected,setSelected]= useState();
    const [isOpen,setIsOpen] = useState(level);
    const handleSelected =(item)=>{
        setSelected(item)
        setIsOpen(false)
    }
    return (
        <div className="relative">
           <button className="flex items-center w-full border rounded-md p-3 focus-visible:outline-none">
                {icon}
                <span className="ml-2">{selected}</span>
           </button> 
           {
           isOpen && <div className="absolute w-full  p-3 border rounded-md shadow-lg ">
            {
               items?.map((item,inx)=>(
                   <div onClick={()=>handleSelected(item)} key={inx}
                   className="px-4 py-2 cursor-pointer hover:bg-gray-200"
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