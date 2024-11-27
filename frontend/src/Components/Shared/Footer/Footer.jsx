import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import {
  FaFacebook,
  FaInstagram,
  FaLocationPin,
  FaPhone,
  FaTumblr,
  FaYoutube,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import Button from "../../UI/Button";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <footer className="relative footer-img  text-primary font-inter h-full w-full rounded-md">
        {/* Main Footer */}
        <Container className="">
          <div className="border-t border-slate-200  py-28 px-6 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* How Can We Help Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary ">
                  How Can We Help?
                </h3>
                <ul className="space-y-2 text-base">
                  <li>
                    <Link href="#" className="text-primary">
                      Adopt a pet
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary">
                      Rehome a pet
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary">
                      Adopt FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary">
                      Rehome FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="space-y-4 text-base">
                <h3 className="text-lg font-semibold text-secondary">
                  Contact Us
                </h3>
                <p className="flex items-center space-x-2">
                  <span className="text-primary">
                    <FaLocationPin />
                  </span>
                  <span>Navaron, Jashore, Bangladesh</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-primary ">
                    <FaPhone />
                  </span>
                  <span>+123456789</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-primary ">
                    {" "}
                    <MdEmail />
                  </span>
                  <span>PetsCareSupport@gmail.com</span>
                </p>
              </div>

              {/* Keep in Touch Section */}
              <div className="space-y-4 text-base w-[80%]">
                <h3 className="text-lg font-semibold text-secondary">
                  Keep In Touch With Us
                </h3>
                <p>
                  Join the PerCare magazine and be first to hear about news
                </p>

                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    placeholder="E-mail Address"
                    className="w-full px-4 py-2 border border-secondary rounded-lg text-primary"
                  />
                  <Button primary>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <img
          className="w-full h-[20%] absolute top-[-10%] z-20"
          src="https://kutto.netlify.app/img/bg/header_shape.png"
          alt=""
        />
        {/* Sub Footer */}
        <div className="relative bg-secondary py-4 text-white text-center text-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-base">©2024 PetCare</span>
            <div className="flex space-x-4 mt-2 md:mt-0 text-base md:text-xl">
              <Link href="#" className=" text-white hover:text-gray-200">
                <FaFacebook />
              </Link>
              <Link href="#" className=" text-white hover:text-gray-200">
                <SlSocialPintarest />
              </Link>
              <Link href="#" className=" text-white hover:text-gray-200">
                <FaTumblr />
              </Link>
              <Link href="#" className=" text-white hover:text-gray-200">
                <FaInstagram />
              </Link>
              <Link href="#" className=" text-white hover:text-gray-200">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <img
            className="w-full absolute top-[-30%]"
            src="https://kutto.netlify.app/img/bg/copyright_shape.png"
            alt=""
          />
            <img className="absolute left-[5%] bottom-[50%]" src="https://kutto.netlify.app/img/images/footer_shape01.png" alt="" />
            <img className="absolute right-[10%] bottom-[100%]" src="https://kutto.netlify.app/img/images/footer_shape02.png" alt="" />
        </div>
      </footer>
    </>
  );
};
export default Footer;
