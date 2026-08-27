import React from "react";

const blogs = [
  {
    topic: "Fintech",
    title: "The Future Of Fintech: Trends for 2026",
    date: "Jan 1, 2026",
    img: "/assets/blog5.jpg",
  },
  {
    topic: "Fintech Tips",
    title: "Ways To Improve Your Financial Habits",
    date: "Feb 26, 2026",
    img: "/assets/blog2.jpg",
  },
  {
    topic: "Security",
    title: "Why Security Matters in Digital Payments",
    date: "Dec 20, 2025",
    img: "/assets/blog3.jpg",
  },
];

const Blog = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <div className="w-full md:w-3/6">
          <p
            className="text-[10px] px-3 py-1 rounded-full font-bold w-fit tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(235, 94, 40, 0.1)",
              color: "#eb5e28",
              border: "1px solid rgba(235, 94, 40, 0.2)",
            }}
          >
            BLOG
          </p>
          <h2 className="font-semibold text-secondary text-3xl sm:text-4xl">
            Insights, Tips, And News
            <br className="hidden sm:inline" /> About Fintech
          </h2>
        </div>
        
        <div className="w-full md:w-3/6 lg:w-2/6">
          <p className="pb-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Stay informed with the latest insights, expert tips, and breaking
            news in the world of fintech
          </p>
          <button
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
            className="bg-gray-200 text-gray-500 text-xs uppercase py-3 cursor-pointer hover:bg-gray-300 hover:text-secondary font-semibold hover:scale-105 transition-all px-5"
          >
            View More Blogs
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {blogs.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 flex flex-col">
            <div className="w-full h-52 sm:h-60 overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="pt-4 flex flex-col gap-1.5 flex-grow justify-between">
              <div>
                <p className="text-xs font-semibold text-secondary mb-1">
                  {item.topic}
                </p>
                <h3 className="font-bold text-gray-700 text-base sm:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 pt-2">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;