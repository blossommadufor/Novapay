import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Platform from "../components/Platform";
import Footer from "../components/Footer";

const BlogInfo = () => {
  const latestPosts = [
    {
      title: "Top 3 Fintech Tools for Small Businesses",
      date: "Jan 5, 2025",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
    {
      title: "Digital Wallets: Are They the Future of Payments?",
      date: "Jan 3, 2025",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
    },
    {
      title: "5 Ways to Improve Your Financial Habits",
      date: "Jan 1, 2025",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    },
  ];

  const categories = [
    "Fintech",
    "Finance Tips",
    "Security",
    "Budgeting",
    "Technology",
  ];
  const popularTags = [
    "#FintechTrends",
    "#DigitalTransformation",
    "#AIInFinance",
    "#BudgetTips",
    "#SecureTransactions",
  ];

  const relatedArticles = [
    {
      category: "Fintech",
      title: "The Future of Fintech: Trends for 2025",
      date: "Jan 1, 2025",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      category: "Finance Tips",
      title: "5 Ways to Improve Your Financial Habits",
      date: "Dec 28, 2024",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    },
    {
      category: "Security",
      title: "Why Security Matters in Digital Payments",
      date: "Dec 20, 2024",
      img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Breadcrumb & Title Section */}
      <header className="relative bg-[#252422] bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat w-full h-[500px] overflow-hidden ">
        {/* The Overlay Layer: Added 'relative' to parent and 'z-index' management */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-bold mb-4 uppercase tracking-[0.2em] pt-30">
              <span className="text-slate-400">Blog</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[8px] text-slate-500"
              />
              <span className="text-[#EB5E28]">
                The Future of Fintech: Trends For 2025
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-3xl md:text-6xl font-black leading-tight mb-8 max-w-4xl text-center md:text-left">
              The Future of Fintech: <br className="hidden md:block" /> Trends
              For 2025
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80"
                  alt="Sarah Winter"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#EB5E28]"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#252422] rounded-full"></div>
              </div>
              <div className="text-left">
                <p className="text-white text-base font-bold leading-none mb-1">
                  Sarah Winter
                </p>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  24 January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content & Sidebar Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 py-20">
        {/* Article Content */}
        <article className="lg:col-span-8 text-slate-600 leading-relaxed space-y-8">
          <p className="text-lg">
            The fintech industry continues to evolve at a rapid pace, reshaping
            how individuals and businesses manage their finances. In 2025, we
            are witnessing groundbreaking trends that promise to make financial
            management more secure, efficient, and inclusive.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. AI-Driven Financial Tools
            </h2>
            <p>
              Artificial Intelligence is redefining financial management. From
              predictive analytics to personalized budgeting, AI tools empower
              users with data-driven insights to make smarter financial
              decisions. NovaPay integrates advanced AI to provide tailored
              solutions that fit unique user needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Advanced Security Measures
            </h2>
            <p>
              As cyber threats become more sophisticated, fintech companies are
              enhancing their security protocols. In 2025, multi-layered
              encryption, biometric authentication, and real-time fraud
              detection have become standard features. NovaPay prioritizes user
              security, ensuring every transaction is safe and seamless.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Decentralized Finance (DeFi) Expansion
            </h2>
            <p>
              DeFi is growing beyond cryptocurrency, offering decentralized
              lending, borrowing, and investment opportunities. This trend is
              democratizing access to financial services, making it possible for
              more people to participate in the global economy.
            </p>
          </section>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-2xl my-10 italic text-indigo-900 font-medium text-lg relative">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-indigo-200 absolute top-4 left-4 text-4xl -z-10"
            />
            <p className="relative z-10">
              "The fintech industry in 2025 is not just about technology; it's
              about creating a more secure, inclusive, and sustainable financial
              future."
            </p>
            <span className="block mt-2 font-bold text-sm">
              — Vince Law, Financial Expert
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-500 px-3 py-1 rounded-md text-xs font-medium cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
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
                  <img
                    src={post.img}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                    alt="post"
                  />
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-indigo-600 transition-colors leading-snug">
                      {post.title}
                    </h4>
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
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="hover:text-indigo-600 cursor-pointer"
                >
                  {cat}
                </span>
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
              {[faInstagram, faFacebookF, faTwitter, faLinkedinIn].map(
                (icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer"
                  >
                    <FontAwesomeIcon icon={icon} className="text-sm" />
                  </div>
                ),
              )}
            </div>
          </div>
        </aside>
      </main>

      {/* Related Articles Section */}
      <section className="bg-slate-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Related Articles
              </h2>
              <p className="text-slate-400 text-sm max-w-md">
                Discover how this related article adds context and enriches your
                knowledge on the subject.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedArticles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] bg-slate-200">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Platform/>
      <Footer/>
    </div>
  );
};

export default BlogInfo;
