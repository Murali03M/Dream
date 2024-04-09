import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
          url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/ctm_thumb.png',
          heading :'Cyber Tech Mastery',
          content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
    },
    {
      url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/iot_thumb.png',
      heading :'Cyber Tech Mastery',
      content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
},
    {
      url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/lahtp_legacy_thumb.png',
      heading :'IOT Tech Mastery',
      content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
},

    {
      url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/lahtp_adv_thumb.png',
      heading :'LEGACY',
      content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
},
    {
      url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/python_cli_thumb.png',
      heading :'Cyber Tech Mastery',
      content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
      },
      {
        url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/python_cli_thumb.png',
        heading :'React Tech Mastery',
        content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
      },
      {
        url: 'https://s3.selfmade.ninja/portal-assets/SNA%20Thumbnail/python_cli_thumb.png',
        heading :'PYTHON CLI',
        content :'The Cyber Tech Mastery bundle includes three courses, LAHTP Legacy, LAHTP Advanced, and Advanced Web Hacking, providing a pathway to cybersecurity mastery. This bundle enhances your ethical hacking programming skills, delves into security tool creation, and advances your web application security expertise. Through theory and hands-on exercises, you ll learn to identify, exploit, and mitigate security vulnerabilities, becoming a key asset in the cybersecurity domain.'
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

    return (
        <div className=' bg-zinc-900 h-screen'>
            <h1 className='text-3xl text-white ml-10'>In-demand <span className="text-orange-500">Courses</span></h1>
    <div className='max-w-[1200px] h-[680px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                </div>
                <h1 className='text-4xl items-center flex justify-center mt-4 text-orange-500'>{slides[currentIndex].heading}</h1>
                <p className='text-xl text-white '>{slides[currentIndex].content}</p>
                
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
            </div>
            </div>
  );
}

export default Slider;