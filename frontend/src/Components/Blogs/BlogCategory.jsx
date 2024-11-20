/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import dog from '../../assets/dog1.jpg'
import dog2 from '../../assets/dog2.jpg'
import { MdDateRange } from "react-icons/md";
import NewsLatter from "../UI/NewsLatter";


const BlogCategory = ({ handleFilterOption }) => {
  const [searchValue, setSearchValue] = useState("");

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    handleFilterOption(searchValue);
  };

  return (
    <div className="">
      {/* search box */}
      <div className="px-7 pb-8 bg-secondaryLight ">
        <article>
          <h1 className="relative text-2xl font-bold text-secondary py-6 
        before:content-normal 
        before:absolute 
        before:w-1
        before:h-5
        before:left-24
        before:bottom-6
        before:bg-primary
        
        after:content-normal 
        after:absolute 
        after:w-1
        after:h-5
        after:top-8
        after:left-[88px]
        after:bg-primary
        ">Search</h1>
        </article>
        <div className="relative w-full">
          <form onSubmit={handleSearch} className="">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className=" py-4 px-4
             border-2 rounded-md w-full focus:border-primary text-secondary text-base outline-none"
              type="text"
              placeholder="search hare..."
              id="searchInput"
            />
            <button type="submit" className="absolute bg-primary py-5 px-4 rounded-r-md right-0">
              <FaSearch className="text-xl text-white " />
            </button>
          </form>
        </div>
      </div>

      {/* Pets by category */}
      <article className="px-7 pb-8 mt-10 bg-secondaryLight text-gray-700 text-xl font-medium rounded-md">
        <h1 className="relative text-2xl font-bold text-secondary py-6 
        before:content-normal 
        before:absolute 
        before:w-1
        before:h-5
        before:left-[140px]
        before:bottom-6
        before:bg-primary
        
        after:content-normal 
        after:absolute 
        after:w-1
        after:h-5
        after:top-8
        after:left-[133px]
        after:bg-primary
        ">Categories</h1>
        <article className="pt-5 cursor-pointer">
          <article onClick={() => handleFilterOption('Dog')} className="flex justify-between hover:text-primary">
            <p className="category">Dog</p>
            <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4" />
        </article>
        <article className="pt-2 cursor-pointer">
          <article onClick={() => handleFilterOption('Cat')} className="flex justify-between hover:text-primary">
            <p className="category">Cat</p>
            <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4" />
        </article>
        <article className="pt-2 cursor-pointer">
          <article onClick={() => handleFilterOption('Bird')} className="flex justify-between hover:text-primary">
            <p>Bird</p>
            <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4" />
        </article>
        <article className="pt-2 cursor-pointer">
          <article onClick={() => handleFilterOption('Rabbit')} className="flex justify-between hover:text-primary">
            <p>Rabbit</p>
            <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4" />
        </article>
      </article>


      {/* Resents blogs */}
      <div className="px-7 pb-3 mt-10 bg-secondaryLight rounded-md ">
        <h1 className="relative text-2xl font-bold text-secondary py-6 
        before:content-normal 
        before:absolute 
        before:w-1
        before:h-5
        before:left-[145px]
        before:bottom-6
        before:bg-primary
        
        after:content-normal 
        after:absolute 
        after:w-1
        after:h-5
        after:top-8
        after:left-[138px]
        after:bg-primary
        ">Recent Post</h1>
        {/* box 1 */}
        <div className="overflow-hidden rounded  mb-10">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src={dog}
              alt="card image"
              className="aspect-video w-full duration-300"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-2">
            <article className="flex items-center justify-between text-lg font-medium">
              <article className="flex items-center">
                <MdDateRange className="text-primary mr-2" />
                <p> 22 jul 2024</p>
              </article>
              <p>By : <span className="text-primary"> Admin</span></p>

            </article>
            <header className="mb-4 mt-5">
              <h3 className="text-xl font-bold text-secondary hover:text-primary duration-300">
                Pet needs special food like human foods
              </h3>

            </header>

          </div>
        </div>
        {/* box 2 */}
        <div className="overflow-hidden rounded  mb-10">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src={dog2}
              alt="card image"
              className="aspect-video w-full duration-300"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-2">
            <article className="flex items-center justify-between text-lg font-medium">
              <article className="flex items-center">
                <MdDateRange className="text-primary mr-2" />
                <p> 22 jul 2024</p>
              </article>
              <p>By : <span className="text-primary"> Admin</span></p>

            </article>
            <header className="mb-4 mt-5">
              <h3 className="text-xl font-bold text-secondary hover:text-primary duration-300">
                Pet needs special food like human foods
              </h3>

            </header>

          </div>
        </div>

      </div>

      {/* news latter */}
      <NewsLatter />
    </div>
  );
};

export default BlogCategory;
