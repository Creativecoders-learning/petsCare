/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import NewsLatter from "../UI/NewsLatter";
import RecentBlogs from "./RecentBlogs";


const BlogCategory = ({ handleFilterOption }) => {
  const [searchValue, setSearchValue] = useState("");

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    handleFilterOption(searchValue);
  };

  // handle  category
  const handleCategory = ()=>{
    const category = document.getElementsByClassName('.category')
    console.log(category);
  }
  return (
    <div className="">
      {/* search box */}
     <div className="px-7 pb-8 mt-5 bg-secondaryLight ">
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
         <div className="flex justify-between hover:text-primary cursor-pointer">
         <button > Dog
          </button>
          <FaAngleDoubleRight />
         </div>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article onClick={handleCategory} className="flex justify-between hover:text-primary cursor-pointer">
          <p className="category">Cat</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article className="flex justify-between hover:text-primary cursor-pointer">
          <p>Bird</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
        <article className="pt-2">
          <article className="flex justify-between hover:text-primary cursor-pointer">
          <p>Rabbit</p>
          <FaAngleDoubleRight />
          </article>
          <hr className="h-4 w-full mt-4"/>
        </article>
      </article>

        {/* Recent Post */}
        <RecentBlogs />

      {/* news latter */}
        <NewsLatter />
    </div>
  );
};

export default BlogCategory;
