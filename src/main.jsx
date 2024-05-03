import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Project from './Components/Project.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'about',
        element:<Contact/>
      },{
        path:'projects',
        element:<Project/>
      }
      ,{
        path:'projects/user/:id',
        element:<Project/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
