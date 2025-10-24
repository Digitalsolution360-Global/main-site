import BgLayout from '@/components/layout/bgLayout'
import React from 'react'

function SEOPage() {
  return (
    <BgLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-blue-500 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Our SEO Portfolio is under construction
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </BgLayout>
  )
}

export default SEOPage