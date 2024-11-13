import { FaCheckCircle, FaHistory } from "react-icons/fa"
import { FaBox, FaClock, FaTruck } from "react-icons/fa6"


const OrderTrakcingBar = () => {
  return (
    <section>
      <div className="bg-white py-2 shadow-sm rounded-full px-10">
        <div className="flex flex-row gap-x-5 justify-center items-center">

          <div className="flex flex-row items-center ">
            <div className="bg-red-500 p-3 rounded-full">
              <FaClock size=  {16} className="text-white"/>
            </div>
            <h4 className="text-lg ml-2 font-semibold">Processing</h4>
          </div>

          <hr className=" border-2 w-10 border-red-500"></hr>

          <div className="flex flex-row items-center ">
            <div className="bg-red-500 p-3 rounded-full">
              <FaHistory size=  {16} className="text-white"/>
            </div>
            <h4 className="text-lg ml-2 font-semibold">In Transit</h4>
          </div>

          <hr className=" border-2 w-10 border-red-500"></hr>

          <div className="flex flex-row items-center ">
            <div className="bg-red-500 p-3 rounded-full">
              <FaBox size=  {16} className="text-white"/>
            </div>
            <h4 className="text-lg ml-2 font-semibold">Package</h4>
          </div>

          <hr className=" border-2 w-10 border-red-500"></hr>

          <div className="flex flex-row items-center ">
            <div className="bg-red-500 p-3 rounded-full">
              <FaTruck size=  {16} className="text-white"/>
            </div>
            <h4 className="text-lg ml-2 font-semibold">Delivery</h4>
          </div>

          <hr className=" border-2 w-10 border-gray-500 border-dashed"></hr>

          <div className="flex flex-row items-center ">
           
              <FaCheckCircle size=  {24} className="text-gray-500"/>
            
            <h4 className="text-lg ml-2 font-semibold">Order Delivered</h4>
          </div>
          
          
        </div>

      </div>
      
    </section>
  )
}

export default OrderTrakcingBar