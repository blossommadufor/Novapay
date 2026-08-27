import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const latestPosts = [
    { title: "Top 3 Fintech Tools for Small Businesses", date: "Jan 5, 2025", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
    { title: "Digital Wallets: Are They the Future of Payments?", date: "Jan 3, 2025", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" },
    { title: "5 Ways to Improve Your Financial Habits", date: "Jan 1, 2025", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80" }
  ];

  const categories = ["Fintech", "Finance Tips", "Security", "Budgeting", "Technology"];
  const popularTags = ["#FintechTrends", "#DigitalTransformation", "#AIInFinance", "#BudgetTips", "#SecureTransactions"];

  const relatedArticles = [
    { category: "Fintech", title: "The Future of Fintech: Trends for 2025", date: "Jan 1, 2025", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" },
    { category: "Finance Tips", title: "5 Ways to Improve Your Financial Habits", date: "Dec 28, 2024", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80" },
    { category: "Security", title: "Why Security Matters in Digital Payments", date: "Dec 20, 2024", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80" }
  ];

const BlogMain = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
        
        {/* Article Content */}
        <article className="lg:col-span-8 text-slate-600 leading-relaxed space-y-8">
          <p className="text-lg">
            The fintech industry continues to evolve at a rapid pace, reshaping how individuals and businesses manage their finances. In 2025, we are witnessing groundbreaking trends that promise to make financial management more secure, efficient, and inclusive.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. AI-Driven Financial Tools</h2>
            <p>Artificial Intelligence is redefining financial management. From predictive analytics to personalized budgeting, AI tools empower users with data-driven insights to make smarter financial decisions. NovaPay integrates advanced AI to provide tailored solutions that fit unique user needs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Advanced Security Measures</h2>
            <p>As cyber threats become more sophisticated, fintech companies are enhancing their security protocols. In 2025, multi-layered encryption, biometric authentication, and real-time fraud detection have become standard features. NovaPay prioritizes user security, ensuring every transaction is safe and seamless.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Decentralized Finance (DeFi) Expansion</h2>
            <p>DeFi is growing beyond cryptocurrency, offering decentralized lending, borrowing, and investment opportunities. This trend is democratizing access to financial services, making it possible for more people to participate in the global economy.</p>
          </section>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-2xl my-10 italic text-indigo-900 font-medium text-lg relative">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-200 absolute top-4 left-4 text-4xl -z-10" />
            <p className="relative z-10">
              "The fintech industry in 2025 is not just about technology; it's about creating a more secure, inclusive, and sustainable financial future." 
            </p>
            <span className="block mt-2 font-bold text-sm">— Vince Law, Financial Expert</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {popularTags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-500 px-3 py-1 rounded-md text-xs font-medium cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Latest Posts */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Latest Post
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h3>
            <div className="space-y-6">
              {latestPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <img src={post.img} className="w-20 h-20 rounded-xl object-cover shrink-0" alt="post" />
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-indigo-600 transition-colors leading-snug">{post.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Categories
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-400">
              {categories.map(cat => (
                <span key={cat} className="hover:text-indigo-600 cursor-pointer">{cat}</span>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Social Media
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h3>
            <div className="flex gap-4">
              {[faInstagram, faFacebookF, faTwitter, faLinkedinIn].map((icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer">
                  <FontAwesomeIcon icon={icon} className="text-sm" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default BlogMain
