import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hi its me!
      <img src="https://i.ibb.co/Jntk2zH/Whats-App-Image-2023-11-23-at-8-00-34-PM-1-removebg-preview.png" alt="" />
    </div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
