import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const queryClient = new QueryClient()
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DashboardImg from './components/Dashboard/DashboardImg.jsx';
import AllSubscribers from './components/Dashboard/AllSubscribers/AllSubscribers.jsx';
import AllTrainers from './components/Dashboard/AllTrainers/AllTrainers.jsx';
import AppliedTrainer from './components/Dashboard/AppliedTrainer/AppliedTrainer.jsx';
import Balance from './components/Dashboard/Balance/Balance.jsx';
import BeATrainer from './components/TrainersPages/BeATrainer/BeATrainer.jsx';
import BeATrainerPage from './components/TrainersPages/BeATrainer/someething.jsx';
import AddNewForum from './components/Dashboard/AddNewForum/AddNewForum.jsx';
import Forum from './components/Forum/Forums.jsx';
import Forums from './components/Forum/Forums.jsx';
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
        path:'/trainer',
        element:<BeATrainerPage/>
      },
      {
        path:"/forums",
        element:<Forums/>
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
          {
            path:'/dashboard/appliedtrainer',
            element:<AppliedTrainer/>
          },
          {
            path:'/dashboard/balance',
            element:<Balance/>
          },
          {
            path:'/dashboard/addnewforum',
            element:<AddNewForum/>
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
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider> 
</AuthProvider>
  </React.StrictMode>,
)
