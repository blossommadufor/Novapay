import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faLink,
  faChartLine,
  faCreditCard,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Workflow = () => {
  const sectionRef = useRef(null);
  const lockRef = useRef(false);
  const [step, setStep] = useState(0);

  const items = [
    { icon: faUserPlus, title: "Sign Up", text: "Create your account in minutes." },
    { icon: faLink, title: "Link Accounts", text: "Securely connect your financial accounts." },
    { icon: faChartLine, title: "Analyze", text: "Access detailed insights and analytics." },
    { icon: faCreditCard, title: "Transact", text: "Send and receive payments effortlessly." },
    { icon: faSliders, title: "Optimize", text: "Use smart tools to improve finances." },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!inView) return;
      if (lockRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && step < 5) {
        e.preventDefault();
        lockRef.current = true;
        setStep((prev) => prev + 1);
        setTimeout(() => { lockRef.current = false; }, 800);
      }

      if (e.deltaY < 0 && step > 0) {
        e.preventDefault();
        lockRef.current = true;
        setStep((prev) => prev - 1);
        setTimeout(() => { lockRef.current = false; }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [step]);

  return (
    <div 
      ref={sectionRef} 
      className="flex flex-col lg:flex-row min-h-screen w-full items-center justify-center overflow-hidden animate-smooth-flow py-12 lg:py-0"
      style={{
        background: `linear-gradient(135deg, #000000, #57534d, #000000)`,
        backgroundSize: '200% 200%',
      }}
    >
      <style>{`
        @keyframes smoothGradient {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-smooth-flow {
          animation: smoothGradient 15s ease-in-out infinite;
        }
        .snap-transition {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>

      <div className="w-full lg:w-3/6 px-8 sm:px-12 lg:px-16 mb-10 lg:mb-0">
        <p className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
           style={{ backgroundColor: 'rgba(235, 94, 40, 0.1)', color: '#eb5e28', border: '1px solid rgba(235, 94, 40, 0.2)' }}>
          WORKFLOW
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#fffcf2' }}>
          A Smarter Way To <br /> Manage Your Money
        </h2>
        <p className="leading-7 max-w-md opacity-50 text-sm sm:text-base" style={{ color: '#ccc5b9' }}>
          Take control of your finances with a smarter approach. Discover innovative tools and practical strategies to grow your wealth.
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/6 flex items-center justify-center">
        <div className="relative w-[340px] flex flex-col gap-10">

          {/* Progress Line */}
          <div className="absolute left-[19px] top-5 h-[360px] w-[4px]" style={{ backgroundColor: '#403d39' }}>
            <div
              className="absolute top-0 left-0 w-full snap-transition"
              style={{ 
                height: `${step * 72}px`, 
                backgroundColor: '#eb5e28',
                boxShadow: '0 0 20px rgba(235, 94, 40, 0.4)' 
              }}
            ></div>
          </div>

          {items.map((item, index) => {
            const isActive = step > index;
            return (
              <div key={index} className="flex items-start gap-6 relative z-10">
                {/* Icon Circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center snap-transition shadow-lg"
                  style={{
                    backgroundColor: isActive ? '#eb5e28' : '#252422', 
                    color: isActive ? '#fff' : '#403d39',
                    border: isActive ? 'none' : '1px solid #403d39',
                    transform: isActive ? 'scale(1.1)' : 'scale(0.95)',
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                </div>

                {/* Text Content */}
                <div className={`snap-transition ${isActive ? "opacity-100 translate-x-0" : "opacity-20 translate-x-3"}`}
                     style={{ transitionDelay: isActive ? '50ms' : '0ms' }}>
                  <h3 className="font-bold text-lg leading-none mb-1" style={{ color: isActive ? '#fffcf2' : '#ccc5b9' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-70" style={{ color: '#ccc5b9' }}>
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;