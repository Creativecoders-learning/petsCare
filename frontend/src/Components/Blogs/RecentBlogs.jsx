import { MdDateRange } from "react-icons/md";
import useBlogs from "../../Hooks/api/useBlogs";
import { Link } from "react-router-dom";

const RecentBlogs = () => {

      const { blogs, loading, error } = useBlogs();
      // Sort blogs by `author.update` in descending order
      const sortedBlogs = blogs?.sort((a, b) => {
            const dateA = new Date(a?.author?.update || "1970-01-01");
            const dateB = new Date(b?.author?.update || "1970-01-01");
            return dateB - dateA; // Most recent first
      });


      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      return (
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

                  {
                        sortedBlogs?.slice(0, 3).map((blog, i) => (
                              <div key={blog?._id + i} className="overflow-hidden rounded  mb-6">
                                    {/*  <!-- Image --> */}
                                    <figure>
                                          <img
                                                src={blog?.image}
                                                alt="card image"
                                                className="aspect-video w-full duration-300"
                                          />
                                    </figure>
                                    {/*  <!-- Body--> */}
                                    <div className="p-2">
                                          <article className="flex items-center justify-between text-lg font-medium">
                                                <article className="flex items-center text-sm">
                                                      <MdDateRange className="text-primary mr-2" />
                                                      <p> {blog?.author?.update}</p>
                                                </article>
                                                <p className="text-sm">By : <span className=" text-primary"> {blog?.author?.name}</span></p>

                                          </article>
                                          <header className="mb-4 mt-5">
                                                <Link to={`/blog-details/${blog?._id}`}>
                                                      <h3 className="text-lg font-bold text-secondary hover:text-primary duration-300">
                                                            {blog?.title}
                                                      </h3>
                                                </Link>
                                          </header>

                                    </div>
                              </div>
                        ))
                  }

            </div>
      );
};

export default RecentBlogs;