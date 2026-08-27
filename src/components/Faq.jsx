import React, {useRef} from 'react'

const faq =[

     

    {
        question:'How secure is NovaPay?',
        answer:'We use state-of-the-art encryption to ensure your data is safe'
    },
    {
        question:'Does NovaPay support international transactions?',
        answer:'Contact us through our booking form or call us to discuss your needs and recieve a personalized quote'
    },
    {
        question:'Are there any hidden fees?',
        answer:'No, we believe in transparent pricing. All fees are clearly outlined in your plan details'
    },
    {
        question:'Can I cancel my plan anytime?',
        answer:'Yes, you can cancel your plan anytime without any penalties'
    },
    {
        question:'How can I get a quote?',
        answer:'Contact us through our booking form or call us to discuss your needs and recieve a personalized quote'
    },
    {
        question:'Is NovaPay suitable for small businesses?',
        answer:'Absolutely, Novapay is designed to support business of allsizes, from startups to large enterprises.'
    },
]

const Faq = () => {

    const sectionRef = useRef(null);

  return (
    <div 
    ref={sectionRef} 
      className="px-16 py-20 h-screen w-full items-center justify-center overflow-hidden animate-smooth-flow"
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

      <div className="flex flex-col items-center justify-center gap-5 pb-10">
        <p className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
           style={{ backgroundColor: 'rgba(235, 94, 40, 0.1)', color: '#eb5e28', border: '1px solid rgba(235, 94, 40, 0.2)' }}>
          FAQ
        </p>
        <h2 className="text-center font-semibold text-gray-50 text-4xl pb-5">
          Your Concerns, Answered 
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        {
            faq.map((item, index) =>(
                <div key={index}>
                    <h3 className='font-semibold text-secondary pb-3 text-lg'>{item.question}</h3>
                    <p className='text-gray-50'>{item.answer}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Faq
