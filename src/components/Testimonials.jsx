import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user1 from "../../public/assets/user1.jpeg";
import React from "react";

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

const Testimonials = () => {
  return (
    <div className="py-12 md:py-20 px-6 sm:px-10 md:px-16">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-3/6">
          <p
            className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(235, 94, 40, 0.1)",
              color: "#eb5e28",
              border: "1px solid rgba(235, 94, 40, 0.2)",
            }}
          >
            TESTIMONIALS
          </p>
          <h2 className="font-semibold text-secondary text-3xl sm:text-4xl">
            The Stories Trusted
            <br className="hidden sm:inline" /> By Thousands
          </h2>
        </div>
        
        <div className="w-full lg:w-3/6">
          <p className="pb-4 border-b border-gray-200 text-gray-500 text-sm sm:text-base leading-relaxed">
            NovaPay has revolutionized the way I manage my finances. The
            analytics are spot on! I can track every penny with ease, and it's
            incredibly user-friendly. Their tools have given me better control
            over my budgeting.
          </p>
          <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="h-14 w-14 rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
                <img
                  src={user1}
                  alt="Blossom Madufor"
                  className="h-12 w-12 object-cover rounded-full"
                />
              </div>
              <p className="font-bold text-gray-500 text-sm sm:text-base">
                Blossom Madufor
              </p>
            </div>
            <div className="flex gap-3 sm:gap-5">
              <button
                type="button"
                aria-label="Previous testimonial"
                style={{
                  backgroundColor: "rgba(235, 94, 40, 0.1)",
                  color: "#eb5e28",
                }}
                className="rounded-full h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center border border-orange-300"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs sm:text-sm text-gray-400" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                style={{
                  backgroundColor: "rgba(235, 94, 40, 0.1)",
                  color: "#eb5e28",
                }}
                className="border border-orange-300 rounded-full h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs sm:text-sm text-gray-400"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-gray-200 py-8 gap-6 sm:gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-secondary font-bold text-2xl sm:text-3xl p-0">
                {item.stat}
              </h3>
              <p className="text-gray-400 pt-1 text-xs sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;