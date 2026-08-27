import React from 'react'

const BlogHero = () => {
  return (
    <div className="relative bg-tertiary bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen w-full text-gray-200">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center max-w-3xl mx-auto text-center">
          <p className="text-white py-1.5 px-4 rounded-full text-xs font-medium tracking-wide bg-white/20 backdrop-blur-md border border-white/10 w-fit">
            Finance Made Simple
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight text-white">
            Stay Updated On <br className="hidden sm:inline" /> Digital Payments
          </h1>

          <p className="text-secondary text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
            Get the latest insights and trends in digital payments, all in one place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogHero