import React, { useState, useRef } from 'react';

const faq = [
  {
    question: 'How secure is NovaPay?',
    answer: 'We use state-of-the-art encryption and bank-grade security protocols to ensure your data is always safe.'
  },
  {
    question: 'Does NovaPay support international transactions?',
    answer: 'Yes, NovaPay supports cross-border payments across over 100 countries with real-time currency conversion.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No, we believe in transparent pricing. All fees are clearly outlined in your account dashboard and plan details.'
  },
  {
    question: 'Can I cancel my plan anytime?',
    answer: 'Yes, you can cancel or switch your plan anytime directly from your settings without incurring penalties.'
  },
  {
    question: 'How can I get a quote?',
    answer: 'Contact our sales team through our contact form or reach out directly to receive a custom solution tailored to your needs.'
  },
  {
    question: 'Is NovaPay suitable for small businesses?',
    answer: 'Absolutely. NovaPay is engineered to scale with businesses of all sizes, from early-stage startups to global enterprises.'
  },
];

const Faq = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={sectionRef} 
      className="px-6 sm:px-12 lg:px-16 py-16 sm:py-24 min-h-screen w-full flex flex-col justify-center items-center animate-smooth-flow"
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
      `}</style>

      <div className="flex flex-col items-center justify-center gap-3 pb-8 sm:pb-12 text-center max-w-2xl">
        <p 
          className="text-[10px] px-3.5 py-1 rounded-full font-bold w-fit tracking-widest uppercase"
          style={{ 
            backgroundColor: 'rgba(235, 94, 40, 0.1)', 
            color: '#eb5e28', 
            border: '1px solid rgba(235, 94, 40, 0.2)' 
          }}
        >
          FAQ
        </p>
        <h2 className="font-semibold text-gray-50 text-2xl sm:text-4xl leading-tight">
          Your Concerns, Answered 
        </h2>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl w-full">
        {faq.map((item, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-2"
          >
            <h3 className="font-semibold text-secondary text-lg leading-snug">
              {item.question}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="flex md:hidden flex-col gap-4 w-full max-w-xl">
        {faq.map((item, index) => (
          <div 
            key={index} 
            className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-4 text-left flex justify-between items-center text-secondary font-semibold text-base focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="text-xl font-bold ml-2 text-white">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;