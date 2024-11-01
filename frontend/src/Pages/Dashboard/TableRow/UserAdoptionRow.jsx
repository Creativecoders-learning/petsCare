
import { MdDelete } from "react-icons/md";

const UserAdoptionRow = ({item,index}) => {

    // handle delete item
    const handleDelete =(id)=>{
        console.log(id)
        //  show alert for successfully delete adoption
    }

  return (
    <tr className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
    }`}>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <img src={item?.owner_image} className="size-16 object-cover rounded-xl" alt="" />
      </td>
      
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap"> {item?.owner_name}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
       <p className="text-gray-900 whitespace-no-wrap">{item?.owner_email}</p>
      </td>


      <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <p className=" whitespace-no-wrap">{item?.location} </p> 
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
          <span className="relative">{item?.adoption_date} </span>
        
      </td>
      <td className="px-5 py-5 border-y border-gray-200 text-sm">
        <MdDelete onClick={()=>handleDelete(`${item._id}`)} className="text-2xl text-red-400 cursor-pointer"></MdDelete>
      </td>
    </tr>
  );
};

export default UserAdoptionRow;
