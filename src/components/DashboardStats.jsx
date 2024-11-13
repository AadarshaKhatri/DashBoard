import React from 'react'
import Boxwrapper from './Boxwrapper'
import { FaBox,  FaCheckCircle, FaMoneyBill, FaTractor } from 'react-icons/fa'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io';

const DashboardStats = () => {
  const boxwrapProps = [
    {
      title: "Total Shipments",
      number: "71.21",
      icons: <FaTractor size={16} radius={2} className="text-customClicked" />,
      trendBgColor: "bg-red-100",
      trendtextColor: "text-red-500",
      trendnumber: "-3.1",
      TrendIcon: <IoMdTrendingDown size={16} className="text-red-500" />
    },
    {
      title: "Total Orders",
      number: "92",
      icons: <FaBox size={16} radius={2} className="text-customClicked" />,
      trendBgColor: "bg-green-100",
      trendtextColor: "text-green-500",
      trendnumber: "+9.6",
      TrendIcon: <IoMdTrendingUp size={16} className="text-green-500" />
    },
    {
      title: "Revenue",
      number: "$ 13.71K",
      icons: <FaMoneyBill size={16} radius={2} className="text-customClicked" />,
      trendBgColor: "bg-red-100",
      trendtextColor: "text-red-500",
      trendnumber: "-1.7",
      TrendIcon: <IoMdTrendingDown size={16} className="text-red-500" />
    },
    {
      title: "Delivered",
      number: "140",
      icons: <FaCheckCircle size={16} radius={2} className="text-customClicked" />,
      trendBgColor: "bg-green-100",
      trendtextColor: "text-green-500",
      trendnumber: "+4.7",
      TrendIcon: <IoMdTrendingUp size={16} className="text-green-500" />
    }
  ];

  return (
    <div className="flex flex-row justify-between w-full">
      {boxwrapProps.map((currentElement, index) => (
        <Boxwrapper
          key={index}
          title={currentElement.title}
          number={currentElement.number}
          icon={currentElement.icons}
          trendBgColor={currentElement.trendBgColor}
          trendtextColor={currentElement.trendtextColor}
          trendNumber={currentElement.trendnumber}
          TrendIcon={currentElement.TrendIcon}
        />
      ))}
    </div>
  );
}

export default DashboardStats;
