import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className=' bg-orange-100 w-full h-[5rem] flex justify-between items-center p-3'>
        
          <Link to='https://github.com/Krishnendu-1' target='_blank' className=' text-3xl font-serif text-slate-700'>Krishnendu Roy</Link>
          <div className=' w-[50vw] flex justify-between items-center'>
            <NavLink to='/' className={({isActive})=>
                `${isActive ? 'text-orange-600' : 'text-black'} text-2xl hover:text-orange-400`
            }>Home
            </NavLink>
            <NavLink to='/about' className={({isActive})=>
                `${isActive ? ' text-orange-600' : 'text-black'} text-2xl hover:text-orange-400`
            }>Contact us
            </NavLink>
            <NavLink to='/projects' className={({isActive})=>
                `${isActive ? 'text-orange-600' : 'text-black'} text-2xl hover:text-orange-400`
            }>Project
            </NavLink>
            <NavLink to='/github' className={({isActive})=>
                `${isActive ? 'text-orange-600' : 'text-black'} text-2xl hover:text-orange-400`
            }>GitHub
            </NavLink>
          </div>
    </div>
  )
}

export default Header
