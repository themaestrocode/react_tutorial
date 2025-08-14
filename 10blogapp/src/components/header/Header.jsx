import React, { act } from 'react'
import {Container} from '../containers/Container'
import {Logo} from '../Logo'
import {LogoutButton} from './LogoutButton'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus // Only show Login if not authenticated
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]

  return (
    <header className='bg-white shadow-md py-4' >
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='mr-4'>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item) => (
                item.active && (
                  <li key={item.name} className='ml-4'>
                    <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900'
                    >
                      {item.name}
                    </button>
                  </li>
                )
              ))
            }

            {/* Show Logout button only if authenticated */}
            {authStatus && (
              <li className='ml-4'>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header