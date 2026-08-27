import React from "react";
import { motion } from "framer-motion";

const items = [
  { img: '/assets/sponsor1.png', alt: 'Sponsor 1' },
  { img: '/assets/sponsor2.png', alt: 'Sponsor 2' },
  { img: '/assets/sponsor3.png', alt: 'Sponsor 3' },
  { img: '/assets/sponsor4.png', alt: 'Sponsor 4' },
  { img: '/assets/sponsor5.png', alt: 'Sponsor 5' },
  { img: '/assets/sponsor6.png', alt: 'Sponsor 6' },
];

const tripleItems = [...items, ...items, ...items];

const Partners = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 pb-8 sm:pb-10 px-6 sm:px-10 text-center">
        <p
          className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-2 sm:mb-4"
          style={{
            backgroundColor: "rgba(235, 94, 40, 0.1)",
            color: "#eb5e28",
            border: "1px solid rgba(235, 94, 40, 0.2)",
          }}
        >
          PARTNERS
        </p>
        <h2 className="font-semibold text-secondary text-3xl sm:text-4xl md:text-5xl leading-tight">
          Trusted By Leading <br className="hidden sm:inline" /> Financial Institutions
        </h2>
      </div>

      <section className="pb-12 sm:pb-16 overflow-hidden bg-white">
        <div className="overflow-hidden flex">
          <motion.div
            className="flex gap-8 sm:gap-12 md:gap-16 w-max items-center"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {tripleItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-20 sm:w-28 md:w-32 h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;