import React, { useState } from "react";

const ALL_ARTICLES = [
  { id: 1, category: 'Fintech', title: '5 Ways to Improve Your Financial Habits', date: 'Dec 28, 2024', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400' },
  { id: 2, category: 'Fintech', title: 'The Rise of Neobanks: Why Switch Now?', date: 'Jan 05, 2025', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400' },
  { id: 3, category: 'Finance', title: 'The Ultimate Guide to Smart Financial Planning', date: 'Nov 20, 2024', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=400' },
  { id: 4, category: 'Finance', title: 'Understanding Compound Interest in Your 20s', date: 'Feb 12, 2025', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400' },
  { id: 5, category: 'Security', title: 'Protecting Your Digital Assets from Phishing', date: 'Jan 18, 2025', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400' },
  { id: 6, category: 'Security', title: 'Biometric Payments: Are They Actually Safe?', date: 'Dec 05, 2024', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
  { id: 7, category: 'Budgeting', title: 'Master Your Budget in 3 Simple Steps', date: 'Dec 15, 2024', image: 'https://images.unsplash.com/photo-1579621970795-87f9ac75d60e?auto=format&fit=crop&q=80&w=400' },
  { id: 8, category: 'Budgeting', title: 'The 50/30/20 Rule: Does It Still Work?', date: 'Feb 01, 2025', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400' },
  { id: 9, category: 'Budgeting', title: 'Hidden Subscriptions Draining Your Bank Account', date: 'Jan 22, 2025', image: 'https://images.unsplash.com/photo-1621416848440-2369c44e7660?auto=format&fit=crop&q=80&w=400' },
  { id: 10, category: 'Technology', title: 'How AI is Revolutionizing Personal Finance', date: 'Nov 30, 2024', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400' },
  { id: 11, category: 'Technology', title: 'Blockchain Beyond Crypto: The Future of Ledger', date: 'Dec 10, 2024', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400' },
  { id: 12, category: 'Technology', title: 'Cloud Computing in Modern Banking Systems', date: 'Feb 15, 2025', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
];

const TOP_BLOGS = [
  {
    id: 101,
    title: "The Future of Fintech: Trends for 2025",
    text: "Discover the latest trends shaping the fintech landscape in 2025 from advanced security features to AI-driven financial tools.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    name: "Sarah Winter",
    date: "Jan 1, 2025",
    tag: "Fintech",
  },
  {
    id: 102,
    title: "Why Security Matters in Digital Payments",
    text: "Explore how robust security protocols are essential for maintaining user trust in the evolving world of digital transactions.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1200&auto=format&fit=crop",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    name: "Taylor Winter",
    date: "Dec 20, 2025",
    tag: "Security",
  },
];

const CATEGORIES = ['All Articles', 'Fintech', 'Finance Tips', 'Security', 'Budgeting', 'Technology'];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const filteredArticles = activeCategory === 'All Articles'
    ? ALL_ARTICLES
    : ALL_ARTICLES.filter(article => 
        article.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
        activeCategory.toLowerCase().includes(article.category.toLowerCase())
      );

  return (
    <div className="px-6 md:px-16 py-20 bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {TOP_BLOGS.map((item, index) => (
          <a
            key={index}
            href="/blog-info"
            style={{ backgroundImage: `url(${item.bgImage})` }}
            className="relative h-[400px] rounded-3xl text-white overflow-hidden group bg-cover bg-center block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 group-hover:from-black/95 transition-all duration-500" />
            
            <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 gap-4">
              <h3 className="font-bold text-2xl md:text-3xl leading-tight group-hover:text-slate-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm line-clamp-2">{item.text}</p>
              
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-3 text-xs items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
                  />
                  <p className="font-medium">
                    {item.name} <span className="text-slate-400 mx-1">~</span> {item.date}
                  </p>
                </div>
                <span className="bg-white text-indigo-900 rounded-lg text-xs px-4 py-1.5 font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-10">All Articles</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <a 
              key={article.id} 
              href="/blog-info" 
              className="group cursor-pointer block"
            >
              <div className="overflow-hidden rounded-[2rem] mb-5 bg-slate-100 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="px-1">
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium">
                  {article.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">No articles found in "{activeCategory}".</p>
            <button 
              onClick={() => setActiveCategory('All Articles')}
              className="mt-4 text-indigo-600 font-bold hover:underline cursor-pointer"
            >
              View all articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;