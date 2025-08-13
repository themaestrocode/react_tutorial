import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'

function LogoutButton() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        alert("Logout failed. Please try again.");
      });
  }

  return (
    <button
    onClick={logoutHandler}
    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300'
    >
      Logout  
    </button>
  )
}

export default LogoutButton