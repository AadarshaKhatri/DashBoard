
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

const BarChartComponent = () => {
  const data = [
    {
      "month": "Jan",
      "Value": 400
    },
    {
      "month": "Mar",
      "Value": 455
    },
    {
      "month": "Apr",
      "Value": 235
    },
    {
      "month": "May",
      "Value": 100
    },
    {
      "month": "Jun",
      "Value": 500
    },
    {
      "month": "July",
      "Value": 350
    },
    {
      "month": "Aug",
      "Value": 800
    },
    {
      "month": "Sep",
      "Value": 600
    },
    {
      "month": "Oct",
      "Value": 550
    },
    {
      "month": "Nov",
      "Value" : 770,
    },
    {
      "month": "Dec",
      "Value" : 290,
    }
  ];

  return (
    <>
      <BarChart
        width={500}
        height={250}
        data={data}  
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Value" fill="rgba(0, 61, 255, 1)" />
      </BarChart>
    </>
  );
};

export default BarChartComponent;
