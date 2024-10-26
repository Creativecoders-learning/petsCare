import { useParams } from "react-router-dom";
import useAdoptionData from "../../../hooks/useAdoptionData";
import Container from "../../UI/Container";
import { TbGenderBigender } from "react-icons/tb";
import AnimalCardInfo from "../../UI/AnimalCardInfo";
import { PiDogDuotone } from "react-icons/pi";
import { FaPagelines, FaRegClock } from "react-icons/fa";
import Button from "../../UI/Button";




const AdopDetails = () => {
  const { id } = useParams();
  console.log(typeof id);
  const { adoptions } = useAdoptionData();
  const adoption = adoptions.find((item) => item.id === id);
  console.log(adoption);
  return (
    <Container>
      <div>
        {/* sheleter info */}
        <div className="flex items-center gap-x-3">
          <img
            width="40"
            height="20"
            classNameName="rounded-full"
            src={adoption?.shelter_photo}
            alt=""
          />
          <div>
            <h1>{adoption?.shelter_name}</h1>
            <p>Location: {adoption?.location}</p>
          </div>
        </div>

        {/* animal photo and content */}
        <div className="flex items-start gap-5 my-10">
          <div className="lg:w-3/5">
            <img
              src={adoption?.image}
              alt=""
              height="20"
              className="max-h-[450px] w-full bg-cover hover:scale-95 duration-300 shadow-2xl"
            />
          </div>
          <div className="lg:w-2/5  px-10 mb-5">
            <div className="space-y-3 pb-10">
              <h1 className="text-2xl">{adoption?.animal_name} Story</h1>
              <p>{adoption?.description}</p>
            </div>
            <hr />
          </div>
        </div>

        {/* indivisual card */}
        <div className="flex items-center">
        <div className="w-full lg:w-3/5 flex flex-wrap items-center gap-4 p-4 ">
            <AnimalCardInfo item={adoption?.gender} name={'Gender'} icon={TbGenderBigender}></AnimalCardInfo>
            <AnimalCardInfo item={adoption?.breed} name={'Breed'} icon={PiDogDuotone}></AnimalCardInfo>
            <AnimalCardInfo item={adoption?.size} name={'Size'} icon={FaPagelines}></AnimalCardInfo>
            <AnimalCardInfo item={adoption?.age} name={'Age'} icon={FaRegClock}></AnimalCardInfo>
          </div>
          <div className="w-full lg:w-2/5 text-center px-10">
              <div className="border p-5 space-y-4">
                <h1>If you are interested to adopt </h1>
                <Button>Get Started </Button>
              </div>
          </div>
        </div>

        <div className="p-6 border bg-white rounded-xl shadow-md space-y-4 my-5">
          {/* <!-- Vaccination Table --> */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 border text-left text-xs font-medium text-gray-500 uppercase">
                    Age
                  </th>
                  <th className="px-6 py-3 border text-center text-xs font-medium text-gray-500 uppercase">
                    8th Week
                  </th>
                  <th className="px-6 py-3 border text-center text-xs font-medium text-gray-500 uppercase">
                    14th Week
                  </th>
                  <th className="px-6 py-3 border text-center text-xs font-medium text-gray-500 uppercase">
                    22nd Week
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border text-sm font-medium text-gray-800">
                    Vaccinated
                  </td>
                  <td className="px-6 py-4 border text-sm text-center text-gray-600">
                    Bordetella <br /> Match <br /> Leptospirosis
                  </td>
                  <td className="px-6 py-4 border text-sm text-center text-gray-600">
                    Bordetella, Canine Anfulanza <br /> Match <br />
                  </td>
                  <td className="px-6 py-4 border text-sm text-center text-gray-600">
                    Bordetella, Canine Anfulanza <br /> Match <br />
                    Leptospirosis
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdopDetails;
