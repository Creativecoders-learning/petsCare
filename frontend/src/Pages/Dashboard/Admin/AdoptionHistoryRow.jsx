import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import UpdateStatus from "../Common/Modal/UpdateStatus"
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";

const AdoptionHistoryRow = ({ item, index,refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const apiHandle = useAxios()

    const modalHandler = async (selected) => {
        console.log(item._id)
        console.log(selected)
        const res = await apiHandle.patch(`/updatedAdminResponse/${item?._id}`,{status:selected})
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            toast.success(`admin response has been updated`)
            setIsOpen(false)
            refetch()

        }
        setIsOpen(false)
    }

    return (
        <tr
            key={item?._id}
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
            <td className="p-4">{item?.location}</td>
            <td className="p-4">
                {item?.status === 'Adopted' ? <p className="text-teal-500">{item?.status} </p> : <p>{item?.status}</p> }

            </td>
            <td className="p-4 text-center">
                {item?.admin_response === 'Reject' ? <p className="text-red-500">{item.admin_response} </p> : item.admin_response === 'Approved' ? <p className="text-green-600">{item?.admin_response}</p> : <p className="text-yellow-500">{item?.admin_response}</p> }
            </td>
            <td className="p-4">
               <button onClick={()=>setIsOpen(true)}>
               <FaEdit></FaEdit>
               </button>
            </td>
            <UpdateStatus item={item} setIsOpen={setIsOpen} isOpen={isOpen} modalHandler={modalHandler} ></UpdateStatus>
        </tr>
    );
};

export default AdoptionHistoryRow;
