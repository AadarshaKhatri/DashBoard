import { FaArrowTrendUp } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"

import LineGraph from "./LineGraph.jsx"
import CountryTable from "./CountryTable.jsx"
import Table from "./Table.jsx"


const OverView = () => {
  return (
    <>
    <div>
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-row justify-between">
      <div className='bg-white shadow-lg rounded-md flex flex-col '>

          <div className='w-full rounded-md bg-gray-100 h-12 flex flex-row justify-between items-center px-5'>
            <h3 className='text-lg text-gray-800'>Shipment Performance</h3>
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
                <strong className='font-sans text-4xl text-gray-800'>93.2%</strong>
              </div>

            </div>
            <div className='flex flex-row justify-between'>

              <span className='text-sm font-light'>vs Last week</span>
              <div className={`flex flex-row justify-center items-center gap-2 px-2 bg-green-100 rounded-full`}>
                <span className={`text-sm text-green-500`}>+12.3</span>
                <FaArrowTrendUp size={16} className="text-green-500"/>       

              </div>

            </div>
              


          </div>
          </div>

          <LineGraph/>
          </div>
      <div>
        <CountryTable/>
      </div>
      </div>

      <div>
        <Table/>
      </div>
          </div>
    
    </div>
    </>
  )
}

export default OverView