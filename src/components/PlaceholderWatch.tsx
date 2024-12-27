'use client'

import React from 'react'

export default function PlaceholderWatch() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-3xl border-8 border-gray-300 dark:border-gray-700 relative">
        {/* Watch Screen */}
        <div className="absolute inset-2 bg-black rounded-2xl flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-2xl font-bold mb-2">12:00</div>
            <div className="text-sm">Wednesday</div>
          </div>
        </div>
        {/* Watch Band Top */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-16 h-24 bg-gray-300 dark:bg-gray-700 rounded-t-lg" />
        {/* Watch Band Bottom */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-16 h-24 bg-gray-300 dark:bg-gray-700 rounded-b-lg" />
      </div>
    </div>
  )
}
