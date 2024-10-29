/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import newsLatterImg from '../../assets/news_icon.png'


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
     <div className="px-7 pb-8 mt- bg-secondaryLight ">
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

     {/* <select
        onChange={(e) => handleFilterOption(e.target.value)}
        className="py-1 lg:w-40 border-2 rounded-md focus:border-blue-300 outline-none"
        name="blogs"
        id="categorySelect"
      >
        <option value="All">All</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Rabbit">Rabbit</option>
      </select> */}
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
        <article  className="pt-5">
          <article className="flex justify-between hover:text-primary">
          <p className="category" onClick={() => handleFilterOption()}>Dog</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article className="flex justify-between hover:text-primary">
          <p>Cat</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article className="flex justify-between hover:text-primary">
          <p>Bird</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article className="flex justify-between hover:text-primary">
          <p>Rabbit</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
      </article>

        {/* news latter box */}
        <div className="px-7 py-9 mt- bg-[#143556] my-10 ">
          <div>
            <img src={newsLatterImg} alt="" />
          </div>
          <article className="text-white text-center">
            <h1 className="text-2xl font-bold pt-6">Subscribe <br />
            Newsletter</h1>
            <p className="font-semibold pt-2 mb-5">Sign-up For Latest News</p>
          </article>
          <div className="space-y-5">
            <input className="py-3 w-full rounded-md text-center outline-none" type="text" name="" id="#" placeholder="Enter Your Email"/>
            <button className="py-3 w-full bg-primary font-semibold text-xl text-white rounded-md">Subscribe</button>
          </div>
        </div>
    </div>
  );
};

export default BlogCategory;
