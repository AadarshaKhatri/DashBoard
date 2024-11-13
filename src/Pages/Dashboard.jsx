
import DashboardStats from '../components/DashboardStats'


import Table from '../components/Table'

import { IoIosArrowDown } from 'react-icons/io'
import BarChart from '../components/BarChart'
import { FaArrowTrendUp } from 'react-icons/fa6'
import SalesTrend from '../components/SalesTrend'


const Dashboard = () => {
  return (
    <>
     <div className = "flex flex-row mr-5 my-3  justify-end">
        

      <div className='flex flex-row gap-5'>
            <div className='flex flex-row w-20 p-2 items-center justify-between bg-white shadow-lg rounded-md'>
              <h4>Week</h4> <IoIosArrowDown/>
            </div>
            <div className='w-40 text-white shadow-customClicked bg-customClicked p-2 rounded-md flex flex-row justify-center cursor-pointer hover:bg-customHover hover:text-black'>
              <h4>+ New Shipments</h4>
            </div>
          </div>
         

    </div>


    <div className='flex flex-col gap-4 w-full '>
      <DashboardStats/>
      <div className='flex flex-col'>
        <div className='mt-5 flex flex-row gap-x-5'>

          <div className='bg-white shadow-lg rounded-md flex flex-col '>

            <div className='w-full rounded-md bg-gray-100 h-12 flex flex-row justify-between items-center px-5'>
              <h3 className='text-lg text-gray-800'>Total Sales</h3>
              <div className='flex flex-row gap-x-3'>
                <div className='flex flex-row w-20 p-1 items-center justify-between bg-white shadow-lg rounded-md'>
                  <h4>Month</h4> <IoIosArrowDown/>
                </div>
                <div className='flex flex-row w-10 p-1 items-center justify-center bg-white shadow-lg rounded-md'>
                  <h4>...</h4>
                </div>
              </div>

            </div>

            <div>
              <div className= "w-52 ml-12 mt-2 mb-5">
              <div className=' w-52 flex flex-row justify-between items-start'>

                <div className='flex  flex-col justify-start  space-x-2'>
                  <strong className='font-sans text-4xl text-gray-800'>$829</strong>
                </div>

              </div>
              <div className='flex flex-row justify-between'>

                <span className='text-sm font-light'>vs Last week</span>
                <div className={`flex flex-row justify-center items-center gap-2 px-2 bg-green-100 rounded-full`}>
                  <span className={`text-sm text-green-500`}>+9.1</span>
                  <FaArrowTrendUp size={16} className="text-green-500"/>       

                </div>
            
              </div>
                
          

            </div>
            </div>

            <BarChart/>
          </div>

          <div className='bg-white shadow-lg rounded-md flex flex-col justify-center'>

            <div className=' w-full rounded-md bg-gray-100 h-12 flex flex-row justify-between items-center px-5'>
              <h3 className='text-lg text-gray-800 py-2'>Sales Trend</h3>
              <div className='flex flex-row gap-x-3 py-2'>
                <div className='flex flex-row w-20 p-1 items-center justify-between bg-white shadow-lg rounded-md'>
                  <h4>Month</h4> <IoIosArrowDown/>
                </div>
                <div className='flex flex-row w-10 p-1 items-center justify-center bg-white shadow-lg rounded-md'>
                  <h4>...</h4>
                </div>
              </div>

            </div>

            <div>
              <div className= "w-52 ml-12 mt-2 mb-5 ">
              <div className=' w-52 flex flex-row justify-between items-start'>

                <div className='flex  flex-col justify-start  space-x-2'>
                  <strong className='font-sans text-4xl text-gray-800'>9920 units</strong>
                </div>

              </div>
              <div className='flex flex-row justify-between'>

                <span className='text-sm font-light'>vs Last week</span>
                <div className={`flex flex-row justify-center items-center gap-2 px-2 bg-green-100 rounded-full`}>
                  <span className={`text-sm text-green-500`}>+9.1</span>
                  <FaArrowTrendUp size={16} className="text-green-500"/>       

                </div>

              </div>
                


            </div>
            </div>

            <SalesTrend/>
            </div>
        </div>
      </div>

      <div className='mt-5 flex'>
        <Table/>
      </div>

      
    </div>
 
    </>
  )
}

export default Dashboard