/* eslint-disable react/prop-types */
// import search from '../../assets/search.png'
import { CiSearch } from "react-icons/ci";

const BlogCategory = ({getCategoryText, filterByCategory}) => {

   
    return (
        <div className="px-10 py-2 mt- bg-slate-300 flex">
            <select onChange={()=> getCategoryText()} className="py-1 lg:w-40 border-2 rounded-md focus:border-blue-300 outline-none" name="blogs" id="categorySelect">
                <option value="All">All</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
            </select>

            <div className='relative'>
                <input className="py-1 pl-2 lg:w-60 border-2 rounded-md ml-2 focus:border-blue-300 outline-none" type="text" placeholder="search hare..." id='searchInput'/>
               <button onClick={filterByCategory} className='w-5 h-5 absolute top-2 right-2'>
               <CiSearch  />
               </button>
            </div>
        </div>
    );
};

export default BlogCategory;