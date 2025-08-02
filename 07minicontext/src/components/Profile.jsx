import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)

  return (
    <div>
      {user ? 
        <h2>Welcome, {user.username}!</h2> :
        <h2>Please log in to see your profile.</h2>
      }
    </div>
  )
}

export default Profile