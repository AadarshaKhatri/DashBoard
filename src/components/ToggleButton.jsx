import  { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div 
      onClick={handleToggle} 
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isToggled ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isToggled ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
