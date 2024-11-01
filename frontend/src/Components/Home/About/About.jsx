import aboutBg from '../../../assets/banner/about02.png'
import SectionContent from '../../UI/SectionContent';

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center'>
            <div className="w-full flex items-center justify-center text-right lg:w-1/2">
               
              <img src={aboutBg}
              width={500}
              height={500}
              className='size-4/5 text-right object-contain ' alt="" />
            </div>
            <div className='w-full lg:w-1/2 pr-16'>
                <SectionContent tag={'About us '} first={'The Best for Your Pet! '} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum assum.'} />
            </div>
        </div>
    );
};

export default About;