import React, {useState} from 'react'
import Hero from '../assets/escape-main-tp.png'
import InsideCave from '../assets/inside-cave.jpg'

const Welcome = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'Where... am I?',
    'Who put me here...',
    'I need to find a way out',
    'Over there... a note'
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }


  return (
    <main className='w-full h-screen relative' style={{backgroundImage: `url(${InsideCave})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <section className='h-screen flex pl-96'>
        <img src={Hero} className='h-3/4 w-1/2 mt-56'/>
        <div className='relative text-white mt-52 inline-flex h-32 px-10 py-10 -ml-32 italic'>
          <div key={currentSlide} className='flex absolute text-4xl whitespace-nowrap overflow-hidden animate-type gap-4'>
            {slides[currentSlide]}
            <div className='cursor-pointer text-sm flex flex-col justify-end' onClick={nextSlide}>➤</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Welcome
