import 'react-tabs/style/react-tabs.css';
import { MdTransgender } from "react-icons/md";
import { TbTimeDuration30 } from "react-icons/tb";
import { useState } from 'react';
import useAdoptionData from '../../../Hooks/useAdoptionData';
import AdoptionButton from '../../UI/AdoptionButton';
import DropDown from '../../UI/DropDown';
import { FaSearch } from 'react-icons/fa';
import AdoptionCard from '../../UI/AdoptionCard';

const Categories = () => {
  const { filteredAdoption, filters, applyFilter, updateFielder, loading, err, refetch } = useAdoptionData();


  return (
    <div className='py-10'>
        {/* added filter by tabs */}
        <div className='lg:max-w-max bg-slate-200 mx-auto p-5 rounded-md'>
          {/* filtering option */}
          <div className="space-y-3 ">
            <div className='flex flex-wrap gap-5 justify-center items-center'>
              <div className="">
                {/* location field */}
                <input
                  type="text"
                  name="location"
                  className=" w-full border rounded-md p-3 text-sm focus:ring-1 focus-visible:outline-none"
                  placeholder="location"
                  onChange={(e) => updateFielder(e.target.name, e.target.value)}
                  id=""
                />
              </div>

              {/* color */}
              <div className="flex items-center gap-x-2 ">
                <input
                  type="text"
                  name="color"
                  className=" w-full p-3 border rounded-md text-sm focus:right-5 focus-visible:outline-none  "
                  placeholder="Color"
                  onChange={(e) => updateFielder(e.target.name, e.target.value)}
                  id=""
                />
              </div>

              {/* dropdown */}
              <DropDown
                level={"Category"}
                icon={MdTransgender}
                items={["Dog", "Cat", "Bird", "Rabbit"]}
                updateFielder={updateFielder}
                filterKey="category"
              ></DropDown>
              <DropDown
                level={"Breeder"}
                icon={MdTransgender}
                items={["Labrador Retriever", "Siamese", "Parrot", "Mini Lop", "Golden Retriever", "Beagle", "British Shorthair"]}
                updateFielder={updateFielder}
                filterKey="breed"
              ></DropDown>
              <DropDown
                level={"Adult"}
                icon={TbTimeDuration30}
                items={["Adult", "Puppy", "Senior"]}
                updateFielder={updateFielder}
                filterKey="age"
              ></DropDown>
              {/* apply button */}
              <AdoptionButton
                onclick={applyFilter}
                text={"Find New Pets "}
                btnStyle={'w-48'}
              ></AdoptionButton>
            </div>


          </div>
        </div>

      <div className="text-center p-10">
        <h1 className="text-3xl">Pets Available For Adoption Nearby</h1>

        <div className=" mt-5">
          {/* Category Card items */}
          <div>
            {filteredAdoption.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-5 lg:gap-10 p-10 '>
                {
                  filteredAdoption?.map((adoption) => (
                    <AdoptionCard key={adoption?._id} item={adoption}></AdoptionCard>
                  ))
                }
              </div>
            ) : (
              <p>No pets found matching the criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
