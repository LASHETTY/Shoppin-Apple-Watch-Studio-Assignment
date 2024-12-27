'use client'

import React from 'react'
import { WATCH_CASES } from '@/data/watchData'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Watch Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WATCH_CASES.map((watchCase) => (
            <div
              key={watchCase.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={watchCase.image}
                alt={watchCase.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{watchCase.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Starting from ${watchCase.price}
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
