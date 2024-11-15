import { useState } from "react";
import { IoListSharp, IoSettingsOutline } from "react-icons/io5";
import { RxCross2, RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import DashboardActiveLink from "../Components/UI/DashboardActiveLink";
import useUser from "../Hooks/api/useUser";

export default function DashboardLayout() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const { user } = useUser();

  const handleNavToggle = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile trigger */}
      <div className="flex justify-between items-center p-[4%] shadow-myCustomShadow lg:hidden font-inter">
        <button onClick={handleNavToggle}>
          {isSideNavOpen ? (
            <RxCross2 className="text-[24px]" />
          ) : (
            <RxHamburgerMenu className="text-[24px]" />
          )}
        </button>
        <Link to="/">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
            Pets Care
          </h2>
        </Link>
      </div>

      <div className="lg:flex font-inter">
        {/* Side Navigation */}
        <aside
          className={`fixed top-0 bottom-0 left-0 z-40 flex w-64 flex-col border-r border-r-myGray border-opacity-30 bg-white transition-transform lg:translate-x-0 ease-in-out duration-500 ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-center items-center h-20 mt-6 border-b border-slate-200">
            <Link to="/">
              <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
                PetsCare
              </h2>
            </Link>
          </div>

          <nav className="flex-1 divide-y divide-slate-100 overflow-auto">
            <ul className="flex flex-1 flex-col gap-1 py-3">
              {/* Common Dashboard Route */}
              <li>
                <DashboardActiveLink to={`/dashboard`}>
                  <span className="flex items-center gap-3 rounded py-3 px-6">
                    <RxDashboard className="block text-[18px]" />
                    <span className="block text-[17px]">Dashboard</span>
                  </span>
                </DashboardActiveLink>
              </li>
              <li>
                <DashboardActiveLink to={`/dashboard/profile`}>
                  <span className="flex items-center gap-3 rounded py-3 px-6">
                    <RxDashboard className="block text-[18px]" />
                    <span className="block text-[17px]">Profile</span>
                  </span>
                </DashboardActiveLink>
              </li>

              {/* Conditional Routes Based on User Role */}

              {/* for vet */}
              {user?.role === "Vet" && (
                <>
                  <li>
                    <DashboardActiveLink to="/dashboard/vet/appointments">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]">Appointments</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/vet/my-services">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]">My Services</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/vet/patients">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]">Patients</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                </>
              )}

              {/* for admin */}
              {user?.role === "Admin" && (
                <>
                  <li>
                    <DashboardActiveLink to="/dashboard/admin/user-management">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <IoListSharp className="block text-[18px]" />
                        <span className="block text-[17px]">
                          User Management
                        </span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/admin/vet-management">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <IoListSharp className="block text-[18px]" />
                        <span className="block text-[17px]">
                          Vet Management
                        </span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/admin/shop-management">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <IoListSharp className="block text-[18px]" />
                        <span className="block text-[17px]">
                          Shop Management
                        </span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/admin/adoption-history">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]">Adoption History</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/admin/blog-management">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <FaBlog className="block text-[18px]" />
                        <span className="block text-[17px]">Blog Management</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                </>
              )}

              {/* For Seller */}
              {user?.role === "Seller" && (
                <>
                  <li>
                    <DashboardActiveLink to="/dashboard/seller/prescriptions">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <AiOutlineMedicineBox className="block text-[18px]" />
                        <span className="block text-[17px]">Prescriptions</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/seller/adoptions">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]">Adoptions</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/seller/my-adoptions">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]"> My Adoptions</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/seller/my-products">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <BiShoppingBag className="block text-[18px]" />
                        <span className="block text-[17px]">My Products</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li>
                    <DashboardActiveLink to="/dashboard/seller/user-adoptions">
                      <span className="flex items-center gap-3 rounded py-3 px-6">
                        <MdOutlinePets className="block text-[18px]" />
                        <span className="block text-[17px]"> User Adoptions</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                </>
              )}

              {/* blog route for all user */}
              <li>
                <DashboardActiveLink to="/dashboard/my-blogs">
                  <span className="flex items-center gap-3 rounded py-3 px-6">
                    <FaBlog className="block text-[18px]" />
                    <span className="block text-[17px]">My Blogs</span>
                  </span>
                </DashboardActiveLink>
              </li>
            </ul>
          </nav>

          <footer className="border-t border-slate-200 p-3">
            <Link
              to={`/dashboard/profile`}
              className="flex items-center gap-3 rounded p-3 text-secondary transition-colors hover:text-primary"
            >
              <IoSettingsOutline />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </footer>
        </aside>

        {/* Main Content Area */}
        <div
          className={`flex-1 text-black border-opacity-50 w-full ${isSideNavOpen ? "" : "lg:ml-64"
            }`}
        >
          <Outlet />
        </div>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors lg:hidden ${isSideNavOpen ? "block" : "hidden"
          }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
}
