import React from 'react'
import './output.css'
import Layout from './Layout/Layout'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
   <div>
      <div>
        <Layout/>
      </div> 

    </div>
    </>
  )
}

export default App