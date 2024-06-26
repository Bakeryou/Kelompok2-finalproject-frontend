import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import FooterMain from '../components/FooterMain';


const MainLayout = () => {
  return (
    <div>
      <Header/>
      <main className="bg-[#FFF2D7]">
        <Outlet />
      </main>
      <FooterMain/>
    </div>
  );
};

export default MainLayout;
