import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 py-12 lg:py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="pb-6 font-semibold text-secondary text-2xl sm:text-3xl leading-snug">
            Have Questions? We're <br className="hidden sm:inline" /> Here To Help
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
            <div>
              <h3 className="text-gray-400 text-sm pb-1 font-medium">Email</h3>
              <p className="text-sm font-semibold text-tertiary">info@novapay.com</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm pb-1 font-medium">Call Us</h3>
              <p className="text-sm font-semibold text-tertiary">+1 234 567 8901</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm pb-1 font-medium">Location</h3>
              <p className="text-sm font-semibold text-tertiary">
                123 Innovation Street, Suite 600 Fintech City, State, 23456
              </p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm pb-1 font-medium">Follow Us</h3>
              <div className="flex gap-3 text-secondary pt-1">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="h-8 w-8 bg-orange-100 rounded-full flex justify-center items-center hover:bg-secondary hover:text-white transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-xs" />
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="h-8 w-8 bg-orange-100 rounded-full flex justify-center items-center hover:bg-secondary hover:text-white transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-xs" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="h-8 w-8 bg-orange-100 rounded-full flex justify-center items-center hover:bg-secondary hover:text-white transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xs" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="h-8 w-8 bg-orange-100 rounded-full flex justify-center items-center hover:bg-secondary hover:text-white transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-100 min-h-[280px] sm:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10598.509081308575!2d7.449103465941024!3d9.040361456893041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b45db480bf9%3A0x552450789a5905e5!2sMagic%20Land!5e0!3m2!1sen!2sng!4v1778490603169!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[280px] sm:min-h-[350px] border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <form className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 flex flex-col gap-6 border border-gray-50">
          <div className="flex flex-col border-b border-secondary/30 border-dotted pb-6">
            <label className="text-gray-700 pb-2 font-semibold text-sm">Full Name</label>
            <input
              type="text"
              className="bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm p-3 focus:border-secondary focus:bg-white transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col border-b border-secondary/30 border-dotted pb-6">
            <label className="text-gray-700 pb-2 font-semibold text-sm">Email Address</label>
            <input
              type="email"
              className="bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm p-3 focus:border-secondary focus:bg-white transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col border-b border-secondary/30 border-dotted pb-6">
            <label className="text-gray-700 pb-2 font-semibold text-sm">Phone Number</label>
            <input
              type="tel"
              className="bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm p-3 focus:border-secondary focus:bg-white transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col border-b border-secondary/30 border-dotted pb-6">
            <label className="text-gray-700 pb-2 font-semibold text-sm">Subject</label>
            <input
              type="text"
              className="bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm p-3 focus:border-secondary focus:bg-white transition-all"
              placeholder="What is this regarding?"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 pb-2 font-semibold text-sm">Message</label>
            <textarea
              rows={4}
              placeholder="Enter your message"
              className="bg-gray-50 rounded-xl border border-gray-200 outline-none text-sm p-3 focus:border-secondary focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              style={{
                clipPath:
                  "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
              className="bg-secondary text-white hover:bg-tertiary text-xs uppercase py-3.5 px-6 cursor-pointer font-bold tracking-wider transition-all duration-200 w-full rounded-sm"
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