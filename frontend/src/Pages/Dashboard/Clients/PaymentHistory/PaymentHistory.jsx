import { FaTrash } from "react-icons/fa";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import useOrders from "../../../../Hooks/api/useOrders";

export default function PaymentHistory() {
  const { orders } = useOrders();
  console.log(orders);
  return (
    <div className="p-8 font-inter">
      <PrimaryTitle titleStyle="text-primaryBold font-semibold">
        Order History
      </PrimaryTitle>
      <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
        <table className="min-w-full">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Transition Id</th>
              <th className="p-4 font-semibold">Product Name & email</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Method</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-myGray">
            {orders?.map((item, index) => (
              <tr
                key={item._id}
                className={`${
                  index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
                }`}
              >
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4">{item?.transactionId}</td>
                {/* <td className="p-4">
                  <div className="flex gap-2 items-center">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-12 h-12 object-cover rounded-md shadow-md"
                    />
                    <p className="p-4 font-medium">{item?.title}</p>
                  </div>
                </td> */}
                {/* <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <span>{"md. Hasan kha"}</span>
                    <span>{"mdhasankha.wd@gmail.com"}</span>
                  </div>
                </td> */}
                {/* <td className="p-4">{item?.rating || 0}</td> */}
                <td className="p-4">
                    <span className="text-lg cursor-pointer hover:bg-primary transition-all duration-300 ease-in-out"><FaTrash/></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
