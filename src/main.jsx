import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./Pages/Dashboard";

import Schools from "./Pages/Schools";
import App from "./App";
import Inventory from "./Pages/Inventory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element : <Dashboard/>
      },
      {
        path : '/shipment',
        element: <Schools/>
      },{
        path : '/orders',
        element : <div>Orders Page</div>,
      },{
        path: '/inventory',
        element :<Inventory/>
      },{
        path: "/customers",
        element:<div>Customers Page</div>
      },{
        path : "/help",
        element : <div>Help and Support Pages</div>
      },{
        path : "/settings",
        element : <div>Settings Page</div>
      }
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
