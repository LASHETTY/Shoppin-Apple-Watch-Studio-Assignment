'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Apple Watch Logo */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-2xl font-semibold">WATCH</h1>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="z-10">
            <h2 className="text-lg mb-4">Apple Watch Studio</h2>
            <h1 className="text-6xl font-medium leading-tight mb-8">
              Choose a case.
              <br />
              Pick a band.
              <br />
              Create your own style.
            </h1>
            <button
              onClick={() => router.push('/customize')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors"
            >
              Get started
            </button>
          </div>

          {/* Right Side - Watch Image */}
          <div className="relative h-[600px]">
            <Image
              src="/images/watches/1.jpg"
              alt="Apple Watch"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
