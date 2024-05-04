import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Routes, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Project from './Components/Project.jsx'
import Github, { fetchAPI } from './Components/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },{
//         path:'about',
//         element:<Contact/>
//       },{
//         path:'projects',
//         element:<Project/>
//       }
//       ,{
//         path:'projects/user/:id',
//         element:<Project/>
//       }
//       ,{
//         loader:{fetchAPI},
//         path:'github',
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<Contact/>}/>
    <Route path='projects' element={<Project/>}/>
     <Route path='projects/userid/:id' element={<Project/>}/>
    <Route/>
    <Route loader={fetchAPI} path='github' element={<Github/>}/>
  </Route>
)

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
