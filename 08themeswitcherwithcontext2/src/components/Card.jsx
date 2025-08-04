import React from 'react'

function Card() {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md text-center mx-auto my-4 max-w-sm border-2 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-none'>
      <div>
        <img src="https://avatars.githubusercontent.com/u/122830011?v=4" alt="github_photo" className='w-70 h-70 rounded-sm mx-auto' />
      </div>
      <div>
        <h2 className='text-2xl font-bold mt-4'>The Maestro Code</h2>
        <p className='text-gray-700 mt-2 dark:text-gray-300'>A passionate developer sharing knowledge and tutorials.</p>
        <p className='text-gray-700 mt-1 dark:text-gray-300'>Follow me on GitHub for more tutorials and projects.</p>
        <a href="https://github.com/themaestrocode" target="_blank" rel="noopener noreferrer" className='text-blue-500 underline mt-4 inline-block'>Visit GitHub Profile</a>
      </div>
    </div>
  )
}

export default Card