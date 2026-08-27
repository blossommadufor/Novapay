import React from "react";
import mission from "../../public/assets/shield.png";

const stats = [
  {
    stat: "99%",
    text: "Transaction Success Rate",
  },
  {
    stat: "$12,000+",
    text: "Average User Savings",
  },
  {
    stat: "85%",
    text: "Improved Financial Growth",
  },
  {
    stat: "50K+",
    text: "Active Users Worldwide",
  },
];

const Mission = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 lg:gap-16">
        <div className="w-full md:w-1/2">
          <p
            className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(235, 94, 40, 0.1)",
              color: "#eb5e28",
              border: "1px solid rgba(235, 94, 40, 0.2)",
            }}
          >
            MISSION
          </p>
          <h2 className="font-semibold text-secondary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Our Mission Is To Simplify Finance With Secure Technology
          </h2>
          <p className="text-gray-500 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
            We aim to build tools that enable users to gain clarity and control
            over finances while promoting trust and innovation. By cultivating a
            customer-centric approach, we ensure that every individual and
            business can achieve long-term financial stability and success.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-orange-200 rounded-2xl p-4 sm:p-6 flex justify-center items-center">
          <img 
            src={mission} 
            alt="NovaPay Mission Shield" 
            className="w-full max-w-md md:max-w-none h-auto object-contain rounded-xl" 
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-200 py-6 sm:py-8 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h2 className="text-secondary font-bold text-2xl sm:text-3xl md:text-4xl p-0">
                {item.stat}
              </h2>
              <p className="text-gray-400 pt-1 text-xs sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;