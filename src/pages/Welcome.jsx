import React, { useState } from 'react';
import { useModal, Modal } from '../context/Modal';
import WelcomeBackground from '../assets/welcome-full-bg.png';
import BlankNote from '../assets/note-blank.png';

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setModalContent, closeModal } = useModal();

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

  const openModal = () => {
    console.log('OPEN MODAL CLICKED');
    setModalContent(
      <div>
        <img src={BlankNote}></img>
        <button onClick={closeModal}>Close</button>
      </div>
    );
  };

  return (
    <main className='w-full min-h-screen relative' style={{ backgroundImage: `url(${WelcomeBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='min-h-screen flex items-center justify-center pl-96 pr-20'>
        <div key={currentSlide} className='flex relative text-white text-center ml-10 mb-64 px-10 py-10'>
          <div key={currentSlide} className='flex text-4xl whitespace-nowrap overflow-hidden animate-type gap-4'>
            {slides[currentSlide]}
            <div className='cursor-pointer text-sm flex flex-col justify-end mt-4' onClick={nextSlide}>➤</div>
          </div>
        </div>
      </section>
      {currentSlide === slides.length - 1 ? (
        <img
          src={BlankNote}
          className='absolute bottom-0 right-0 mb-10 mr-80 h-32 cursor-pointer'
          onClick={openModal}
        />
      ) : null}
      <Modal />
    </main>
  );
};

export default Welcome;
