import { FaEdit } from "react-icons/fa";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import usePetsProducts from "../../../../Hooks/api/usePetsProducts";
import { FaTrash } from "react-icons/fa6";

export default function MyOrders() {
  const {petsProducts} = usePetsProducts();
  return (
    <div className="p-8 font-inter">
      <PrimaryTitle titleStyle="text-primaryBold font-semibold">
        Track Your Orders
      </PrimaryTitle>
      <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
        <table className="min-w-full">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Views</th>
              <th className="p-4 font-semibold">Rating</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-myGray">
            {petsProducts.map((item, index) => (
              <tr
                key={item._id}
                className={`${
                  index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
                }`}
              >
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-12 h-12 object-cover rounded-md shadow-md"
                  />
                </td>
                <td className="p-4 font-medium">{item?.title}</td>
                <td className="p-4">{item?.category}</td>
                <td className="p-4">{item?.view_count}</td>
                <td className="p-4">{item?.rating}</td>
                <td className="p-4 flex items-center justify-center space-x-3">
                  <button
                    // onClick={() => handleUpdateForm(item._id)}
                    className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                  >
                    <FaEdit />
                  </button>
                  <button
                    // onClick={() => handleDeleteBtn(item?._id)}
                    className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
