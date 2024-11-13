
import { CiSettings } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { IoNotificationsOutline } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex flex-row justify-between'>
      <div>
       <IdentifyPages/>

      </div>
      
      <div className='flex flex-row gap-x-3'>
        <div className='bg-white shadow-lg flex justify-center items-center p-2 rounded-sm cursor-pointer'>
          <FaSearch size = {16} radius={2}/>
        </div>
        <div  className='bg-white  shadow-lg flex justify-center items-center p-2 rounded-sm cursor-pointer'>
          <CiSettings size = {24} radius={2}/>
        </div>
        <div  className='bg-white shadow-lg flex justify-center items-center p-2 rounded-sm cursor-pointer'>
          <IoNotificationsOutline size = {24} radius={2}/>
        </div>

        <hr className="rotate w-px h-10 bg-gray-300 mx-4" />

        <div className='flex flex-row w-40 items-center'>
          <h5 className='w-full'>Abhi Dongol</h5>
          <img src = "pfp.png" alt = "profile"></img>
        </div>
       
       
        
      </div>

    </div>
    
    
    </>
  )
}

export default Header


function IdentifyPages (){
  
  const pathname = useLocation();
  return (
    <div>
      {pathname.pathname === "/" ? (
        <h2 className='text-2xl font-bold'>Dashboard</h2>
      ) : null}
        {pathname.pathname === "/shipment" ? (
        <h2 className='text-2xl font-bold'>Shipments</h2>
      ) : null}
        {pathname.pathname === "/inventory" ? (
        <h2 className='text-2xl font-bold'>Inventory</h2>
      ) : null}
        {pathname.pathname === "/orders" ? (
        <h2 className='text-2xl font-bold'>Orders</h2>
      ) : null}
        {pathname.pathname === "/help" ? (
        <h2 className='text-2xl font-bold'>Help and Support</h2>
      ) : null}
        {pathname.pathname === "/customers" ? (
        <h2 className='text-2xl font-bold'>Customers</h2>
      ) : null}
       {pathname.pathname === "/settings" ? (
        <h2 className='text-2xl font-bold'>Settings</h2>
      ) : null}
      
      
    </div>
  );
  
}