import { Link, useLocation } from 'react-router-dom';
import img from '../../../assets/breadcrumb/breadcrumb_bg.jpg'

const Breadcrumb = ({title}) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames)
    return (
        <div style={{backgroundImage: `url(${img})`}} className="bg-cover h-[16rem] flex flex-col items-start justify-center pl-10">
           <div className='bg-[#F04336] w-max  rounded-xl ' style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'}}>
                <h1 className='py-6 pl-5 pr-16 text-3xl text-left text-white font-bold'>{title}</h1>
           </div>

           <div className='flex items-start gap-x-3 mt-5'>
            <h1 className='text-xl text-[#F04336] font-bold'>Home | </h1>
            
           {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            return index === pathnames.length - 1 ? (
              <span className='text-xl text-white font-bold' key={to}>{value}</span>
            ) : (
              <Link key={to} to={to} className=" text-white">
                <div className='text-white'>
                   {value}
                </div>
              </Link>
            );
          })}
           </div>
        </div>
    );
};

export default Breadcrumb;