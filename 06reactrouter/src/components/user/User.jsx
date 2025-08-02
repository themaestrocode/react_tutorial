import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const { userId } = useParams()

  return (
    <div className='text-orange-700 p-4 font-bold text-4xl text-center'>
      User: {userId ? userId : 'No ID provided'}
    </div>
  )
}

export default User