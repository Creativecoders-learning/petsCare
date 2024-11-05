import bg from '../../../assets/adoptionsImg/faq_bg.jpg'
import Container from '../../UI/Container';

const NewsLetter = () => {
    return (
       <Container>
         <div style={{backgroundImage: `url(${bg})`}} className="flex flex-col md:flex-row items-center justify-between space-y-3 p-5 lg:p-20  my-12 rounded-md">
            <h1 className="text-3xl lg:text-5xl text-white font-nunito font-bold lg:w-2/6">Newsletter For</h1>
            <div className="flex items-center gap-x-5 lg:w-4/6">
            <input type="email" name="" placeholder='your email' className="flex w-full rounded-md border px-3 py-3 lg:py-5 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700 " id="" />
             <button className="text-primaryBold bg-white hover:bg-primaryBold hover:text-white rounded-md duration-300 py-3 lg:py-5 px-10"> Subscribe</button>
            </div>
        </div>
       </Container>
    );
};

export default NewsLetter;