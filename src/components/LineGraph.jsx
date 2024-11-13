import { LineChart,CartesianGrid, XAxis, YAxis, Tooltip, Line,Legend  } from "recharts"

const LineGraph = () => {
  const data = [
    {
      "name": "1",
      "Success Rate": 0,
      "Delay Rate": 0,
      "Efficiency": 0
    },
    {
      "name": "3",
      "Success Rate": 3200,
      "Delay Rate": 1800,
      "Efficiency": 2200
    },
    {
      "name": "5",
      "Success Rate": 3100,
      "Delay Rate": 2000,
      "Efficiency": 2100
    },
    {
      "name": "7",
      "Success Rate": 2800,
      "Delay Rate": 1700,
      "Efficiency": 2000
    },
    {
      "name": "10",
      "Success Rate": 3500,
      "Delay Rate": 2300,
      "Efficiency": 2400
    },
    {
      "name": "13",
      "Success Rate": 3000,
      "Delay Rate": 2100,
      "Efficiency": 2300
    },
    {
      "name": "17",
      "Success Rate": 2900,
      "Delay Rate": 1900,
      "Efficiency": 2200
    },
    {
      "name": "21",
      "Success Rate": 2700,
      "Delay Rate": 1600,
      "Efficiency": 2100
    },
    {
      "name": "25",
      "Success Rate": 3400,
      "Delay Rate": 2200,
      "Efficiency": 2400
    },
    {
      "name": "27",
      "Success Rate": 3600,
      "Delay Rate": 2500,
      "Efficiency": 2600
    },
    {
      "name": "30",
      "Success Rate": 3300,
      "Delay Rate": 2400,
      "Efficiency": 2500
    }
  ];
  
  return (
    <>
        <LineChart width={780} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Delay Rate" stroke="#8B0000" />
      <Line type="monotone" dataKey="Success Rate" stroke="#006400" />
      <Line type="monotone" dataKey="Efficiency" stroke="#00008B" />
    </LineChart>


    </>
  )
}

export default LineGraph