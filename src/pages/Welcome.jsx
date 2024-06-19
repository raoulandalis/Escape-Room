import React from 'react'
import Hero from '../assets/escape-main.png'

const Welcome = () => {
  return (
    <main className='w-full h-screen relative border border-red-500'>
      <section className='h-screen flex border border-green-500'>
        <img src={Hero} className='h-3/4 w-1/3 mt-56 border border-blue-500'/>
        <div className='text-white border border-purple-500 flex flex-col justify-center'>
          <div className='text-4xl'>Hello</div>
        </div>
      </section>
    </main>
  )
}

export default Welcome
