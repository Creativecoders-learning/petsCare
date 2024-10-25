import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdoptionCard from "../../../Components/Shared/AllCards/AdoptionCard";

const Categories = () => {
  const [adoptions, setAdoptions] = useState([]);
  const dogs = adoptions.filter((item) => item.category === "Dog");
  const cats = adoptions.filter((item) => item.category === "Cat");
  const birds = adoptions.filter((item) => item.category === "Bird");
  const rabbits = adoptions.filter((item) => item.category === "Rabbit");
  console.log(dogs);

  useEffect(() => {
    fetch("/petsAdoption.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdoptions(data);
      });
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl">Pets Available For Adoption Nearby</h1>
      {/* added filter by tabs */}
      <div className="max-w-screen-lg mx-auto mt-10">
        <Tabs>
          <TabList>
            <Tab>Dog</Tab>
            <Tab>Cat</Tab>
            <Tab>Rabbits</Tab>
            <Tab>Birds</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-items-center gap-10">
              {dogs?.map((item) => (
                <AdoptionCard key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-items-center gap-10">
              {cats?.map((item) => (
                <AdoptionCard key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-items-center gap-10">
              {rabbits?.map((item) => (
                <AdoptionCard key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-items-center gap-10">
              {birds?.map((item) => (
                <AdoptionCard key={item.id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
