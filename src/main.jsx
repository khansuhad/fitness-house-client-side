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
import Register from './components/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DashboardImg from './components/Dashboard/DashboardImg.jsx';
import AllSubscribers from './components/Dashboard/AllSubscribers/AllSubscribers.jsx';
import AllTrainers from './components/Dashboard/AllTrainers/AllTrainers.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:'/dashboard',
            element:<DashboardImg/>
          },
          {
            path:'/dashboard/allsubscribers',
            element:<AllSubscribers/>
          },
          {
            path:'/dashboard/alltrainers',
            element:<AllTrainers/>
          },
        ]
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
