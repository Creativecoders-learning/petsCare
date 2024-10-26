import { Link } from 'react-router-dom';
import img1 from '../../assets/dog2.jpg'

const BlogBanner = () => {
    return (
        <div className='w-4/5 mx-auto mt-10'>
            {/* blogs banner */}
            <div className="container lg:flex justify-between items-center gap-10">
                <div className='lg:w-1/2 w-full lg:mb-0 mb-8'>
                    <Link to={'/blog-details/1'}>
                    <div className='w-full max-h-full'><img src={img1} alt="dog image" /></div>
                    </Link>
                </div>
                <article className='flex-1'>
                <Link to={'/blog-details/1'}>
                <h1 className='text-3xl font-bold text-gray-800 mb-3'>The Ultimate Guide to Caring for Your Dog: Tips for Every Pet Owner</h1></Link>
                
                <p className='text-xs text-gray-800 mb-5'>Taking care of a dog is a rewarding yet demanding responsibility that requires knowledge, patience, and dedication. This guide aims to help new and experienced pet owners navigate the essentials of dog care, covering every aspect from dai...</p>
               
                <Link to={'/blog-details/1'} className='py-2 px-5 rounded-full bg-blue-900 hover:bg-blue-600 text-white font-semibold'>READ MORE</Link>
                </article>
            </div>
           
        </div>
    );
};

export default BlogBanner;