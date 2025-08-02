import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white my-4 mx-2 md:my-8 md:mx-24 py-4 md:py-6 px-4 md:px-8 shadow-md">
      <nav className="flex flex-col md:flex-row items-center md:items-center justify-between relative">
        {/* Left */}
        <div className="flex-none w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
          <Link className="text-2xl md:text-3xl font-bold" to="/">
            <span className="text-gray-700">Swift </span>
            <span className="text-orange-700">Mailer</span>
          </Link>
        </div>

        {/* Center */}
        <div className="flex-1 w-full md:w-auto flex justify-center mb-4 md:mb-0">
          <ul className="text-gray-700 font-bold flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center">
            <li className='hover:text-gray-500'>
              <NavLink to="/" className={({isActive}) => isActive ? 'text-orange-700' : ''}>
                Home
              </NavLink>
            </li>
            <li className='hover:text-gray-500'>
              <NavLink to="/about" className={({isActive}) => isActive ? 'text-orange-700' : ''}>
                About
              </NavLink>
            </li>
            <li className='hover:text-gray-500'>
              <NavLink to="/contact" className={({isActive}) => isActive ? 'text-orange-700' : ''}>
                Contact
              </NavLink>
            </li>
            <li className='hover:text-gray-500'>
              <NavLink to="/user" className={({isActive}) => isActive ? 'text-orange-700' : ''}>
                User
              </NavLink>
            </li>
            <li className='hover:text-gray-500'>
              <NavLink to="/github" className={({isActive}) => isActive ? 'text-orange-700' : ''}>
                Github
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex-none w-full md:w-auto flex justify-center md:justify-end space-x-2">
          <NavLink className="bg-orange-700 text-white px-4 py-2 rounded-md" to="/login">
            Login
          </NavLink>
          <NavLink className="bg-gray-700 text-white px-4 py-2 rounded-md ml-0 md:ml-4" to="/register">
            Get Started
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header