import { faCheck, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pricing = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-orange-100">
      <div className="flex flex-col items-center justify-center gap-5 pb-10">
        <p
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
          style={{
            backgroundColor: "rgba(235, 94, 40, 0.1)",
            color: "#eb5e28",
            border: "1px solid rgba(235, 94, 40, 0.2)",
          }}
        >
          PRICING
        </p>
        <h2 className="text-center font-semibold text-gray-500 text-3xl sm:text-4xl">
          Transforming Financial <br className="hidden sm:inline" /> Experiences
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      
        {/* Starter Plan */}
        <div className="bg-gray-50 px-5 py-5 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <p className="text-gray-500 font-semibold text-sm pb-4 border-b border-orange-200">
              Starter Plan
            </p>
            <div className="mt-6 flex gap-2 items-end">
              <h3 className="text-4xl text-secondary font-bold">$150</h3>
              <p className="text-gray-400 text-[9px]">
                /year{" "}
                <span className="text-green-700 ml-2 bg-green-100 p-1 rounded-lg inline-flex items-center">
                  <FontAwesomeIcon icon={faTicket} className="mr-1" />
                  Save $20
                </span>
              </p>
            </div>
            <ul className="pt-5">
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Manage up to 5 accounts</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Basic analytics and reports</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Secure online transaction</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Standard customer support</p>
              </li>
            </ul>
          </div>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="bg-gray-200 text-gray-500 text-xs uppercase py-3 cursor-pointer hover:bg-gray-300 hover:text-secondary font-semibold hover:scale-105 transition-all w-full mt-5"
          >
            Get Started Today
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-light px-5 py-5 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <p className="text-gray-50 font-semibold text-sm pb-4 border-b border-gray-200">
              Professional Plan
            </p>
            <div className="mt-6 flex gap-2 items-end">
              <h3 className="text-4xl text-gray-100 font-bold">$300</h3>
              <p className="text-white text-[9px]">
                /year{" "}
                <span className="text-green-700 ml-2 bg-green-100 p-1 rounded-lg inline-flex items-center">
                  <FontAwesomeIcon icon={faTicket} className="mr-1" />
                  Save $60
                </span>
              </p>
            </div>
            <ul className="pt-5">
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-50">Manage up to 20 accounts</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-50">Advanced analytics and insights</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-50">International transactions support</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-50">Priority customer support</p>
              </li>
            </ul>
          </div>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="hover:bg-gray-200 hover:text-gray-500 text-xs tracking-widest uppercase py-3 cursor-pointer bg-whitee text-secondary font-semibold hover:scale-105 transition-all w-full mt-5"
          >
            Get Started Today
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-50 px-5 py-5 rounded-2xl shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div>
            <p className="text-gray-500 font-semibold text-sm pb-4 border-b border-orange-200">
              Enterprise Plan
            </p>
            <div className="mt-6 flex gap-2 items-end">
              <h3 className="text-4xl text-secondary font-bold">$500</h3>
              <p className="text-gray-400 text-[9px]">
                /year{" "}
                <span className="text-green-700 ml-2 bg-green-100 p-1 rounded-lg inline-flex items-center">
                  <FontAwesomeIcon icon={faTicket} className="mr-1" />
                  Save $100
                </span>
              </p>
            </div>
            <ul className="pt-5">
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Unlimited account management</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Custom analytics and reporting tools</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">API access and integration</p>
              </li>
              <li className="flex items-center pb-3">
                <div className="bg-gray-200 flex justify-center items-center h-5 w-5 rounded-full border border-orange-200 shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[8px] text-secondary" />
                </div>
                <p className="text-sm ml-2 text-gray-400">Dedicated account manager</p>
              </li>
            </ul>
          </div>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="bg-gray-200 text-gray-500 text-xs uppercase py-3 cursor-pointer hover:bg-gray-300 hover:text-secondary font-semibold hover:scale-105 transition-all w-full mt-5"
          >
            Get Started Today
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Pricing;