import  { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import OverView from './OverView';
import Tracking from './Tracking';

const TextSwitcher = () => {

  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center w-full">
   

     {/* Upper Part */}
      <div className="w-full flex justify-between mb-4">
        <div className="flex space-x-4 border-b-2">
          {/* Overview Tab */}
          <div
            onClick={() => handleTabClick('overview')}
            className={`cursor-pointer py-2 px-4 text-lg transition-all duration-300 
              ${activeTab === 'overview' ? 'text-gray-800 bg-white shadow-lg p-3 rounded-md' : 'text-gray-500'}`}
          >
            Overview
          </div>
          
          {/* Tracking Tab */}
          <div
            onClick={() => handleTabClick('tracking')}
            className={`cursor-pointer py-2 px-4 text-lg transition-all duration-300 
              ${activeTab === 'tracking' ? 'text-gray-800 bg-white shadow-lg p-3 rounded-md' : 'text-gray-500'}`}
          >
            Tracking
          </div>
        </div>

        <div className='flex flex-row gap-5'>
            <div className='flex flex-row w-20 p-2 items-center justify-between bg-white shadow-lg rounded-md'>
              <h4>Week</h4> <IoIosArrowDown/>
            </div>
            <div className='w-40 text-white shadow-customClicked bg-customClicked p-2 rounded-md flex flex-row justify-center cursor-pointer hover:bg-customHover hover:text-black'>
              <h4>+ New Shipments</h4>
            </div>
          </div>


      </div>

     
      <div className="w-full p-4">
        {activeTab === 'overview' ? (
          <div>
            <OverView/>
            
          </div>
        ) : (
          <div>
            <Tracking/>
            </div>
        )}
      </div>
    </div>
  );
};

export default TextSwitcher;
