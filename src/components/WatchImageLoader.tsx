'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface WatchImageLoaderProps {
  src: string
  alt: string
  className?: string
}

export default function WatchImageLoader({ src, alt, className = '' }: WatchImageLoaderProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}>
        <div className="text-center p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        onError={() => setError(true)}
      />
    </div>
  )
}
