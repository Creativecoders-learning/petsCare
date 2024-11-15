import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import UpdateStatus from "../Common/Modal/UpdateStatus"

const AdoptionHistoryRow = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(item?.status)

    const modalHandler = async (selected) => {

        console.log(selected);
        setStatus(status)
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
                <img src={item?.image[0]} alt={item?.title} className="w-12 h-12 object-cover rounded-md shadow-md" />
            </td>
            <td className="p-4 font-medium">{item?.name}</td>
            <td className="p-4">{item?.category}</td>
            <td className="p-4">{item?.date}</td>
            <td className="p-4">{item?.location}</td>
            <td className="p-4">{item?.status}</td>
            <td className="p-4 text-center">{item?.admin_response}</td>
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
