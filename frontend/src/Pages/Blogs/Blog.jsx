import { useEffect, useState } from "react";
import BlogCategory from "../../Components/Blogs/BlogCategory";
import CardBlog from "../../Components/Blogs/CardBlog";
import Container from "../../Components/UI/Container";
import useBlogs from "../../Hooks/api/useBlogs";
// import SideBar from '../../Components/Blogs/SideBar';

const Blog = () => {
  const { blogs, loading, error } = useBlogs();
  const [blogsByCategory, setBlogsByCategory] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  console.log(blogsByCategory);

  useEffect(() => {
    setBlogsByCategory(blogs);
    if(filterInput !== ""){
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
      <BlogCategory handleFilterOption={handleFilterOption}/>
      <div className="flex">
        {/* <BlogBanner /> */}
        <div className="px-10 ">
          <h1 className="text-2xl font-bold pt-10">ALL POSTS</h1>
          <br />
          {/* <CardBlog /> */}
          <Container>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 ">
              {blogsByCategory?.map((blog) => (
                <CardBlog key={blog?.id} blog={blog} />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Blog;
