
import { MdDelete } from "react-icons/md";

const UserAdoptionRow = ({item}) => {

    // handle delete item
    const handleDelete =(id)=>{
        console.log(id)
        //  show alert for successfully delete adoption

    }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={item?.image} className="size-20 rounded-xl" alt="" />
      </td>

      
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap"> {item?.name}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
       <p className="text-gray-900 whitespace-no-wrap">{item?.email}</p>
      </td>


      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-red-500 whitespace-no-wrap">{item.location} </p> 
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative">{item?.date} </span>
        
      </td>
      <td className="px-5 py-5 border-y border-gray-200 bg-white text-sm">
        <MdDelete onClick={()=>handleDelete(`${item._id}`)} className="text-2xl text-red-400 cursor-pointer"></MdDelete>
      </td>
    </tr>
  );
};

export default UserAdoptionRow;
