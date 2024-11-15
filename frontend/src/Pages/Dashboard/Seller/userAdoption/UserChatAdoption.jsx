import UserAdoptionRow from "../../TableRow/UserAdoptionRow";
import useUserAdoption from "../../../../hooks/useUserAdoption";


const UserChatAdoption = () => {
    const {userAdoptions,refetch }= useUserAdoption([]);

    return (
        <div className="py-5 lg:py-10 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-5">
        Chat Adoption
      </h1>
      <div className="py-4 px-5">
        <div className=" max-w-screen-lg mx-auto custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th
                  scope="col"
                  className="p-5  text-left text-sm uppercase font-normal"
                >
                  Owner Image
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-sm uppercase font-normal"
                >
                  Owner Name
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-sm uppercase font-normal"
                >
                  email
                </th>
                <th
                  scope="col"
                  className="p-5 text-left text-sm uppercase font-normal"
                >
                  location
                </th>

                <th
                  scope="col"
                  className="p-5 text-left text-sm uppercase font-normal"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="p-5 text-left text-sm uppercase font-normal"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userAdoptions?.map((item,index) => (
                <UserAdoptionRow key={item?.id} item={item} index={index} refetch={refetch}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default UserChatAdoption;