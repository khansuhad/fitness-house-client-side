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
import MainLayout from "../src/Layout/MainLayout/MainLayout.jsx"
import Home from './Pages/Home/Home.jsx';

import BeATrainer from './Pages/TrainersPages/BeATrainer/BeATrainer/BeATrainer.jsx';
import Trainer from './Pages/TrainersPages/Trainer/Trainer/Trainer.jsx';
import TrainerDetails from './Pages/TrainersPages/Trainer/TrainerDetails/TrainerDetails.jsx';
import AvailableSlot from './Pages/TrainersPages/Trainer/AvailableSlot/AvailableSlot.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import ClassDetails from './Pages/Classes/ClassDetails/ClassDetails.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider//AuthProvider/AuthProvider.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import DashboardImg from './Pages/Dashboard/DashboardImg/DashboardImg.jsx';
import AllSubscribers from './Pages/Dashboard/AllSubscribers/AllSubscribers.jsx';
import AllTrainers from './Pages/Dashboard/AllTrainers/AllTrainers.jsx';
import AppliedTrainer from './Pages/Dashboard/AppliedTrainer/AppliedTrainer.jsx';
import Balance from './Pages/Dashboard/Balance/Balance.jsx';
import AddNewForum from './Pages/Dashboard/AddNewForum/AddNewForum.jsx';
import Forums from './Pages/Forum/Forums.jsx';
import AddNewClass from './Pages/Dashboard/AddNewClass/AddNewClass.jsx';
import ManageSlots from './Pages/Dashboard/ManageSlots/ManageSlots.jsx';
import ManageMembers from './Pages/Dashboard/ManageMembers/ManageMembers.jsx';
import RecommandedClass from './Pages/Dashboard/RecommandedClass/RecommandedClass.jsx';
import ActivityLog from './Pages/Dashboard/ActivityLog/ActivityLog.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './Authorization/Private/Private.jsx';
import ProfileSetting from './Pages/Dashboard/ProfileSetting/ProfileSetting.jsx';
import AvailableSlotDetails from './Pages/TrainersPages/Trainer/AvaiableSlotDetails/AvaiableSlotDetails.jsx';
import GalleryPage from './Pages/Gallery/GalleryPage.jsx';
import AdminRoute from './Authorization/admin/admin.jsx';
import AdminAndTrainerRoute from './Authorization/AdminAndTrainer/AdminAndTrainer.jsx';
import TrainerRoute from './Authorization/Trainer/Trainer.jsx';
import Stories from './Pages/Dashboard/Stories/Stories.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/> ,
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
        element:<PrivateRoute><BeATrainer/></PrivateRoute>
      },
      {
        path:"/trainerdetails/:id",
        element:<TrainerDetails/>,
        loader: ({params}) => fetch(`https://fitness-house-server.vercel.app/trainers/${params?.id}`)
      },
      {
        path:'/availableslot/:id',
        element:<PrivateRoute><AvailableSlotDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://fitness-house-server.vercel.app/newclass/id/${params?.id}`)
      },
      {
        path:`/trainer/availabletimslot/:id`,
        element:<PrivateRoute><AvailableSlot/></PrivateRoute>
      },
      {
        path:"/forums",
        element:<Forums/>,
        loader: () => fetch("https://fitness-house-server.vercel.app/newforums")
      },
      {
        path:'/gallery',
        element:<GalleryPage/>
      },
      {
          path:"/classes",
          element:<Classes/>
      },
      {
        path:'/class/details/:id',
        element:<ClassDetails/>,
        loader: ({params}) =>  fetch(`https://fitness-house-server.vercel.app/newclass/id/${params?.id}`)
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          {
            path:'/dashboard',
            element:<PrivateRoute><DashboardImg/></PrivateRoute>
          },
          {
            path:'/dashboard/activitylog',
            element:<PrivateRoute><ActivityLog/></PrivateRoute>
          },
       
          {
            path:"/dashboard/recommendedclass",
            element:<PrivateRoute><RecommandedClass/></PrivateRoute>
          },
          {
            path:'/dashboard/allsubscribers',
            element:<PrivateRoute><AdminRoute><AllSubscribers/></AdminRoute></PrivateRoute>
          },
          {
            path:'/dashboard/alltrainers',
            element:<PrivateRoute><AdminRoute><AllTrainers/></AdminRoute></PrivateRoute>
          },
          {
            path:'/dashboard/appliedtrainer',
            element:<PrivateRoute><AdminRoute><AppliedTrainer/></AdminRoute></PrivateRoute>
          },
          {
            path:'/dashboard/balance',
            element:<PrivateRoute><AdminRoute><Balance/></AdminRoute></PrivateRoute>
          },
          {
            path:'/dashboard/addnewforum',
            element:<PrivateRoute><AdminAndTrainerRoute><AddNewForum/></AdminAndTrainerRoute></PrivateRoute>
          },
          {
            path:'/dashboard/addnewclass',
            element:<PrivateRoute><TrainerRoute><AddNewClass/></TrainerRoute></PrivateRoute>
          },
          {
              path:'/dashboard/manageslots',
              element:<PrivateRoute><TrainerRoute><ManageSlots/></TrainerRoute></PrivateRoute>
          },
          {
            path:'/dashboard/managemember',
            element:<PrivateRoute><TrainerRoute><ManageMembers/></TrainerRoute></PrivateRoute>
          },
          {
            path:"/dashboard/profilesetting",
            element:<PrivateRoute><ProfileSetting/></PrivateRoute>
          } ,
          {
            path:"/dashboard/stories",
            element:<PrivateRoute><Stories/></PrivateRoute>
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
