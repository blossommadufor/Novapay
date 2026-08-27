import React from 'react'

const teamMembers = [
  {
    name: "Flourish Madufor",
    role: "Chief Executive Officer",
    img: "/assets/user5.jpg",
  },
  {
    name: "Chris Madufor",
    role: "Head Of Customer Service",
    img: "/assets/user2.jpeg",
  },
  {
    name: "Blossom Madufor",
    role: "Chief Financial Officer",
    img: "/assets/user6.jpeg",
  },
  {
    name: "Raphael Madufor",
    role: "Chief Technology Officer",
    img: "/assets/user3.jpg",
  },
];

const Team = () => {
  return (
    <div className='px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-gray-100'>
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 pb-8 sm:pb-12 text-center">
        <p 
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
          style={{ 
            backgroundColor: 'rgba(235, 94, 40, 0.1)', 
            color: '#eb5e28', 
            border: '1px solid rgba(235, 94, 40, 0.2)' 
          }}
        >
          OUR TEAM
        </p>
        <h2 className="font-semibold text-secondary text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Meet The Team Behind NovaPay's Innovation
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((item, index) => (
          <div 
            key={index} 
            className="border-b-2 border-orange-200 flex flex-col items-center pb-4 text-center transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="h-72 sm:h-80 w-full max-w-[240px]">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </div>
            <div className="pt-4 flex flex-col gap-1 items-center">
              <p className="font-bold text-tertiary text-base sm:text-lg">{item.name}</p>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-500">{item.role}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team