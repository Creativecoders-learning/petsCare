import { useParams } from 'react-router-dom'
import Container from '../../Components/UI/Container';
import useBlogs from '../../Hooks/api/useBlogs';
import { useEffect, useState } from 'react'; 
import BlogComment from '../../Components/Blogs/BlogComment';
import RecentBlogs from '../../Components/Blogs/RecentBlogs';
// import BlogCategory from '../../Components/Blogs/BlogCategory';
// import Testimonial from '../../Components/Home/Testimonial/Testimonial';

const BlogDetails = () => {
    const {loading, error, blogs} = useBlogs(); 
    const [items, setItems] = useState({})
    const {id} = useParams()
    

    const blog =  blogs?.find(blog => blog.id === Number(id))

    // console.log( blog?.author)
    useEffect(()=>{
        const subBlog = blog?.subtitles
        setItems(subBlog)
    },[blog])

    if (loading) return <p>Loading...</p>;
    if (!blog) return <div>Blog not found</div>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <Container>
        <div className='flex gap-5'>
           <div className='flex-1'>
             {/* blog details image */}
             <div className='w-full lg:h-[60vh] h-[30vh] overflow-hidden m-0 p-0'>
                <img className='w-full h-full object-cover  '
                // style={{ clipPath: 'inset(5% 0 10% 0)' }}
                src={blog?.image} alt="" />
            </div>
            <article className='text-center mt-5 mb-3 px-5'>
                <p className='text-gray-600'>PET BLOG / <span className='font-semibold text-gray-950'>{blog?.category}</span></p>
                <h1 className="text-3xl text-primary font-bold">{blog?.title}</h1>
            </article>
                
            <article className='px-5'>
                <p className='text-xl text-gray-800 my-5'>{blog?.description}</p>     
            </article>

            <article className='lg:flex gap-5'>
                 {/* subtitle */}
             <div className='mt-10 px-5 flex-1'>
               {
                    items?.map(item => 
                        <article key={item?.title}>
                            <h1 className='text-2xl font-bold text-secondary mt-10 mb-3'>{item?.title} hello</h1>
                            <p className='text-gray-700 mb-5 text-lg'>{item?.content}</p>
                        </article>
                    )
                }
                <div className='bg-slate-200 px-3 py-4 border-2 rounded-md my-5 border-l-4 border-l-primary'>
                <p className='font-inter font-bold'>Animals are the essence of our planet, showcasing beauty, strength, and diversity. Each species plays a vital role, reminding us of intricate balance and the importance of conservation.</p>
                </div>
                <div className='w-full h-auto'>
                    <img className='w-full h-auto' src={blog?.image} alt="" />
                </div>

                {/* author info */}
            <div className='mt-10 mb-5 border-2 border-primary rounded-md p-3 lg:flex  items-center'>
                {/* author image */}
               <div className='flex-1'>
               <div className='lg:rounded-full lg:w-56 w-full h-auto  lg:h-56'>
                    <img className='w-full h-full lg:rounded-full object-cover' src={blog?.author?.image} alt="" />
                </div>

               </div>
                {/* author name */}
                <article className='lg:w-2/3 lg:pl-5 lg:pt-0 pt-4 lg:px-0 px-3'>
                    <h1 className="text-primary text-xl  font-semibold mt-0 mb-2">AUTHOR</h1>
                    <p className='text-primaryBold text-2xl  font-bold underline mb-2'>{blog?.author?.name}</p>
                    <p className='text-sm text-gray-700'>{blog?.author?.description}</p>
                </article>
                </div>
                <BlogComment />
            </div>
                <div className='lg:w-1/3 '>
                    <RecentBlogs />
                </div>
            </article>


           </div>
            
        </div>
        
        </Container>
    );
};

export default BlogDetails;