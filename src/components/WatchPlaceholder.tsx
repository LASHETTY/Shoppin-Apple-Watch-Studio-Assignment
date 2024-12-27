'use client'

import React from 'react'
import Image from 'next/image'

interface WatchPlaceholderProps {
  name?: string
  color?: string
  className?: string
}

export default function WatchPlaceholder({
  name = 'Choose a case.',
  color = 'bg-gray-100',
  className = '',
}: WatchPlaceholderProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <Image
        src="/images/hero-watch.webp"
        alt="Apple Watch"
        fill
        className="object-contain"
        priority
      />
      <div className="absolute top-8 left-8 text-left">
        <h1 className="text-5xl font-bold mb-4">
          Choose a case.
          <br />
          Pick a band.
          <br />
          Create your own style.
        </h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
          Get started
        </button>
      </div>
    </div>
  )
}
