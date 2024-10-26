import { useState } from 'react';
import BlogCategory from '../../Components/Blogs/BlogCategory';
import CardBlog from '../../Components/Blogs/CardBlog';
// import SideBar from '../../Components/Blogs/SideBar';
import useBlogs from '../../Hooks/useBlogs';


const Blog = () => {
    const { blogs, loading, error } = useBlogs('/blogs.json');
    const [categoryBlog, setCategoryBlog] = useState(blogs)

    const getItemsByCategory =  (data, category)=>{
        return  data?.filter(item => item?.category === category);
    }

    // get data by selected text
    const getCategoryText = ()=>{
        const select = document.getElementById("categorySelect");
        const selectedValue = select.value;
        const result = getItemsByCategory(blogs, selectedValue)
        setCategoryBlog(result)
    }

    // get data by search
   const filterByCategory = ()=> {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        const filteredData = blogs.filter(item => 
            item.category.toLowerCase().includes(searchInput)
        );
        setCategoryBlog(filteredData)
    }

    console.log(categoryBlog);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
        <BlogCategory 
        getCategoryText={getCategoryText} 
        filterByCategory={filterByCategory} />
        <div className='flex'>
            {/* <BlogBanner /> */}
            <div className='px-10 '>
                <h1 className='text-2xl font-bold pt-5'>ALL POSTS</h1>
                <br />
                {/* <CardBlog /> */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                {
                    categoryBlog?.map(blog => <CardBlog key={blog?.id} blog={blog} />)
                }
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;