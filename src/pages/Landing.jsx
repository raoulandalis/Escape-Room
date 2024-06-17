import React from 'react'
import Cave from '../assets/cave.png'

const Landing = () => {

  return (
    <main className='w-full h-screen relative bg-cover bg-center' style={{ backgroundImage: `url(${Cave})` }}>
      <section className='flex justify-center py-48 text-white'>
        <div className='flex flex-col items-center text-8xl italic'>
          <h1>Untitled</h1>
          <h1>Escape Room</h1>
        </div>
      </section>
    </main>
  )
}

export default Landing
