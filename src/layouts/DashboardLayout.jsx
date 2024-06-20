import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../components/NavbarDashboard';
import FooterMain from '../components/FooterMain';
import SidebarDashboard from '../components/SidebarDashboard';

const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="z-20"> 
                <SidebarDashboard />
            </div>
            <div className="flex-1 relative overflow-y-auto h-screen"> 
                <NavbarDashboard/>
                <main className="w-full bg-[#FFF2D7] px-7 py-5 min-h-screen"> 
                    <Outlet/>
                </main>
                <div className="w-full bg-contentbox">
                    <FooterMain/>
                </div>
            </div>   
        </div>
    );
};

export default DashboardLayout;
