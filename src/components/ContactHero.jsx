import React from "react";

const ContactHero = () => {
  return (
    <div className="bg-tertiary bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full pt-20  text-gray-200 ">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center px-16 gap-10">
        <div className="flex flex-col gap-8 items-center pt-10">
          <p className=" text-whitee text-center py-1 px-4 rounded-3xl text-xs bg-white/20 backdrop-blur-xs">
            Finance Made Simple
          </p>
          <h1 className="text-6xl text-center font-bold leading-tight">
            We'd Love To <br />  Hear From You
          </h1>
          <p className="text-secondary">
            Reach out to us with your questions, feedback, or partnership inquiries
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
