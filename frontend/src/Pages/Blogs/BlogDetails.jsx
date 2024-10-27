import { useParams } from 'react-router-dom'
import img from '../../assets/dog3.jpg';
import Container from '../../Components/UI/Container';
import useBlogs from '../../Hooks/api/useBlogs';

const BlogDetails = () => {
    const {loading, error, blogs} = useBlogs(); 
    const {id} = useParams()

    console.log(blogs)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <Container>
        <div>
            {/* blog details image */}
            <div className='w-full h-[60vh] overflow-hidden m-0 p-0'>
                <img className='w-full h-full object-cover  '
                // style={{ clipPath: 'inset(5% 0 10% 0)' }}
                src={img} alt="" />
            </div>
            <article className='text-center mt-5 mb-3'>
                <p className='text-gray-600'>PET BLOG / <span className='font-semibold text-gray-950'>Dog</span></p>
                <h1 className="text-2xl font-semibold">Make Barktastic Things With Pumpkin For Fall</h1>
                <p className='text-sm text-gray-900'>October 5, 2024</p>
            </article>

            <article>
                <p className='text-sm text-gray-800'>Want to boost your cat or dog's diet with something nutritious? Pumpkin for pets can be a game changer, offering a rich source of nutrition and fiber to promote regular digestion. It's a simple yet effective way to enhance their diet—whether you have a playful pup or a curious cat, adding pumpkin can support their digestive health and add a tasty twist to their daily routine.</p>
            </article>
            Blog Details
        </div>
        </Container>
    );
};

export default BlogDetails;