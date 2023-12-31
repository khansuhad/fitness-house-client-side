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
import ManageSlots from './components/Dashboard/ManageSlots/ManageSlots.jsx';
import ManageMembers from './components/Dashboard/ManageMembers/ManageMembers.jsx';
import Classes from './components/Classes/Classes.jsx';
import ClassDetails from './components/Classes/ClassDetails.jsx';
import RecommandedClass from './components/Dashboard/RecommandedClass/RecommandedClass.jsx';
import ActivityLog from './components/Dashboard/ActivityLog/ActivityLog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import ProfileSetting from './components/Dashboard/ProfileSetting/ProfileSetting.jsx';
import AvailableSlotDetails from './components/TrainersPages/Trainer/AvaiableSlotDetails.jsx';
import GalleryPage from './components/Gallery/GalleryPage.jsx';
import AdminRoute from './Route/adminRoute.jsx';
import AdminAndTrainerRoute from './Route/AdminAndTrainerRoute.jsx';
import TrainerRoute from './Route/TrainerRoute.jsx';
import Stories from './components/Dashboard/Stories/Stories.jsx';
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
