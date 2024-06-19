import React from 'react'
import Cave from '../assets/cave-entrance-2.jpg'
import { NavLink } from 'react-router-dom'

const Landing = () => {

  return (
    <main className='w-full h-screen relative bg-center bg-cover' style={{ backgroundImage: `url(${Cave})`, backgroundRepeat: 'no-repeat'}}>
      <section className='flex justify-center py-48 text-white'>
        <div className='flex flex-col items-center italic'>
          <h1 className='text-cyan-400 text-8xl'>Amensia</h1>
          <h1 className='pb-16 text-6xl'>Escape Room</h1>
          <NavLink to='/welcome'>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-2xl px-20 py-2.5 text-center me-2 mb-2">Enter</button>
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Landing
