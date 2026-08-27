import React from "react";

const service = [
  {
    Service: "Digital Payments",
    text: "Secure and fast online payment for businesses and individuals",
    img: "/assets/service1.jpg",
  },
  {
    Service: "Balance Tracking",
    text: "Smart tools to monitor and manage your expenses effortlessly",
    img: "/assets/service2.jpg",
  },
  {
    Service: "Loan Management",
    text: "Streamlined loans with flexible payment options",
    img: "/assets/service.jpg",
  },
];

const Services = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 pb-8 sm:pb-10">
        <p
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
          style={{
            backgroundColor: "rgba(235, 94, 40, 0.1)",
            color: "#eb5e28",
            border: "1px solid rgba(235, 94, 40, 0.2)",
          }}
        >
          SERVICES
        </p>
        <h2 className="text-center font-semibold text-secondary text-2xl sm:text-3xl md:text-4xl leading-snug">
          Transforming Financial <br className="hidden sm:inline" /> Experiences
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {service.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-2xl py-6 px-4 flex flex-col justify-between gap-3 text-center rounded-xl transition-transform hover:-translate-y-1 duration-200"
          >
            <div>
              <h3 className="font-semibold text-tertiary text-lg sm:text-xl">
                {item.Service}
              </h3>
              <p className="text-sm text-gray-600 pb-4 pt-1 max-w-xs mx-auto">
                {item.text}
              </p>
            </div>
            <div className="mx-2 sm:mx-5 shadow-2xl overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.Service}
                className="w-full h-48 sm:h-52 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;