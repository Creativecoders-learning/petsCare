import { FaEdit, FaTrash } from "react-icons/fa";

const MyServicesRow = ({
  service,
  index,
  handleDeleteService,
  handleEditService,
}) => {
  const { vetName, vetEmail, serviceType, image, _id } = service || {};
  console.log(service.status);
  return (
    <tr
      key={service?._id}
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">{index + 1}</td>
      <td className="p-4 font-medium">
        <img
          src={image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">{vetName}</td>
      <td className="p-4">{vetEmail}</td>
      <td className="p-4">{serviceType}</td>
      <td className="p-4">
        {service.status === "Approved" && (
          <span className="p-3 text-xs rounded-full bg-[#62C474] text-white">
            Approved
          </span>
        )}
        {service.status === "Reject" && (
          <span className="p-3 text-xs rounded-full bg-[#FE3839] text-white">
            Rejected
          </span>
        )}
        {service.status === "Pending" |
          (!service.status && (
            <span className="p-3 text-xs rounded-full bg-[#FF7801] text-white">
              Pending
            </span>
          ))}
      </td>
      <td className="p-4 flex justify-center gap-2">
        <button
          onClick={() => handleEditService(service)}
          className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDeleteService(_id)}
          className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyServicesRow;
