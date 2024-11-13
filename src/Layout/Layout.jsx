
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import Header from '../components/Header';


const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      

      <div className="bg-neutral-50 shadow-sm">
        <SideBar/>
      </div>
      
      
      <div className="flex flex-col flex-1">
        
      
        <div className="flex-none bg-white  p-4">
         <Header/>
        </div>

       
        
       
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
        
      </div>
      
    </div>
  );
}

export default Layout;
