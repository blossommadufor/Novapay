import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex lg:justify-start items-center">
          <div className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40">
            <img src={logo} alt="NovaPay Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div>
          <h3 className="text-secondary font-bold pb-3 sm:pb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-secondary font-bold pb-3 sm:pb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#help" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-secondary font-bold pb-3 sm:pb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-sm text-gray-500 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <h3 className="text-secondary font-bold pb-3 sm:pb-4">Subscribe for Updates</h3>
          <p className="pb-4 text-sm text-gray-500">
            Get the latest news and updates directly in your inbox
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-1">
            <div className="border rounded-2xl border-gray-300 py-[6px] px-3 flex items-center justify-between gap-2 focus-within:border-secondary transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 shrink-0" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full text-xs text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
              />
              <button 
                type="submit" 
                className="bg-tertiary px-3 py-1 rounded-2xl text-xs sm:text-sm text-white hover:opacity-90 transition-opacity shrink-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;