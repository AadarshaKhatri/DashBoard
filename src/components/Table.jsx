
import { IoFilter } from 'react-icons/io5'
import { CiExport } from 'react-icons/ci'

const Table = () => {
  return (
   <>
    <div className="bg-white px-6 py-6 rounded-md shadow-md border border-gray-300 flex-1">
      <div className='flex flex-row justify-between'>
        <strong className="text-lg font-semibold text-gray-700">Shipment Tracking</strong>
        <div>
          <div className='flex flex-row gap-x-3 py-2'>
                <div className='flex flex-row w-20 p-1 items-center justify-center gap-x-3 bg-white shadow-lg rounded-md'>
                <IoFilter/> <h4 className='text-sm'>Filter</h4> 
                </div>
                <div className='flex flex-row w-20 p-1 items-center justify-center gap-x-3 bg-white shadow-lg rounded-md'>
                <CiExport/> <h4 className='text-sm'>Export</h4> 
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
          <th className="py-3 px-4 border-b border-gray-200">Order Id</th>
          <th className="py-3 px-4 border-b border-gray-200">Category</th>
          <th className="py-3 px-4 border-b border-gray-200">Delivery</th>
          <th className="py-3 px-4 border-b border-gray-200">Destination</th>
          <th className="py-3 px-4 border-b border-gray-200">Fee</th>
          <th className="py-3 px-4 border-b border-gray-200">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">ABC2429Z</td>
          <td className="py-4 px-4 border-b border-gray-200">Electronics</td>
          <td className="py-4 px-4 border-b border-gray-200">22/09/2024</td>
          <td className="py-4 px-4 border-b border-gray-200">USA</td>
          <td className="py-4 px-4 border-b border-gray-200">$1000</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-green-100 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-green-500'>Delivered</h4>
            </div>
          </td>
        </tr>

        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">ALX0007P</td>
          <td className="py-4 px-4 border-b border-gray-200">Furniture</td>
          <td className="py-4 px-4 border-b border-gray-200">22/09/2024</td>
          <td className="py-4 px-4 border-b border-gray-200">Canada</td>
          <td className="py-4 px-4 border-b  border-gray-200">$1290</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-yellow-100 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-yellow-500'>Pending</h4>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50 text-gray-700">
          <td className="py-4 px-4 border-b border-gray-200">ACW1239L</td>
          <td className="py-4 px-4 border-b border-gray-200">Clothing</td>
          <td className="py-4 px-4 border-b border-gray-200">22/09/2024</td>
          <td className="py-4 px-4 border-b  border-gray-200">Nepal</td>
          <td className="py-4 px-4 border-b  border-gray-200">$$2500</td>
          <td className="py-4 px-4 border-b border-gray-200">
           <div className='bg-blue-100 p-2 rounded-md justify-center flex flex-row'>
              <h4 className='text-blue-500'>Shipping</h4>
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

export default Table