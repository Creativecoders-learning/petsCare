import useGetPetData from "../../../Hooks/useGetPetData";
import Container from "../../UI/Container";
import SectionContent from "../../UI/SectionContent";
import PetNewsCard from "./PetNewsCard";

const PetNews = () => {
  const url = "/blogs.json";

  const item = 4;
  const { petData, error } = useGetPetData(item, url);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Container>
        <SectionContent
          alignStayle={"text-center"}
          tag={"Our Blog"}
          first={"Available Pets Blog "}
        />

        <div className="mt-10 mb-20 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {petData.slice(0, 3).map((pet) => (
              <PetNewsCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default PetNews;
