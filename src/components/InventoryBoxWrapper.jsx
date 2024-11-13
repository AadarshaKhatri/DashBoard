

const InventoryBoxWrapper = (props) => {
  return (
  <div className="bg-white w-60 px-5 py-10 shadow-md rounded-md flex flex-col">
      <h4 className="text-md font-light">{props.title}</h4>
      <h4 className="text-2xl font-bold">{props.value}</h4>
  </div>
  )
}

export default InventoryBoxWrapper