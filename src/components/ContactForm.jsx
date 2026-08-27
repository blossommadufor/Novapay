import {
  faBook,
  faCar,
  faDoorOpen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-between gap-20 py-20 px-16 ">
      <div className="w-3/6">
        <h2 className="pb-7 font-semibold text-secondary text-3xl">
          Have Questions? We're <br/> Here To Help
        </h2>
        <div className="grid grid-cols-2 gap-6 pb-8">
          <div>
            <h3 className="text-gray-400 pb-2">Email</h3>
            <p className="text-sm text-tertiary">info@novapay.com</p>
          </div>
          <div>
            <h3 className="text-gray-400 pb-2">Call Us</h3>
            <p className="text-sm text-tertiary">+1 234 567 8901</p>
          </div>
          <div>
            <h3 className="text-gray-400 pb-2">Location</h3>
            <p className="text-sm text-tertiary">123 Innovation Street, Suite 600 Fintech City, State, 23456</p>
          </div>
          <div>
            <h3 className="text-gray-400 pb-2">Follow Us</h3>
            <div className="flex gap-3 text-secondary">
              <div className="h-7 w-7 bg-orange-100 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faHeart} className="text-xs"/>
              </div>
              <div className="h-7 w-7 bg-orange-100 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faCar} className="text-xs"/>
              </div>
              <div className="h-7 w-7 bg-orange-100 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faBook} className="text-xs"/>
              </div>
              <div className="h-7 w-7 bg-orange-100 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faDoorOpen} className="text-xs"/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10598.509081308575!2d7.449103465941024!3d9.040361456893041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b45db480bf9%3A0x552450789a5905e5!2sMagic%20Land!5e0!3m2!1sen!2sng!4v1778490603169!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border:0}}
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location" 
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-3/6">
        <form className="shadow-xl rounded-xl py-8 px-10 flex flex-col gap-5">
          <div className="flex flex-col border-b border-secondary border-dotted pb-10">
            <label className=' text-gray-600 pb-2 font-semibold'>Full Name</label>
            <input className='bg-gray-0 rounded-2xl border border-gray-200 outline-none text-sm p-2' placeholder="Enter your name" />
          </div>
          <div className="flex flex-col border-b border-secondary border-dotted pb-10">
            <label className=' text-gray-600 pb-2 font-semibold'>Email Address</label>
            <input className='bg-gray-0 rounded-2xl border border-gray-200 outline-none text-sm p-2' placeholder="Enter your email" />
          </div>
          <div  className="flex flex-col border-b border-secondary border-dotted pb-10">
            <label className=' text-gray-600 pb-2 font-semibold'>Phone Number</label>
            <input className='bg-gray-0 rounded-2xl border border-gray-200 outline-none text-sm p-2' placeholder="Enter your phone number" />
          </div>
          <div className="flex flex-col border-b border-secondary border-dotted pb-10">
            <label className=' text-gray-600 pb-2 font-semibold'>Subject</label>
            <input className='bg-gray-0 rounded-2xl border border-gray-200 outline-none text-sm p-2' placeholder="" />
          </div>
          <div className="flex flex-col">
            <label className='text-gray-600 pb-2 font-semibold'>Message</label>
            <textarea placeholder="Enter your message" className='bg-gray-0 rounded-2xl border border-gray-200 outline-none text-sm p-2'/>
          </div>

         <div className="pt-5">
             <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="hover:bg-gray-200 text-gray-50 text-xs uppercase py-3 cursor-pointer bg-secondary hover:text-secondary font-semibold hover:scale-105 w-full mt-5 "
          >
            Get Started Today
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
