import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const values = [
  {
    value: 'Innovation',
    text: 'We continuously create cutting-edge financial tools.' 
  },
  {
    value: 'Integrity',
    text: 'Transparency and trust are at the core of everything we do.' 
  },
  {
    value: 'Customer-Centricity',
    text: "Our users' success is our top priority." 
  },
  {
    value: 'Security',
    text: 'Ensuring the safety of your data and transactions.' 
  }
]

const Value = () => {
  return (
    <div className='px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-tertiary'>
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 pb-8 sm:pb-10">
        <p className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
           style={{ backgroundColor: 'rgba(235, 94, 40, 0.1)', color: '#eb5e28', border: '1px solid rgba(235, 94, 40, 0.2)' }}>
          OUR CORE VALUES
        </p>
        <h2 className="text-center font-semibold text-gray-400 text-3xl sm:text-4xl md:text-5xl">
          The Foundation Of Payment
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7'>
        {values.map((item, index) => (
          <div key={index} className='border-2 border-secondary p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-orange-400 transition-colors'>
            <div>
              <div className='bg-orange-100 text-secondary rounded-full flex justify-center items-center w-10 h-10 shrink-0'>
                <FontAwesomeIcon icon={faHeart}/>
              </div>
              <h3 className='pt-5 text-lg font-bold text-gray-300'>{item.value}</h3>
              <p className='pt-3 text-sm text-gray-100 leading-relaxed'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Value