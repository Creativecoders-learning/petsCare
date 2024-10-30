import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineLocationCity, MdOutlineHome } from "react-icons/md";
import PrimaryTitle from "../../UI/PrimaryTitle";

const AdditionalInfo = ({ user }) => (
      <div className="px-8 font-inter">
            <PrimaryTitle titleStyle="text-primaryBold font-semibold">Additional Information</PrimaryTitle>

            <div className="flex flex-col md:flex-row gap-10">
                  {/* Address */}
                  <div className="space-y-3">
                        <p className="text-gray-700 font-semibold mb-3">Address:</p>
                        <div className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-3">
                                    <FaMapMarkerAlt className="text-red-500" />
                                    <span className="text-gray-900 font-medium">Country:</span>
                                    <p className="ml-2 text-gray-600">{user?.address?.country || "N/A"}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                    <MdOutlineLocationCity className="text-green-500" />
                                    <span className="text-gray-900 font-medium">District:</span>
                                    <p className="ml-2 text-gray-600">{user?.address?.district || "N/A"}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                    <MdOutlineHome className="text-blue-500" />
                                    <span className="text-gray-900 font-medium">Street Address:</span>
                                    <p className="ml-2 text-gray-600">{user?.address?.streetAddress || "N/A"}</p>
                              </div>
                        </div>
                  </div>

                  {/* Social Links Section */}
                  <div>
                        <p className="text-gray-700 font-semibold mb-3">Social Links:</p>
                        <ul className="space-y-2">
                              <li className="flex items-center space-x-3">
                                    <FaFacebook className="text-blue-600" />
                                    <a
                                          href={user?.socialLinks?.facebook}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-indigo-600 hover:underline"
                                    >
                                          Facebook
                                    </a>
                              </li>
                              <li className="flex items-center space-x-3">
                                    <FaLinkedin className="text-blue-700" />
                                    <a
                                          href={user?.socialLinks?.linkedin}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-indigo-600 hover:underline"
                                    >
                                          LinkedIn
                                    </a>
                              </li>
                              <li className="flex items-center space-x-3">
                                    <FaTwitter className="text-blue-400" />
                                    <a
                                          href={user?.socialLinks?.twitter}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-indigo-600 hover:underline"
                                    >
                                          Twitter
                                    </a>
                              </li>
                              <li className="flex items-center space-x-3">
                                    <FaGithub className="text-gray-800" />
                                    <a
                                          href={user?.socialLinks?.github}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-indigo-600 hover:underline"
                                    >
                                          GitHub
                                    </a>
                              </li>
                        </ul>
                  </div>
            </div>
      </div>
);

export default AdditionalInfo;
