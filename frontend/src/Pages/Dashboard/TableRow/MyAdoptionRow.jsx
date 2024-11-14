import   { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import UpdateStatus from "../Common/Modal/UpdateStatus"

const MyAdoptionRow = ({item,index}) => {
    const [isOpen,setIsOpen]=useState(false);
    const [status,setStatus]=useState(item?.status)

    const modalHandler =async(selected)=>{
        
            console.log(selected);
            setStatus(status)
            setIsOpen(false)

    }

    // handle delete item
    const handleDelete =(id)=>{
        console.log(id)
        //  show alert for successfully delete adoption
    }

  return (
    <tr
    key={item.id}
    className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
          }`}
>
    <td className="p-4 font-medium">{index + 1}</td>
    <td className="p-4">
          <img src={item?.image} alt={item?.title} className="w-12 h-12 object-cover rounded-md shadow-md" />
    </td>
    <td className="p-4 font-medium">{item?.name}</td>
    <td className="p-4">{item?.category}</td>
    <td className="p-4">{item?.date}</td>
    <td className="p-4">{item?.status}</td>
    <td className="p-4">{item?.admin_response}</td>
    
</tr>
  );
};

export default MyAdoptionRow;
