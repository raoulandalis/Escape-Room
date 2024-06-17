import React from 'react'
import Cave from '../assets/cave.png'
import { NavLink } from 'react-router-dom'

const Landing = () => {

  return (
    <main className='w-full h-screen relative bg-cover bg-center' style={{ backgroundImage: `url(${Cave})` }}>
      <section className='flex justify-center py-48 text-white'>
        <div className='flex flex-col items-center text-8xl italic'>
          <h1>Untitled</h1>
          <h1 className='pb-16'>Escape Room</h1>
          <NavLink to='/welcome'>
          <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-2xl px-20 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Start</button>
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Landing
