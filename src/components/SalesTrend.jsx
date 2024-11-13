

import { AreaChart,XAxis,YAxis, Tooltip,Area, CartesianGrid } from 'recharts'

const SalesTrend = () => {
  const data = [
    {
      "name": "Jan",
      "Sales": 0,
      
      
    },
    {
      "name": "Feb",
      "Sales": 800,
     
    },
    {
      "name": "Mar",
      "Sales": 1200,
      
    },
    {
      "name": "Apr",
      "Sales": 1800,
   
    },
    {
      "name": "May",
      "Sales": 2890,
    
    },
    {
      "name": "Jun",
      "Sales": 2690,
 
    },
    {
      "name": "July",
      "Sales": 2700,
   
    },
    {
      "name" : "Aug",
      "Sales": 1800,

    },
    {
      "name" : "Sep",
      "Sales" :1500,
    },
    {
      "name": "Oct",
      "Sales": 2100,
    },{
      "name" : "Nov",
      "Sales" : 2400,

    },{
      "name" : "Dec",
      "Sales" : 2700,
    }
  ]
  return (
    < >
    <div className='mb-4'>
     <AreaChart width={600} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </div>

    </>
  )
}

export default SalesTrend