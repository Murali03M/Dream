import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className='bg-zinc-900 h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-between w-full p-10'>
        {/* Left Section */}
        <div className='md:flex flex-col justify-center text-center ml-40 block'>
          <img className="opacity-25 " src="https://selfmade.ninja/assets/icons/curly-braces.png" alt="curly-braces" width={'70px'} height={'50px'} />
          <img className="opacity-25 absolute top-96 left-9" src="https://selfmade.ninja/assets/icons/html-tag.png" alt="curly-braces" width={'70px'} height={'50px'} />
          <img className="opacity-25 absolute bottom-1/3  left-1/3" src="https://selfmade.ninja/assets/icons/html-tag.png" alt="curly-braces" width={'70px'} height={'50px'} />
          <div className='text-white text-4xl mb-4 pl-10'>
            <span className='mb-4 block'>Master</span>
            <span className='bg-orange-500 text-zinc-900 px-2 mb-4 block'>THE ART OF TECH</span>
            <span className='mb-4 block'>Be A</span>
            <span className='bg-orange-500 text-zinc-900 px-2 block'>Selfmade Ninja</span>
          </div>
          <div className='flex justify-center items-center'>
            <button className='text-orange-500 border-solid border-2 border-orange-500 text-xl max-w-max p-2 rounded-xl'>
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='bg-zinc-900 h-screen md:flex flex-col justify-center items-center mr-36 hidden'>
          <div className='relative'>
                      <img src='https://selfmade.ninja/assets/SNA-hero.png' height={'300px'} width={'300px'} alt='Selfmade Ninja' className='selfmade-ninja' />
                      <img src='https://selfmade.ninja/assets/iot.svg' alt='IoT' className='side-image top-left' />
        <img src='https://selfmade.ninja/assets/java.svg' alt='Java' className='side-image top-right' />
        <img src='https://selfmade.ninja/assets/hackerhat.svg' alt='Hacker Hat' className='side-image bottom-left' />
        <img src='https://selfmade.ninja/assets/coding.svg' alt='Coding' className='side-image bottom-right' />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
