import React from 'react'

function Card({name = "Developer", post = "Not Assigned Yet", country = "Unknown"}) {

  return (
    <div className='pb-1'>
      <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <img
        className="size-48 shadow-xl rounded-md"
        src="https://images.unsplash.com/photo-1753258530005-e8ce5443347b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="some photos" />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='p-2 text-lg font-medium'>Minim veniam anim exercitation cillum culpa sunt sint amet veniam.</p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>
              {name}
            </div>
            <div className='text-slate-700 dark:text-slate-500'>
              {post}, {country}
            </div>
          </figcaption>
        </div>

      </figure>
    </div>
  )
}

export default Card