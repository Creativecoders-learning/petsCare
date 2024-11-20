import { useEffect, useState } from "react";
import BlogCategory from "../../Components/Blogs/BlogCategory";
import CardBlog from "../../Components/Blogs/CardBlog";
import Container from "../../Components/UI/Container";
import useBlogs from "../../Hooks/api/useBlogs";
import NoDataFound from "../../Components/UI/NoDataFound";

const Blog = () => {
  const { blogs, loading, error } = useBlogs();
  const [blogsByCategory, setBlogsByCategory] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    setBlogsByCategory(blogs);
    if (filterInput !== "") {
      const filteredBlogs = blogs?.filter(item => item?.category.trim().toLocaleLowerCase() === filterInput.trim().toLocaleLowerCase())
      setBlogsByCategory(filteredBlogs);
    }
  }, [blogs, filterInput])

  //   handle filter option
  const handleFilterOption = (value) => {
    setFilterInput(value);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Container>
        <div className="flex w-full mx-auto">
          {/* <BlogBanner /> */}
          <div className="px-10 py-20 lg:flex gap-10">
            {/* <CardBlog /> */}
            {
              blogsByCategory.length > 0 ?
                <div className="flex-1">
                  {blogsByCategory?.map((blog) => (
                    <CardBlog key={blog?._id} blog={blog} />
                  ))}
                </div>
                :
                <div className="flex-1">
                  <NoDataFound text="Blogs" />
                </div>
            }

            {/* search by category */}
            <div className="lg:w-1/3">
              <BlogCategory handleFilterOption={handleFilterOption} />
            </div>

          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
