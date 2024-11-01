import UserAdoptionRow from "../../TableRow/UserAdoptionRow";
import useAdoptionData from "../../../../Hooks/useAdoptionData";


const UserChatAdoption = () => {
    const {adoptions }=useAdoptionData([]);

    return (
        <div className="py-5 lg:py-10 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-5">
        Chat Adoption
      </h1>
      <div className=" py-4 px-5">
        <div className=" max-w-screen-lg mx-auto overflow-x-auto bg-green-400 shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Woner Image
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Woner Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  location
                </th>

                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {adoptions?.map((item) => (
                <UserAdoptionRow key={item?.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default UserChatAdoption;