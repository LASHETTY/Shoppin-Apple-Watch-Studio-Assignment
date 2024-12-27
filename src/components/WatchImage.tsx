'use client'

import React from 'react'
import { useWatchContext } from '@/context/WatchContext'
import WatchPlaceholder from './WatchPlaceholder'
import Image from 'next/image'

interface WatchImageProps {
  onClick?: () => void
  isClickable?: boolean
}

const getWatchColor = (id: string) => {
  const colors: { [key: string]: string } = {
    'aluminum-silver': 'bg-gray-200 border-gray-300',
    'aluminum-rose-gold': 'bg-pink-200 border-pink-300',
    'aluminum-black': 'bg-gray-800 border-gray-700',
    'titanium-natural': 'bg-gray-400 border-gray-500',
    'sport-loop-yellow': 'bg-yellow-200 border-yellow-300',
    'sport-loop-blue': 'bg-blue-200 border-blue-300',
    'sport-loop-green': 'bg-green-200 border-green-300',
  }
  return colors[id] || 'bg-gray-200 border-gray-300'
}

const getWatchImage = () => {
  if (currentView === 'front') {
    return selectedCase.image
  } else {
    // Return side view image - we'll need to add these to the data
    return selectedCase.image.replace('.png', '-side.png')
  }
}

const getBandImage = () => {
  if (!selectedBand) return null
  
  if (currentView === 'front') {
    return selectedBand.image
  } else {
    return selectedBand.image.replace('.png', '-side.png')
  }
}

export default function WatchImage({ onClick, isClickable = false }: WatchImageProps) {
  const { selectedCase, selectedBand, currentView } = useWatchContext()

  // Get the image number based on the case ID
  const getImageNumber = () => {
    const caseToImage: { [key: string]: string } = {
      'aluminum-midnight': '1',
      'aluminum-starlight': '2',
      'aluminum-silver': '3',
      'stainless-gold': '4',
      'stainless-graphite': '5',
      'titanium-natural': '6',
      'titanium-black': '7'
    }
    return selectedCase ? caseToImage[selectedCase.id] || '1' : '1'
  }

  if (!selectedCase) {
    return (
      <WatchPlaceholder
        name="Select a Watch"
        color="bg-gray-200 border-gray-300"
        className="w-full h-full"
      />
    )
  }

  return (
    <div 
      className={`relative w-full h-full ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={isClickable ? onClick : undefined}
    >
      {/* Watch Case */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className={`transform transition-transform duration-500 ${
            currentView === 'side' ? 'scale-x-50' : 'scale-100'
          }`}
        >
          <div className="relative w-[500px] h-[500px]">
            <Image
              src={`/images/watches/${getImageNumber()}.jpg`}
              alt={selectedCase.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Watch Info Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentView === 'front' ? 'Front View' : 'Side View'}
        </div>
      </div>
    </div>
  )
}
