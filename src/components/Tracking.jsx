import OrderTrakcingBar from "./OrderTrakcingBar"
import ShipperDetails from "./ShipperDetails"
import Map from "./Map"


const Tracking = () => {
  return (
    <>
    <section>
      {/* OrderTrakcing Bar */}
      <div>
        <OrderTrakcingBar/>
      </div>

      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-col flex-1">
          <ShipperDetails/>
          
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-col bg-white shadow-md rounded-md">
          <div className="bg-white-100 py-3 px-5">
            <h4 className="text-lg font-bold">Maps</h4>
          </div>
            <Map/>
          </div>
         

        </div>


  
      </div>


    </section>
   </>
  )
}

export default Tracking