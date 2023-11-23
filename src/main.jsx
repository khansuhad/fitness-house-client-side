import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    children: [
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
