import React from 'react'
import phone from "../../public/assets/phone4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Redefine = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-tertiary px-6 sm:px-10 md:px-16 gap-8 lg:gap-7 pt-12 md:pt-16 pb-12 lg:pb-0">
        <div className="text-left">
          <h2 className="font-semibold text-gray-100 text-3xl sm:text-4xl leading-tight">
            Let's Redefine Finance Together
          </h2>
          <p className="py-4 text-gray-200 text-sm sm:text-base leading-relaxed">
            Connect with us to start your financial journey today
          </p>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="hover:bg-gray-200 hover:text-gray-800 text-xs uppercase py-3 cursor-pointer text-gray-100 bg-secondary font-semibold hover:scale-105 transition-all px-6"
          >
            Contact Us
          </button>
        </div>

        <div className="flex justify-center items-end order-last lg:order-none">
          <img 
            src={phone} 
            alt="App preview" 
            className="w-full max-w-xs sm:max-w-sm lg:max-w-none h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 lg:pl-6 text-gray-100">
          <div>
            <h3 className="font-bold pb-2 text-lg text-white">Office Address</h3>
            <p className="text-gray-300 text-sm leading-relaxed capitalize">
              123 November Street, Suite 600, Fintech City, State, 54322
            </p>
          </div>
          <div>
            <h3 className="font-bold pb-2 text-lg text-white">Contact Info</h3>
            <p className="pb-2 text-sm text-gray-300 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-secondary shrink-0" />
              <a href="mailto:support@novapay.com" className="hover:underline">
                support@novapay.com
              </a>
            </p>
            <p className="text-sm text-gray-300 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-secondary shrink-0" />
              <a href="tel:+12345678901" className="hover:underline">
                +1-234-567-8901
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Redefine