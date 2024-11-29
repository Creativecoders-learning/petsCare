import SectionContent from "../../UI/SectionContent";
import bg from "../../../assets/adoptionsImg/breeder_details_bg.jpg";
import Container from "../../UI/Container";

const images = [{ img: 'https://i.ibb.co.com/QX6Pddz/img-home01-EHJQ9-B2-1.jpg', title: "Pets Adoption" }, { img: 'https://i.ibb.co.com/KyNhPn2/img-sv-FNTFM9-Q-1.jpg', title: "Pets Medicines" },,{ img: 'https://i.ibb.co.com/Gc1B5qz/image3-1.jpg', title: 'Healthy meals' }, { img: 'https://i.ibb.co.com/c6cHc3s/img-home01-W4-YA7-CK.jpg', title: "Veterinary care" }]

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-primaryBold bg-opacity-25 py-20"
    >
      <Container>
        <div
          className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:items-end gap-10 px-10"
        >
          <div className=" flex items-center justify-center text-center lg:text-left lg:w-4/6">
            <SectionContent
              alignStayle={""}
              tag={"About us "}
              first={"We are The Best For Your Pet Care "}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum assum."
              }
            />
          </div>
          <div className="w-full lg:w-2/6 text-center lg:text-right">
            <button className="text-sm px-12 py-4 bg-red-400 text-white hover:bg-primaryBold duration-700">More About Us</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 lg:gap-10 pt-20 max-w-screen-lg mx-auto ">
          {
            images.map((img, inx) => (
              <div className="text-center mx-auto">
                <img
                  style={{
                    boxShadow: 'rgb(128, 128, 128) 0px 0px 20px 2px'
                  }}
                  key={inx}
                  className="size-48 rounded-full hover:scale-105 duration-500 "
                  src={img.img}
                  alt=""
                />

                <h1 className="text-2xl text-center mt-6">{img.title} </h1>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
};

export default About;
