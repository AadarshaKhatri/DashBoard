import { FaCheckCircle, FaTruck } from "react-icons/fa"


const ShipperDetails = () => {

  
  return (
    <div className="flex flex-col gap-y-5">

      <div className="bg-white rounded-md shadow-md mx-5 p-5">
       
          <div className="flex flex-col gap-y-3">
          <h4 className="font-semibold text-2xl">Shipper Details</h4>

            {/* Shippment Code */}
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md text-gray-400 font-semibold">Shipment Code</h4>
            <h4> 123456768</h4>
          </div>

            {/* Name */}
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md text-gray-400 font-semibold">Shipment Name</h4>
            <div className="flex flex-row justify-center item-center gap-2">
              <h4 className="pt-1">Mike JohnSon</h4>
              <div className="p-2 bg-gray-100 text-gray-700 rounded-full text-sm ">
                <h4>MJ</h4>
              </div>
            </div>
          </div>


            {/* Phone Number */}
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md text-gray-400 font-semibold">Phone Number</h4>
            <h4>+122-1232343456876</h4>
          </div>

            {/* Email */}
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md text-gray-400 font-semibold">Phone Number</h4>
            <h4>mikej12@gmail.com</h4>
          </div>


         </div>
         
        
        
      </div>

      <div className="bg-white rounded-md shadow-md mx-5 p-5">
        <div className="flex flex-col gap-y-3">
        <h4 className="font-semibold text-2xl ">Shipping Details</h4>

        {/* Green Bar */}
        <div className = "bg-green-100 w-full p-5 flex flex-row justify-between">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <FaCheckCircle size = {24} className="text-green-600"/>
            <h4 className="text-green-600">Estimate Order Delivery</h4>
          </div>
          <h4 className="text-green-600">September 24th, 2024</h4>

        </div>


        {/* From- To */}

        <div className="flex flex-row justify-between items-center">

          <div className="flex flex-col">
            <h4 className="font-bold">From</h4>
            <h4 className="text-sm font-light">Location</h4>
          </div>

          <hr className="w-40  border-gray-800 border-2 border-dashed"></hr>
          <div className="flex flex-col">
            <h4 className="font-bold">To</h4>
            <h4 className="text-sm font-light">Location</h4>
          </div>
        </div>


        <hr className="border border-gray-200 w-full"></hr>


        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex flex-row justify-center gap-x-2 items-center">
            <div className="bg-red-500 rounded-full p-4">
              <FaTruck size={24} className="text-white"/>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold">Freighliner Cascadia</h4>
              <h4 className="text-sm font-light">Truck - 4F299LX2</h4>
            </div>
          </div>

          <div>
            <div className="px-2 bg-gray-100 rounded-md flex flex-row justify-center items-center shadow-lg">
                <h4>...</h4>
            </div>
          </div>
        </div>
        
        {/* Order Delivery Timeline */}
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row items-center gap-2 ">
            <div className=" w-5 h-5 bg-red-400 rounded-full">
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex flex-row items-center justify-between">
              <h4 className="font-semibold text-md">In Transit</h4>
              <h4 className="font-semibold text-sm">10 Sept, 2024</h4>
              </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="font-light text-sm">Location of the transit</h4>
              <h4 className="font-light text-sm"> 7:00 AM</h4>


           </div>
              
            </div>

          </div>

          <hr className="w-6 border border-red-400  rotate-90 "></hr>


          <div className="flex flex-row items-center gap-2 ">
            <div className=" w-5 h-5 bg-red-400 rounded-full">
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex flex-row items-center justify-between">
              <h4 className="font-semibold text-md">Delivery</h4>
              <h4 className="font-semibold text-sm">10 Sept, 2024</h4>
              </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="font-light text-sm">Location of the delivery starts</h4>
              <h4 className="font-light text-sm"> 7:00 AM</h4>


           </div>
              
            </div>

          </div>

          <hr className="w-6 border border-gray-200  rotate-90"></hr>

          <div className="flex flex-row items-center gap-2 ">
            <div className=" w-5 h-5 bg-gray-200 rounded-full">
            </div>
            <div className="flex-1 flex-col">
              <div className=" flex flex-row items-center justify-between">
              <h4 className="font-semibold text-md">Order Delivered</h4>
              <h4 className="font-semibold text-sm">--- --- ---</h4>
              </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="font-light text-sm">Location of Delivery Address</h4>
              <h4 className="font-light  text-sm"> --:-- AM</h4>


           </div>
              
            </div>

          </div>
    

        </div>

        </div>

      </div>
    </div>
  )
}

export default ShipperDetails