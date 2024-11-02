import { MdDateRange } from "react-icons/md";
import dog from '../../assets/dog1.jpg'
import dog2 from '../../assets/dog2.jpg'
import dog3 from '../../assets/dog3.jpg'

const RecentBlogs = () => {
    return (
        <div>
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
          {/* box 3 */}
          <div className="overflow-hidden rounded  mb-10">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={dog3}
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
        </div>
    );
};

export default RecentBlogs;