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
import AddNewForum from './components/Dashboard/AddNewForum/AddNewForum.jsx';
import Forums from './components/Forum/Forums.jsx';
import Trainer from './components/TrainersPages/Trainer/Trainer.jsx';
import TrainerDetails from './components/TrainersPages/Trainer/TrainerDetails.jsx';
import AddNewClass from './components/Dashboard/AddNewClass/AddNewClass.jsx';
import AvailableSlot from './components/TrainersPages/Trainer/AvailableSlot.jsx';
import AvailableSlotDetails from './components/TrainersPages/Trainer/AvailableSlotDetails.jsx';
import ManageSlots from './components/Dashboard/ManageSlots/ManageSlots.jsx';
import ManageMembers from './components/Dashboard/ManageMembers/ManageMembers.jsx';
import Classes from './components/Classes/Classes.jsx';
import ClassDetails from './components/Classes/ClassDetails.jsx';
import RecommandedClass from './components/Dashboard/RecommandedClass/RecommandedClass.jsx';
import ActivityLog from './components/Dashboard/ActivityLog/ActivityLog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/trainer',
        element:<Trainer/>
      },
      {
        path:'/beatrainer',
        element:<BeATrainer/>
      },
      {
        path:"/trainerdetails/:id",
        element:<TrainerDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/trainers/${params?.id}`)
      },
      {
        path:'/availableslot/:id',
        element:<AvailableSlotDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/newclass/id/${params?.id}`)
      },
      {
        path:`/trainer/availabletimslot/:id`,
        element:<AvailableSlot/>
      },
      {
        path:"/forums",
        element:<Forums/>
      },
      {
          path:"/classes",
          element:<Classes/>
      },
      {
        path:'/class/details/:id',
        element:<ClassDetails/>,
        loader: ({params}) =>  fetch(`http://localhost:5000/newclass/id/${params?.id}`)
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
            path:'/dashboard/activitylog',
            element:<ActivityLog/>
          },
          {
            path:"/dashboard/recommendedclass",
            element:<RecommandedClass/>
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
          {
            path:'/dashboard/addnewclass',
            element:<AddNewClass/>
          },
          {
              path:'/dashboard/manageslots',
              element:<ManageSlots/>
          },
          {
            path:'/dashboard/managemember',
            element:<ManageMembers/>
          }
        

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
