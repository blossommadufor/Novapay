import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const BlogInfoHero = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-medium text-slate-400 mb-4 uppercase tracking-widest">
          <span>Blog</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          <span className="text-indigo-600">The Future of Fintech: Trends For 2025</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          The Future of Fintech: Trends For 2025
        </h1>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" 
            alt="Author" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-bold">Sarah Winter</p>
            <p className="text-xs text-slate-400">24 January 2025</p>
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <div className="w-full h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80" 
            alt="Fintech Trends" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default BlogInfoHero
