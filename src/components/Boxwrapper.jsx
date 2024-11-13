import React from 'react'


const Boxwrapper = ({...props}) => {
  const boxwarpStyles = 'p-4 px-5 gap-x-5 bg-white rounded-md shadow-md flex-1 border border-gray-200 flex items-center';
  return (
    <>
    <div >

      <div className={boxwarpStyles}>
        <div>
          <div className=' w-60 flex flex-row justify-between items-start'>

            <div className='flex  flex-col justify-start  space-x-2'>
              <span className='text-lg text-gray-700 font-sans '>{props.title}</span>
              <strong className='font-sans text-2xl text-gray-800'>{props.number}</strong>
            </div>

            <div className='bg-white p-2 shadow-lg rounded-md'>
              {props.icon}
              
            </div>

          </div>
          <div className='flex flex-row justify-between'>

            <span className='text-sm font-light'>vs Last week</span>
            <div className={`flex flex-row justify-center items-center gap-2 px-2 ${props.trendBgColor} rounded-full`}>
              <span className={`text-sm ${props.trendtextColor}`}>{props.trendNumber}</span>
              {props.TrendIcon}         

            </div>
         
          </div>
            
      

        </div>
      </div>

    
    </div>


    </>

  )
}

export default Boxwrapper