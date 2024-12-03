import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

export default function MainLayout() {
  const location = useLocation()
  // console.log(location)
  const isMeeting = location.pathname.includes('getMeeting')
  
  return (
    <section>
      {isMeeting ||  <Navbar />}
      <Outlet> </Outlet>
      {isMeeting || <Footer />}
    </section>
  );
}
