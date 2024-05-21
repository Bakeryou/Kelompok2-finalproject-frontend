import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SidebarMain from '../components/SidebarMain';
import FooterMain from '../components/FooterMain';

const ProductLayout = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header/>
            <div className="flex flex-1">
                <SidebarMain />
                    <main className="flex-1 overflow-y-auto bg-[#FFF2D7]">
                        <Outlet/>
                    </main>
            </div>
      <FooterMain/>
    </div>
  );
};

export default ProductLayout;
