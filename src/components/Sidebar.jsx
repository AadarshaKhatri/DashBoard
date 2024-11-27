
import Nav from './Nav'; 



const SideBar = () => {
  return (
    <div className=" w-60 p-3  flex-1 flex-col items-start">

      <div id="header-part" className="flex justify-center items-center gap-4  mb-10">
        {/* <img src="ScalaLogo.png" alt="Logo" style={{ width: "200px" }} /> */}

        <h2 className='text-2xl font-bold'>ABC</h2>
        
      </div>

 

      <div>
            <Nav/>
      </div>
   
      
    
    </div>
  );
}

export default SideBar;
