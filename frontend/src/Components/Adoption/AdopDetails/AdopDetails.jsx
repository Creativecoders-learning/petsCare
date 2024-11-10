import { Link, useParams } from "react-router-dom";
import useAdoptionData from "../../../Hooks/useAdoptionData";
import Container from "../../UI/Container";
import { MdTransgender } from "react-icons/md";
import { TbTimeDuration30 } from "react-icons/tb";

import {
  FaSearch,
  FaTemperatureHigh,
  FaTextHeight,
  FaWeight,
} from "react-icons/fa";
import HealthInfo from "../HealthInfo/HealthInfo";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import detailsBg from "../../../assets/adoptionsImg/breeder_details_bg.jpg";
import DropDown from "../../UI/DropDown";
import AdoptionButton from "../../UI/AdoptionButton";
import AnimalCardInfo from "../../UI/AnimalCardInfo";
import NewsLatter from "../../UI/NewsLatter";

const AdopDetails = () => {
  const user = true;
  const { id } = useParams();
  console.log(typeof id);
  const { adoptions } = useAdoptionData();
  const adoption = adoptions.find((item) => item._id === id);
  console.log(adoption);

  return (
    <div
      style={{ backgroundImage: `url(${detailsBg})` }}
      className="bg-cover pb-10"
    >
      <Breadcrumb title={"Breeder details"}></Breadcrumb>
      <Container>
        <div className="mt-10 flex flex-col lg:flex-row gap-y-5 gap-x-20">
          <div className="lg:w-4/6 rounded-lg bg-white p-5 lg:p-10">
            {/* sheleter info */}
            <div className="flex items-center gap-x-3">
              <img
                width={500}
                height={500}
                className="size-20 rounded-full object-cover"
                src={`${
                  adoption?.shelter_photo
                    ? adoption?.shelter_photo
                    : "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }`}
                alt=""
              />
              <div>
                <h1 className="text-2xl mb-1">{adoption?.shelter_name}</h1>
                <p>Location: {adoption?.location}</p>
              </div>
            </div>

            {/* animal photo and content */}
            <div className="gap-5 my-10">
              <div className="">
                <img
                  src={adoption?.image[0]}
                  alt=""
                  height="20"
                  className="max-h-[450px] w-full bg-cover duration-300 shadow-xl"
                />
              </div>
              <div className="mt-5">
                <div className="space-y-3 h-3/6 flex flex-col justify-start pb-3 mb-5">
                  <h1 className="text-2xl font-nunito font-extrabold">
                    {adoption?.animal_name} Story
                  </h1>
                  <p>{adoption?.description}</p>
                </div>

                <hr />

                <div className="space-y-8">
                  {/* pet information */}
                  <h1 className="text-2xl mt-5 font-nunito font-extrabold">
                    Pet Information
                  </h1>

                  <div className="space-y-5">
                    {/* adoption basic info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-5 ">
                      <AnimalCardInfo
                        name={"Gender:"}
                        item={adoption?.gender}
                      ></AnimalCardInfo>
                      <AnimalCardInfo
                        name={"Name:"}
                        item={adoption?.name}
                      ></AnimalCardInfo>
                      <AnimalCardInfo
                        name={"Color:"}
                        item={adoption?.color}
                      ></AnimalCardInfo>
                      <AnimalCardInfo
                        name={"Pet ID:"}
                        item={adoption?.id}
                      ></AnimalCardInfo>
                    </div>

                    {/* adoption basic info 2 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-5 ">
                      <AnimalCardInfo
                        name={"Size:"}
                        item={adoption?.size}
                      ></AnimalCardInfo>
                      <AnimalCardInfo
                        name={"Age:"}
                        item={adoption?.age}
                      ></AnimalCardInfo>
                       <AnimalCardInfo
                        name={"Breed:"}
                        item={adoption?.breed}
                      ></AnimalCardInfo>
                      <AnimalCardInfo
                        name={"City:"}
                        item={adoption?.location}
                      ></AnimalCardInfo>
                     
                    </div>
                  </div>

                   {/* behavior and health info */}
                  <div className=" h-3/6 mt-5 space-y-2">
                   <h1 className="text-2xl mt-5 font-nunito font-extrabold mb-5">Behavior & compatibility</h1>
                    <HealthInfo
                      icon={FaTemperatureHigh}
                      title={adoption?.temperament}
                    />
                    <HealthInfo
                      icon={FaWeight}
                      title={`${adoption?.behavior?.good_with_kids}`}
                    />
                    <HealthInfo
                      icon={FaTextHeight}
                      title={adoption?.behavior?.good_with_other_pets}
                    />
                    <HealthInfo
                      icon={FaWeight}
                      title={adoption?.behavior?.house_trained}
                    />
                    <HealthInfo icon={FaWeight} title={adoption?.weight} />
                    <HealthInfo icon={FaTextHeight} title={adoption?.height} />
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/get-started`}>
            <AdoptionButton
              disabled={!user}
              text={"Adoption"}
              fullWidth={false}
              btnStyle={'w-60'}
            />
            </Link>
          </div>

          {/* sidebar */}
          <div className="lg:w-2/6 rounded-lg bg-white p-10">
            <h1 className="text-3xl font-nunito font-bold text-[#0A453A]">
              Find Your Pets
            </h1>

            {/* filtering option */}
            <div className="space-y-3">
              <div className="relative mt-2">
                {/* search field */}
                <input
                  type="text"
                  name=""
                  className=" w-full border rounded-md p-3 text-sm focus:ring-1 focus-visible:outline-none"
                  placeholder="Search"
                  id=""
                />
                <span className="absolute right-0 top-0 bottom-0 bg-red-500 flex items-center justify-center text-white py-3 p-3">
                  <FaSearch></FaSearch>
                </span>
              </div>

              {/* location */}
              <input
                type="text"
                name=""
                placeholder="location"
                className="flex w-full rounded-md border px-3 py-3 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
              />

              {/* date */}
              <div className="flex items-center gap-x-2 ">
                <input
                  type="text"
                  name=""
                  className=" w-full p-3 border rounded-md text-sm focus:right-5 focus-visible:outline-none  "
                  placeholder="White"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  className="w-full p-3 border rounded-md text-sm focus:right-5 focus-visible:outline-none   "
                  placeholder="2024"
                  id=""
                />
              </div>

              {/* dropdown */}
              <div>
                <DropDown
                  level={"Breeder"}
                  icon={MdTransgender}
                  items={["Breeder", "Trainer", "Groomer"]}
                ></DropDown>
                <DropDown
                  level={"Adult"}
                  icon={TbTimeDuration30}
                  items={["6 Months", "9 Months", "12 Months"]}
                ></DropDown>
              </div>

              {/* apply button */}
              <AdoptionButton
                text={"Find New Pets "}
                fullWidth={true}
              ></AdoptionButton>
            </div>

            {/* newletter */}
            <NewsLatter></NewsLatter>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdopDetails;
