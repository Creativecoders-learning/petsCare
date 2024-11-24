
import { FaArrowRight } from "react-icons/fa";
import img from "../../../../assets/adoptionsImg/faq_tv.png";
import faqImg from '../../../../assets/adoptionsImg/faq_img.png'
import Container from "../../../UI/Container";
import Breadcrumb from "../../../Shared/Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatConversationsWithMessages, CometChatUIKit } from "@cometchat/chat-uikit-react";
import { FaVideo } from "react-icons/fa";

const id = Math.floor(Math.random()*1000)
const GetStarted = () => {

  const [value, setValue] = useState();
  
  const navigate = useNavigate()

  const handleJoin = useCallback(() => {
    setValue(`mabcdzy${id}`)
    navigate(`/getMeeting/${value}`)
  })

  useEffect(() => {
    // Initialize CometChat

    const COMETCHAT_CONSTANTS = {
      APP_ID: import.meta.env.VITE_COMETCHAT_APPID, //Replace with your App ID
      REGION: import.meta.env.VITE_COMETCHAT_REGION, //Replace with your App Region
      AUTH_KEY: import.meta.env.VITE_COMETCHAT_AUTH_KEY, //Replace with your Auth Key or leave blank if you are authenticating using Auth Token
    };

    const UIKitSettings = new UIKitSettingsBuilder()
      .setAppId(COMETCHAT_CONSTANTS.APP_ID)
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
      .subscribePresenceForAllUsers()
      .build();

    //Initialize CometChat UI Kit
    CometChatUIKit.init(UIKitSettings)
      .then(() => {
        console.log("Initialization completed successfully");

        // Login or create user
        const UID = 'cometchat-uid-5';

        CometChatUIKit.getLoggedinUser().then((user) => {
          console.log('loggedUser', user)
          if (!user) {
            //Login user
            CometChatUIKit.login(UID)
              .then((user) => {
                console.log("Login Successful:", { user });
                //mount your app
              })
              .catch(console.log);
          } else {
            //mount your app
            console.log('user already exit')
          }
        });


      })
      .catch(console.log);

  }, []);



  return (
    <div>
      <Breadcrumb title={'Get Started For Adoption'}></Breadcrumb>
      <Container>
        <div className="py-10 lg:max-w-screen-xl mx-auto">
          <CometChatConversationsWithMessages></CometChatConversationsWithMessages>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:gap-x-20 p-5 lg:py-20 lg:px-10">
          <div className="w-full  relative lg:w-1/2">
            <img src={img} className="relative w-full" alt="" />
            <Link className="absolute top-48 size-20 rounded-3xl right-8" to={'https://youtu.be/XdFfCPK5ycw?si=cE5HfmR_7dR1QIIA'}></Link>
            <img src={faqImg} className=" absolute top-44 left-10 rounded-3xl" alt="" />

          </div>

          {/* container */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h1 className="text-xl font-nunito text-red-500 font-bold">
                Meet Adoption
              </h1>
              <h1 className="text-[#0A453A] text-3xl md:text-4xl lg:text-5xl font-nunito font-extrabold">
                Work For <span className="text-red-500">Adoption</span> Happy Time
              </h1>
              <p className="text-lg text-gray-500 font-nunito">
                The best overall dog DNA test is Embark Breed & Health Kit view at
                Chewy which pres domesti dog is a sticated descendant.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                  <FaArrowRight></FaArrowRight>
                  <p className="text-[#0A453A] text-base font-nunito font-bold">
                    Embark Breed & Health
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaArrowRight></FaArrowRight>
                  <p className="text-[#0A453A] text-base font-nunito font-bold">
                    The domestic dog is a domesticated
                  </p>
                </div>
                <div className="flex items-center justify-start gap-x-0">
                  <h1 className=" text-2xl font-medium mt-5">Adoption Meet </h1>
                  <button onClick={handleJoin} className="group size-[80px] relative">
                 <span className="group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full size-[54px] bg-white">
                  <FaVideo className="text-white"/>
                  </span>
                  <span className="bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute rounded-full z-20 size-0 group-hover:w-[60px] group-hover:h-[64px]"></span> 
                  <span className="bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500 absolute rounded-full z-20 size-0 group-hover:size-[80px] hover:duration-300"></span>
                 </button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default GetStarted;
