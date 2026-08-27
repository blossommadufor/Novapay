import React from "react";

const MobileNav = ({ closeMenu }) => {
  return (
    <>
      <div 
        onClick={closeMenu} 
        className="fixed inset-0 z-30 bg-black/40 lg:hidden"
      />

      <div className="fixed top-16 right-4 sm:right-8 z-40 w-64 bg-white text-slate-900 rounded-2xl shadow-xl border border-slate-100 p-6 lg:hidden animate-in fade-in slide-in-from-top-3 duration-200">
        <nav>
          <ul className="flex flex-col gap-4 text-sm font-bold">
            <li>
              <a
                href="/"
                onClick={closeMenu}
                className="block py-1 px-3 rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={closeMenu}
                className="block py-1 px-3 rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/blog"
                onClick={closeMenu}
                className="block py-1 px-3 rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
              >
                BLOG
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;