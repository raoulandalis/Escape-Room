import React, { useState } from 'react';
import Hero from '../assets/escape-main-tp.png';
import WelcomeBackground from '../assets/welcome-full-bg.png';

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'Where... am I?',
    'Who put me here...',
    'I need to find a way out',
    'Over there... a note',
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <main className='w-full min-h-screen relative' style={{ backgroundImage: `url(${WelcomeBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='min-h-screen flex items-center justify-center pl-96 pr-20 border'>
        <div key={currentSlide} className='flex relative text-white text-center ml-10 mb-64 px-10 py-10'>
          <div key={currentSlide} className='flex text-4xl whitespace-nowrap overflow-hidden animate-type gap-4'>
            {slides[currentSlide]}
            <div className='cursor-pointer text-sm flex flex-col justify-end mt-4' onClick={nextSlide}>➤</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
