import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className=' bg-orange-400 w-full h-[5rem]'>
        <div>
          <Link to='https://github.com/Krishnendu-1'>Krishnendu Roy</Link>
          <div>
            <NavLink to='/' className={({isActive})=>
                `${isActive ? 'text-orange-600' : 'text-black'} text-3xl`
            }>Home
            </NavLink>
            <NavLink to='/about' className={({isActive})=>
                `${isActive ? ' text-orange-600' : 'text-black'} text-3xl`
            }>Contact us
            </NavLink>
            <NavLink to='/projects' className={({isActive})=>
                `${isActive ? 'text-orange-600' : 'text-black'} text-3xl`
            }>Project
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Header
