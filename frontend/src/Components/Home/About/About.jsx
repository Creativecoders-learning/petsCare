import SectionContent from "../../UI/SectionContent";
import bg from "../../../assets/adoptionsImg/breeder_details_bg.jpg";
import Container from "../../UI/Container";

const About = () => {
  return (
    <div 
     style={{backgroundImage:`url(${bg})`}}
    >
      <Container>
        <div
          className=" py-20 flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="size-full h-full flex items-center justify-center text-right lg:w-1/2">
            <img
              src={
                "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={500}
              height={500}
              className="w-full text-right object-contain "
              alt=""
            />
          </div>
          <div className="w-full py-10 lg:w-1/2 text-center lg:text-left mx-3 lg:pr-16">
            <SectionContent
              alignStayle={""}
              tag={"About us "}
              first={"The Best for Your Pet! "}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum assum."
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
