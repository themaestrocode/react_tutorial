import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

  const data = useLoaderData()

  // const [data, setData] = React.useState(null);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/themaestrocode')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching GitHub data:', error)
  //       alert('Error fetching GitHub data. Please try again later.')
  //   });
  // }, []);

  return (
    <div className='text-center bg-gray-700 text-white p-6 font-bold text-4xl'>
      <p>Github</p>
      {data ? (
        <div className='mt-4'>
          <img src={data.avatar_url} alt="Avatar" className='w-32 h-32 rounded-full mx-auto' />
          <h2 className='text-2xl mt-4'>{data.name}</h2>
          <p className='text-lg text-gray-300'>{data.bio}</p>
          <p className='text-lg mt-2'>Followers: {data.followers}</p>
          <p className='text-lg'>Following: {data.following}</p>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer" className='text-orange-700 underline mt-4 block'>View Profile</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <p className='mt-4'>This is a simple GitHub profile viewer.</p>
      <p className='text-sm text-gray-400'>Data fetched from GitHub API.</p>
      <p className='text-sm text-gray-400'>Make sure to handle API rate limits in production.</p>
      <p className='text-sm text-gray-400'>For more information, visit the <a href="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer" className='text-orange-700 underline'>GitHub API documentation</a>.</p>
      <p className='text-sm text-gray-400'>This component is a part of the React Router tutorial.</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/themaestrocode');
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}
