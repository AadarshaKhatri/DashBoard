import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

const CountryTable = () => {
  return (
    <>
      <div style={{ width: "420px" }} className="w-full bg-white  rounded-md flex flex-col justify-start shadow-md ">

      <div className="bg-gray-100 p-3 border-b-2 border-gray-300">
            <strong className="text-lg font-semibold  text-gray-700 mb-5">Total Countries By Sale</strong>
          </div>

        <div className=" px-6 py-6 flex flex-col gap-y-4">
         
          

          <div className='w-full mb-4 flex flex-row justify-between items-center'>
            <h4 className="text-4xl font-bold">34.89K</h4>
            <h6 className="text-sm font-light">Since Last Week</h6>
          </div>

          <div className='w-full flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <div className="w-3 h-3 p-3 bg-gray-300 rounded-full"></div>
              <h4 className="text-lg ">China</h4>
            </div>
            <IoIosTrendingUp size = {24} className="text-green-500"/>
            <h6 className="text-lg font-light">9.25K</h6>
          </div>

          <div className='w-full flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <div className="w-3 h-3 p-3 bg-gray-300 rounded-full"></div>
              <h4 className="text-lg ">USA</h4>
            </div>
            <IoIosTrendingUp size = {24} className="text-green-500"/>
            <h6 className="text-lg font-light">8.29K</h6>
          </div>

          <div className='w-full flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <div className="w-3 h-3 p-3 bg-gray-300 rounded-full"></div>
              <h4 className="text-lg ">India</h4>
            </div>
            <IoIosTrendingDown size = {24} className="text-red-500"/>
            <h6 className="text-lg font-light">9.29K</h6>
          </div>

          <div className='w-full flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <div className="w-3 h-3 p-3 bg-gray-300 rounded-full"></div>
              <h4 className="text-lg ">Canada</h4>
            </div>
            <IoIosTrendingDown size = {24} className="text-red-500"/>
            <h6 className="text-lg font-light">8.29K</h6>
          </div>

          <div className='w-full flex flex-row justify-between items-center'>
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <div className="w-3 h-3 p-3 bg-gray-300 rounded-full"></div>
              <h4 className="text-lg ">France</h4>
            </div>
            <IoIosTrendingUp size = {24} className="text-green-500"/>
            <h6 className="text-lg font-light">7.20K</h6>
          </div>


        </div>
      </div>
    </>
  );
}

export default CountryTable;
