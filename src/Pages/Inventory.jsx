import { IoIosArrowDown } from "react-icons/io"
import InventoryStats from "../components/InventoryStats"
import InventoryTable from "../components/InventoryTable"



const Inventory = () => {
  return (
    <div className="overflow-x-hidden ">
        {/* Upper Part */}
      <section>
       <div className="flex flex-row  justify-end">
          <div className='flex flex-row gap-5'>
            <div className='flex flex-row w-20 p-2 items-center justify-between bg-white shadow-lg rounded-md'>
              <h4>Week</h4> <IoIosArrowDown/>
            </div>
            <div className='w-40 text-white shadow-customClicked bg-customClicked p-2 rounded-md flex flex-row justify-center cursor-pointer hover:bg-customHover hover:text-black'>
              <h4>+ New Shipments</h4>
            </div>
          </div>
        </div>
      </section>

      {/*Bottom Part*/}

      <section>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row gap-x-5 justify-between items-center">
            <div>
              <InventoryStats/>
            </div>
            <div className="flex-1">
              {/* Graph */}

              <div className='bg-white shadow-lg rounded-md flex flex-col '>

                  <div className='w-full rounded-md bg-gray-100 h-12 flex flex-row justify-between items-center px-5'>
                    <h3 className='text-lg text-gray-800'>Stock Availability</h3>
                  </div>

                  <div>
                    <div className= "w-52 ml-12 mt-2 mb-5">
                    <div className=' w-52 flex flex-row justify-between items-start'>

                      <div className='flex  flex-col justify-start  space-x-2'>
                        <strong className='font-sans text-4xl text-gray-800'>2400</strong>
                      </div>

                    </div>
                    <div className='flex flex-row justify-between'>
                      <span className='text-sm font-light'>Total Stock</span>
                 
                   </div>
                  </div>
                </div>

                {/* Graph Starts Here */}

              <div className="flex flex-col gap-y-2 mb-5">
                <div className="w-full flex-row flex justify-center  mb-2">
                  <div className="bg-blue-500  p-5 w-80 rounded-tl-md rounded-bl-md"></div>
                  <div className="bg-yellow-500 p-5 w-40 "></div>
                  <div className="bg-red-500 p-5 w-10 rounded-tr-md rounded-br-md"></div>

                </div>

                <div className="flex flex-row justify-evenly">

                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="p-3 rounded-md bg-blue-500"></div>
                    <h4 className="text-sm font-light">Available</h4>

                  </div>

                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="p-3 rounded-md bg-yellow-500"></div>
                    <h4 className="text-sm font-light">Low Stock</h4>

                  </div>

                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="p-3 rounded-md bg-red-500"></div>
                    <h4 className="text-sm font-light">Out of Stock</h4>

                  </div>
                </div>
              </div>

            <div className=" mx-10 flex flex-col gap-y-3 mb-5">
             <h4>Low Stock</h4>

                    {/* Product Information */}
                    <div className=" flex flex-row justify-between">
                      <div  className="flex flex-row items-center gap-2">
                        <hr className=" w-5 border-2 rotate-90 border-yellow-500"></hr>
                        <h4 className="w-60 text-sm ">MacBook Pro 14 inch</h4>
                      </div>

                      <h4 className="text-sm">22</h4>
                      <h4 className="text-sm">Apple Inc.</h4>
                      
                      
                    </div>

                    <div className=" flex flex-row justify-between">
                      <div  className="flex flex-row items-center gap-2">
                        <hr className=" w-5 border-2 rotate-90 border-yellow-500"></hr>
                        <h4 className="w-60 text-sm">Dell Inperson</h4>
                      </div>

                      <h4 className="text-sm">12</h4>
                      <h4 className="text-sm">Dell .Inc</h4>
                      
                      
                    </div>

                    <div className=" flex flex-row justify-between">
                      <div  className="flex flex-row items-center gap-2">
                        <hr className=" w-5 border-2 rotate-90 border-yellow-500"></hr>
                        <h4 className="w-60 text-sm">HP Spectre 360</h4>
                      </div>

                      <h4 className="text-sm">19</h4>
                      <h4 className="text-sm">Hp. Inc</h4>
                      
                      
                    </div>


            </div>
              
             
                

                
              </div>


            </div>
          </div>

          <div>
            <InventoryTable/>
          </div>
          
        </div>

        
      </section>

    </div>
   
  )
}

export default Inventory