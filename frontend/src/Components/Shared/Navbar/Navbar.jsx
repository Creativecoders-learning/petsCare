import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveRoute from "../../../Routes/ActiveRoute";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import UseAuth from "../../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useUsers from "../../../Hooks/api/useUsers";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut, cartStatus, setCartStatus } = UseAuth();
  const { users } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartProducts =
      JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartStatus(storedCartProducts.length);
  }, [setCartStatus]);

  // handle shop cart icon
  const handleShopCart = () => {
    navigate("/payment-process");
  };

  const loggedInUser = users?.find(
    (matchedUser) => matchedUser?.email === user?.email
  );
  console.log(loggedInUser?.image);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged Out!!");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  // navLinks
  const navLinks = (
    <>
      <li className="flex items-center">
        <ActiveRoute to={"/"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Home
          </span>
        </ActiveRoute>
      </li>
      <li className="flex items-center">
        <ActiveRoute to={"/shop"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Shop
          </span>
        </ActiveRoute>
      </li>
      <li className="flex items-center">
        <ActiveRoute to={"vets"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Vets
          </span>
        </ActiveRoute>
      </li>
      <li className="flex items-center">
        <ActiveRoute to={"/adoption"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Adoption
          </span>
        </ActiveRoute>
      </li>
      <li className="flex items-center">
        <ActiveRoute to={"blogs"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Blogs
          </span>
        </ActiveRoute>
      </li>
      <li className="flex items-center">
        <ActiveRoute to={"customer-plan"}>
          <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
            Customer Plans
          </span>
        </ActiveRoute>
      </li>
      <div className="lg:hidden flex gap-4 items-center">
        <Link to="/login">
          <Button primary>Login</Button>
        </Link>
        <Link to="/registration">
          <Button secondary> Sign Up</Button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <header className="relative z-20 w-full after:absolute  after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:backdrop-blur-sm lg:after:hidden pt-[16px] pb-[8px]">
        <Container>
          <div className="relative mx-auto max-w-full z-50 lg:px-6 px-2">
            <nav className="flex items-center gap-6 justify-between font-medium text-slate-700">
              <div className="w-full flex justify-between items-center">
                {/*      <!-- Brand logo --> */}
                <div className="order-2 lg:order-1">
                  <Link to="/" className="text-primary text-3xl">
                    PetsCare
                  </Link>
                </div>
                
                {/*      <!-- Navigation links small device --> */}
                <ul className="order-2 hidden lg:flex justify-between items-center gap-2">
                  {navLinks}
                </ul>
                <div
                  className="relative p-4 cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out order-1 lg:order-3"
                  onClick={handleShopCart}
                >
                  <div className="absolute top-0 right-0 px-2 py-1  rounded-full text-xs bg-red-400 text-white">
                    {cartStatus}
                  </div>
                  <FaShoppingCart className="text-2xl" />
                </div>
                <div className="lg:hidden flex order-4"></div>
              </div>

              {/*      <!-- Mobile trigger --> */}
              <button
                className="relative order-10 block h-10 w-10 self-center lg:hidden"
                onClick={() => setIsToggleOpen(!isToggleOpen)}
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
              {/*      <!-- Actions --> */}
              <div className="flex items-center gap-10">
                {!user ? (
                  <>
                    <div className="hidden lg:flex gap-4 items-center">
                      <Link to="/login">
                        <Button primary>Login</Button>
                      </Link>
                      <Link to="/registration">
                        <Button secondary> Sign Up</Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* User profile */}
                    <div className="relative">
                      <figure
                        className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
                        onClick={() => {
                          setIsDropdownOpen(!isDropdownOpen);
                          setIsToggleOpen(false);
                        }}
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={loggedInUser?.image}
                          alt="User Profile"
                        />
                      </figure>
                      {/* Dropdown menu start */}
                      <div
                        className={`absolute -right-14 md:right-0 mt-2 w-80 md:w-96 py-2 bg-white rounded-md shadow-lg transform transition-all duration-300 flex flex-col gap-6 ${
                          isDropdownOpen
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        {/* Dropdown head */}
                        <div className="flex flex-col items-center">
                          <figure className="w-16 h-16 rounded-full mb-3">
                            <img
                              className="w-16 h-16 rounded-full"
                              src={loggedInUser?.image}
                              alt="User Profile"
                            />
                          </figure>
                          {/* user name */}
                          <h4 className="text-2xl text-center font-nunito font-bold">
                            {loggedInUser?.name}
                          </h4>
                          {/* user email */}
                          <p className="text-[#646464] text-center mb-4">
                            {loggedInUser?.email}
                          </p>
                          {/* profile */}
                          <div className="flex items-center gap-3">
                            <Link to={`/dashboard/profile`}>
                              <li className="flex items-stretch text-base mb-2">
                                <Button outlineBtn>
                                  <span className="relative">View profile</span>
                                </Button>
                              </li>
                            </Link>
                            <Link to={`/dashboard`}>
                              <li className="flex items-stretch text-base mb-2">
                                <Button outlineBtn>
                                  <span className="relative">Dashboard</span>
                                </Button>
                              </li>
                            </Link>
                          </div>

                          {/* log out */}
                          <div onClick={handleLogOut}>
                            <Button primary>Log out</Button>
                          </div>
                        </div>
                      </div>
                      {/* Dropdown menu end */}
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </Container>
        {/*      <!-- Navigation links small device --> */}
        <ul
          role="menubar"
          aria-label="Select page"
          className={`absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 ${
            isToggleOpen
              ? "visible opacity-100 backdrop-blur-sm"
              : "invisible opacity-0"
          }`}
        >
          {navLinks}
        </ul>
        <div>
          <img
            className="w-full absolute top-[80%]"
            src="https://kutto.netlify.app/img/bg/header_shape.png"
            alt=""
          />
        </div>
      </header>
    </>
  );
}
