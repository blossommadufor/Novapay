import React from 'react'

const Platform = () => {
  return (
    <div className='bg-tertiary py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16'>
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 text-center">
        <p className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
           style={{ backgroundColor: 'rgba(235, 94, 40, 0.1)', color: '#eb5e28', border: '1px solid rgba(235, 94, 40, 0.2)' }}>
          Best Transaction Platform
        </p>
        <h2 className="text-center font-bold text-light text-3xl sm:text-4xl md:text-5xl leading-tight">
          Ready To Take Control
          <br className="hidden sm:inline" /> Of Your Finances?
        </h2>
        <p className='text-gray-300 text-sm sm:text-base max-w-md mx-auto'>
          Sign up today and simplify your financial journey
        </p>
        <button
          style={{
            clipPath:
              "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
          }}
          className="bg-secondary text-whitee text-xs tracking-widest uppercase px-7 sm:px-9 py-3 cursor-pointer hover:bg-whitee hover:text-secondary font-semibold hover:scale-105 transition-all mt-2"
        >
          Get Started Today
        </button>
      </div>
    </div>
  )
}

export default Platform