import React, {useState} from 'react'
import Hero from '../assets/escape-main-tp.png'

const Welcome = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'Hello from slide1',
    'Hello from slide2',
    'Hello from slide3',
    'Hello from slide4'
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }


  return (
    <main className='w-full h-screen relative border'>
      <section className='h-screen flex pl-96 border border-green-500'>
        <img src={Hero} className='h-3/4 w-1/2 mt-56 border border-blue-500' />
        <div className='relative text-white mt-52 inline-flex h-32 px-10 py-10'>
          <div key={currentSlide} className='flex absolute text-4xl whitespace-nowrap overflow-hidden animate-type'>
            {slides[currentSlide]}
            <div className='cursor-pointer' onClick={nextSlide}>➡️</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Welcome
