import React from "react";
import feature from "../../public/assets/feature1.jpg";
import feature1 from "../../public/assets/feature2.jpg";
import feature3 from "../../public/assets/feature3.jpg";
import logo from "../../public/assets/logo.png";
import dollar from "../../public/assets/dollar.png";

// const features = [
//   {
//     feature: "Advanced Security",
//     text: "Multi-layer encryption to safeguard your data",
//     img: "/assets/feature3.jpg",
//   },

//   {
//     feature: "Real-Time Analytics",
//     text: "Gain instant insight into your finances data",
//     img: "/assets/logo.png",
//   },

//   {
//     feature: "Global Accessibility",
//     text: "Manage your finances anytime, anywhere",
//     img: "/assets/dollar.png",
//   },
// ];

const Features = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 bg-light">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 pb-8 sm:pb-10">
        <p
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
          style={{
            backgroundColor: "rgba(235, 94, 40, 0.1)",
            color: "#eb5e28",
            border: "1px solid rgba(235, 94, 40, 0.2)",
          }}
        >
          FEATURES
        </p>
        <h2 className="text-center font-semibold text-secondary text-2xl sm:text-3xl md:text-4xl leading-snug">
          Cutting Edge Features Designed <br className="hidden sm:inline" /> For
          Your Financial Success
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-white shadow-2xl py-5 px-4 flex flex-col justify-between gap-3 text-center rounded-xl">
          <div>
            <h3 className="font-semibold text-secondary text-lg">
              Advanced Security
            </h3>
            <p className="text-sm text-gray-600 pb-2">
              Multi-layer encryption to safeguard your data
            </p>
          </div>
          <div className="mx-2 sm:mx-5 shadow-2xl h-44 sm:h-48 rounded-2xl overflow-hidden">
            <img
              src={feature3}
              alt="Advanced Security"
              className="w-full object-contain h-full rounded-2xl"
            />
          </div>
        </div>

        <div className="bg-white shadow-2xl py-5 px-4 flex flex-col justify-between gap-3 text-center rounded-xl">
          <div className="mx-2 sm:mx-5 shadow-xl h-44 sm:h-48 rounded-2xl overflow-hidden">
            <img
              src={logo}
              alt="Real-Time Analytics"
              className="w-full object-contain h-full rounded-2xl"
            />
          </div>
          <div>
            <h3 className="font-semibold text-secondary text-lg">
              Real-Time Analytics
            </h3>
            <p className="text-sm text-gray-600 pb-2">
              Gain instant insight into your finances data
            </p>
          </div>
        </div>

        <div className="bg-white shadow-2xl py-5 px-4 flex flex-col justify-between gap-3 text-center rounded-xl sm:col-span-2 lg:col-span-1">
          <div>
            <h3 className="font-semibold text-secondary text-lg">
              Global Accessibility
            </h3>
            <p className="text-sm text-gray-600 pb-2">
              Manage your finances anytime, anywhere
            </p>
          </div>
          <div className="mx-2 sm:mx-5 shadow-2xl h-44 sm:h-48 rounded-2xl overflow-hidden">
            <img
              src={dollar}
              alt="Global Accessibility"
              className="w-full object-contain h-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="pt-10 sm:pt-16 flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 shadow-2xl rounded-2xl overflow-hidden">
          <img
            src={feature}
            alt="Feature Showcase 1"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 shadow-2xl rounded-2xl overflow-hidden">
          <img
            src={feature1}
            alt="Feature Showcase 2"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;