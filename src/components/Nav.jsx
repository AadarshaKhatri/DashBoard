
import { CiViewList } from 'react-icons/ci'
import {  FaQuestionCircle, FaUser } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'


import { LiaShipSolid } from 'react-icons/lia'
import { MdDashboard, MdOutlineInventory } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const dashboard_Links = [
    {
      key : "dashboard",
      label : "Dashboard",
      path : "/",
      icons : <MdDashboard size = {24} radius={2}/>
    },
    {
      key : "shipment",
      label : "Shipment",
      path : "/shipment",
      icons : <LiaShipSolid size = {24} radius={2}/>
    },
    {
      key : "inventory",
      label : "Inventory",
      path : "/inventory",
      icons : <MdOutlineInventory size = {24} radius = {2}/>
    }, {
      key : "orders",
      label : "Order",
      path : "/orders",
      icons : <CiViewList size = {24} radius = {2}/>
    },{
      key : "customers",
      label : "Customer",
      path: "/customers",
      icons: <FaUser size={20}  radius={2}/>
    },{
      key: "help and support",
      label : "Help and Support",
      path : "/help",
      icons : <FaQuestionCircle size = {24} radius = {2}/>

    },{
      key: "settings",
      label : "Settings",
      path:"/settings",
      icons : <IoSettingsOutline size = {24} radius={2}/>
    }
  ]

  
  return (
    <>
    <div>
      {dashboard_Links.map((element, index)=>(
        <div key = {index}>
          <ReturingLinks  id = {element.key} item = {element}/>

        </div>
      ))}


      </div>
    
    </>
    
  )
}

export default Nav

function ReturingLinks ({item}){
  const {pathname} = useLocation();
  return(
    <div className='flex flex-row'>    
        <Link to = {item.path} className={` cursor-pointer mb-1 text-gray-900 font-mono flex items-center gap-3 px-4 py-3 rounded-md w-full ${pathname===item.path ? " bg-customClicked text-white hover:disable" : " hover:bg-customHover " } `}>
        
        <span className='text-xl'>
          {item.icons}
        </span>
        {item.label}
        
        
      </Link>
  </div>

  )

}