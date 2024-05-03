import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-orange-200 w-full h-screen'>
    <Header/>
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default App
