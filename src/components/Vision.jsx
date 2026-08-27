import React from 'react'
import phone from '../../public/assets/phone6.png'

const Vision = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-gray-50 gap-10 md:gap-16 lg:gap-20'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <img 
          src={phone} 
          alt="NovaPay Mobile App Vision" 
          className='w-full max-w-md md:max-w-none h-auto object-cover rounded-3xl shadow-sm'
        />
      </div>

      <div className="w-full md:w-1/2">
        <p
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
          style={{
            backgroundColor: "rgba(235, 94, 40, 0.1)",
            color: "#eb5e28",
            border: "1px solid rgba(235, 94, 40, 0.2)",
          }}
        >
          VISION
        </p>
        <h2 className="font-semibold text-secondary text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Our Vision Is To Be The Leading Global Fintech Solution
        </h2>
        <p className='text-gray-500 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed'>
          By empowering individuals and businesses to achieve financial clarity and success, we strive to foster a world where managing money is simple, secure, and accessible to all.
        </p>
      </div>
    </div>
  )
}

export default Vision