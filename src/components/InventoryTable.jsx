import { IoFilter } from "react-icons/io5"


const InventoryTable = () => {
  return (
    <>
    <div className="bg-white px-6 py-6 rounded-md shadow-md border border-gray-300 flex-1">
      <div className='flex flex-row justify-between'>
        <strong className="text-lg font-semibold text-gray-700">Reorder Recommendation</strong>
        <div>
          <div className='flex flex-row gap-x-3 py-2'>
                <div className='flex flex-row w-20 p-1 items-center justify-center gap-x-3 bg-white shadow-lg rounded-md'>
                <IoFilter/> <h4 className='text-sm'>Filter</h4> 
                </div>
              
                <div className='flex flex-row w-10 p-1 items-center justify-center bg-white shadow-lg rounded-md'>
                  <h4>...</h4>
                </div>
          </div>
          </div>
      </div>

  <div className="mt-5 overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-4 border-b border-gray-200">Product</th>
          <th className="py-3 px-4 border-b border-gray-200">SKU</th>
          <th className="py-3 px-4 border-b border-gray-200">On hand</th>
          <th className="py-3 px-4 border-b border-gray-200">Units to order</th>
          <th className="py-3 px-4 border-b border-gray-200">Cost</th>
          <th className="py-3 px-4 border-b border-gray-200">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">Nike Force</td>
          <td className="py-4 px-4 border-b border-gray-200">LK-200192</td>
          <td className="py-4 px-4 border-b border-gray-200">1,290</td>
          <td className="py-4 px-4 border-b border-gray-200">2,500</td>
          <td className="py-4 px-4 border-b border-gray-200">$12,200</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-gray-100 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-gray-500'>Add to Order</h4>
            </div>
          </td>
        </tr>

        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">MacBook Pro 14</td>
          <td className="py-4 px-4 border-b border-gray-200">LK-119928</td>
          <td className="py-4 px-4 border-b border-gray-200">90</td>
          <td className="py-4 px-4 border-b border-gray-200">200</td>
          <td className="py-4 px-4 border-b  border-gray-200">$122,290</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-green-500 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-white'>Order Added</h4>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">Kitchen Supply</td>
          <td className="py-4 px-4 border-b border-gray-200">LT-190283 </td>
          <td className="py-4 px-4 border-b border-gray-200">1,900</td>
          <td className="py-4 px-4 border-b  border-gray-200">2,500</td>
          <td className="py-4 px-4 border-b  border-gray-200">$ 14,200</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-gray-100 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-gray-500'>Add to Orders</h4>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">Auto Parts</td>
          <td className="py-4 px-4 border-b border-gray-200">LT-229102 </td>
          <td className="py-4 px-4 border-b border-gray-200">990</td>
          <td className="py-4 px-4 border-b  border-gray-200">1,550</td>
          <td className="py-4 px-4 border-b  border-gray-200">$ 20,000</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-green-500 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-white'>Orders Added</h4>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    


    </>
  )
}

export default InventoryTable