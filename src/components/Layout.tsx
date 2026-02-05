import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import EduBot from './EduBot';
import AdmissionModal from './AdmissionModal';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <EduBot />
      <AdmissionModal />
      <ScrollToTop />
    </>
  );
};

export default Layout;
