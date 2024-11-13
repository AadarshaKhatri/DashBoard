import InventoryBoxWrapper from "./InventoryBoxWrapper"


const InventoryStats = () => {
  const InventoryData = [
    {
      title : "Total Inventory",
      value : "$ 520,000",
    },{
      title : "Units on hand",
      value : "1,200",
    },{
      title : "Units on Order",
      value : "3,000"
    },{
      title:"Units to Render",
      value : "500",
    }
  ]
  return (
    <div className=" grid grid-rows-2 grid-flow-col gap-6">

      {InventoryData.map((currentElement,index)=>(
        <InventoryBoxWrapper
        title = {currentElement.title}
        key = {index}
        value = {currentElement.value}
        />
      ))}
    
    </div>
  )
}

export default InventoryStats