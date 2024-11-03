import { useState } from "react";
import { Link } from "react-router-dom";
import ActiveRoute from "../../../Routes/ActiveRoute";
import Button from "../../UI/Button";
import Container from "../../UI/Container";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = false;

  return (
    <>
      <header className="relative z-20 w-full after:absolute  after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:backdrop-blur-sm lg:after:hidden pt-[16px] pb-[8px]">
        <Container>
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] z-50">
            <nav
              aria-label="main navigation"
              className="flex items-center justify-between font-medium text-slate-700"
              role="navigation"
            >
              {/*      <!-- Brand logo --> */}
              <div className="">
                <Link
                  to="/"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="flex items-center gap-2 whitespace-nowrap text-2xl focus:outline-none lg:flex-1 text-primary"
                >
                  PetsCare
                </Link>
              </div>
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
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
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute left-0 top-0 z-[-1] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
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
                <li className="flex items-center">
                  <ActiveRoute to={"dashboard"}>
                    <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                      Dashboard
                    </span>
                  </ActiveRoute>
                </li>
              </ul>
              {/*      <!-- Actions --> */}
              <div className="">
                {!user ? (
                  <>
                    <div className="flex gap-4 items-center">
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
                          src={"#"}
                          alt="User profile"
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
                        <div className="flex flex-col items-center gap-4">
                          <figure className="w-16 h-16 rounded-full">
                            <img
                              className="w-16 h-16 rounded-full"
                              src={user?.photoUrl}
                              alt="User Profile"
                            />
                          </figure>
                          {/* user name */}
                          <h4 className="text-2xl text-center font-nunito font-bold">
                            {user?.name}
                          </h4>
                          {/* user email */}
                          <p className="text-[#646464] text-center">
                            {user?.email}
                          </p>
                          {/* profile */}
                          <Link to={`/dashboard/${user?.role}/profile`}>
                            <li className="flex items-stretch text-base">
                              <Button outlineBtn>
                                <span className="relative">View profile</span>
                              </Button>
                            </li>
                          </Link>
                        </div>

                        {/* dropdown links */}
                        <ul className="px-6">
                          {/* <li className="flex items-stretch">
                              <ActiveRoute
                                to={`/dashboard/${user?.role}/charts`}
                              >
                                <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                                  <span>
                                    <RxDashboard className="block text-[18px]" />
                                  </span>
                                  <span>Dashboard</span>
                                </span>
                              </ActiveRoute>
                            </li> */}
                          {/* Dropdown Content */}
                          {/* {user?.role === "instructor" ? (
                              <li className="flex items-stretch">
                                <ActiveRoute
                                  to={`/dashboard/${user?.role}/my-courses`}
                                >
                                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                                    <span>
                                      <IoListSharp className="block text-[18px]" />
                                    </span>
                                    <span>Your Courses</span>
                                  </span>
                                </ActiveRoute>
                              </li>
                            ) : (
                              ""
                            )}
                            <li className="flex items-stretch">
                              <ActiveRoute
                                to={`/dashboard/${user?.role}/settings`}
                              >
                                <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                                  <span>
                                    <IoSettingsOutline className="block text-[18px]" />
                                  </span>
                                  <span>Settings</span>
                                </span>
                              </ActiveRoute>
                            </li>

                            <li className="flex items-stretch">
                              <button
                                onClick={handleLogoutBtn}
                                className="w-full transition-colors duration-300 hover:text-primary"
                              >
                                <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                                  <span>
                                    <FiLogOut className="block text-[18px]" />
                                  </span>
                                  <span>Logout</span>
                                </span>
                              </button>
                            </li> */}
                        </ul>
                      </div>
                      {/* Dropdown menu end */}
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </Container>
        <img
          className="w-full absolute top-[80%]"
          src="https://kutto.netlify.app/img/bg/header_shape.png"
          alt=""
        />
      </header>
    </>
  );
}
