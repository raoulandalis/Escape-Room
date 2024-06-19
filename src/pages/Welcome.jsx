import React from 'react'
import Hero from '../assets/escape-main-tp.png'

const Welcome = () => {
  return (
    <main className='w-full h-screen relative border'>
      <section className='h-screen flex justify-center border border-green-500'>
        <img src={Hero} className='h-3/4 w-1/3 mt-56 border border-blue-500' />
        <div className='relative text-white mt-52 inline-flex h-32 px-10 py-10'>
          <div className='absolute text-4xl whitespace-nowrap overflow-hidden animate-type'>Where... am I?</div>
        </div>
      </section>
    </main>
  )
}

export default Welcome
