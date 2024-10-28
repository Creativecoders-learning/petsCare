import { useParams } from 'react-router-dom'
// import img from '../../assets/dog3.jpg';
import Container from '../../Components/UI/Container';
import useBlogs from '../../Hooks/api/useBlogs';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
    const {loading, error, blogs} = useBlogs(); 
    const [items, setItems] = useState({})
    const {id} = useParams()

    const blog =  blogs.find(blog => blog.id === Number(id))

    console.log( blog, items)
    useEffect(()=>{
        const subBlog = blog?.subtitles
        setItems(subBlog)
    },[blog])

    if (loading) return <p>Loading...</p>;
    if (!blog) return <div>Blog not found</div>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <Container>
        <div>
            {/* blog details image */}
            <div className='w-full h-[60vh] overflow-hidden m-0 p-0'>
                <img className='w-full h-full object-cover  '
                // style={{ clipPath: 'inset(5% 0 10% 0)' }}
                src={blog?.image} alt="" />
            </div>
            <article className='text-center mt-5 mb-3'>
                <p className='text-gray-600'>PET BLOG / <span className='font-semibold text-gray-950'>{blog?.category}</span></p>
                <h1 className="text-3xl text-gray-900 font-bold">{blog?.title}</h1>
                
            </article>

            <article>
                <p className='text-sm text-gray-800 my-5'>{blog?.description}</p>
            </article>
             {/* subtitle */}
             <div className='mt-10'>
               {
                    items?.map(item => 
                        <article key={item?.title}>
                            <h1 className='text-2xl font-bold text-gray-800 mt-10 mb-3'>{item?.title} hello</h1>
                            <p className='text-gray-700 mb-5'>{item?.content}</p>
                        </article>
                    )
                }
               </div>
        </div>
        </Container>
    );
};

export default BlogDetails;