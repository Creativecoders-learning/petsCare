import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/api/useBlogs";

const RelatedBlogs = ({ blog }) => {

      console.log(blog);
      const { blogs } = useBlogs();

      const relatedBlogs = blogs?.filter(relatedBlog => relatedBlog?.category === blog?.category);

      return (
            <div className="bg-secondaryLight p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-secondary">
                        Related Blogs
                  </h3>
                  <ul className="space-y-3">
                        {
                              relatedBlogs?.map(rBlog => (
                                    <Link to={`/blog-details/${rBlog?._id}`} key={rBlog?._id}>
                                          <li className="text-primary hover:underline cursor-pointer">
                                                • {rBlog?.title}
                                          </li>
                                    </Link>
                              ))
                        }
                  </ul>
            </div>
      );
};

export default RelatedBlogs;