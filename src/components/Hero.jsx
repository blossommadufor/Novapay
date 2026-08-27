import React, { useEffect } from "react";
import phone from "../../public/assets/phone2.png";

function Clock() {
  useEffect(() => {
    console.log("I just appeared on screen!");

    return () => {
      console.log("I'm about to disappear!"); 
    };
  }, []); 

  return <h1>Clock</h1>;
}

export function HeaderProps(props) {
  return (
    <div>
      <h2 className="text-red-500 text-4xl font-bold italic">{props.name}</h2>
    </div>
  );
}

function Welcome() {
  const name = "Blossom";
  return <h1>Welcome, {name}!</h1>;
}

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-tertiary bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat pt-20 text-gray-200">
      <div className="relative md:absolute inset-0 bg-black/30 backdrop-blur-xs flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 md:py-0 gap-10">
        
        <div className="flex flex-col gap-6 sm:gap-8 items-center md:items-start text-center md:text-left pt-6 md:pt-10 w-full md:w-1/2">
          <p className="text-whitee text-center py-1 px-4 rounded-3xl text-xs bg-white/20 backdrop-blur-xs w-fit">
            Finance Made Simple
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Effortless Financial Solutions For A Digital World
          </h1>
          <p className="text-sm sm:text-base max-w-lg">
            The future of fintech at your fingertips | Secure, Fast and Seamless
          </p>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="bg-secondary text-whitee text-xs tracking-widest uppercase px-9 py-3 cursor-pointer hover:bg-whitee hover:text-secondary font-semibold hover:scale-110 transition-all duration-200"
          >
            Get Started Today
          </button>
        </div>

        <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[550px] flex justify-center items-center">
          <img
            src={phone}
            alt="Mobile App Interface"
            className="h-full object-contain max-w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;