
import Nav from './Nav'; 



const SideBar = () => {
  return (
    <div className=" w-60 p-3  flex-1 flex-col items-start">

      <div id="header-part" className="flex justify-center items-center gap-4  mb-10">
        <img src="src/assets/ScalaLogo.png" alt="BetterSchool Logo" style={{ width: "200px" }} />
        
      </div>

 

      <div>
            <Nav/>
      </div>
   
      
    
    </div>
  );
}

export default SideBar;
