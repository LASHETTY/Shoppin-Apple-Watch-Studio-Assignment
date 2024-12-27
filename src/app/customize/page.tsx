'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WatchImage from '@/components/WatchImage'
import WatchCustomizerModals from '@/components/WatchCustomizerModals'
import { useWatchContext } from '@/context/WatchContext'
import { WATCH_CASES } from '@/data/watchData'

export default function CustomizePage() {
  const [activeModal, setActiveModal] = useState<'size' | 'case' | 'band' | null>(null)
  const { selectedCase, selectedBand, currentView, setCurrentView, setSelectedCase } = useWatchContext()

  // Navigation state
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % WATCH_CASES.length)
    setSelectedCase(WATCH_CASES[currentIndex])
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + WATCH_CASES.length) % WATCH_CASES.length)
    setSelectedCase(WATCH_CASES[currentIndex])
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setSelectedCase(WATCH_CASES[index])
  }

  const handleViewChange = () => {
    setCurrentView(currentView === 'front' ? 'side' : 'front')
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Apple Watch Studio</h1>
          <button className="text-blue-600 hover:text-blue-700">Save</button>
        </nav>

        {/* Watch Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Watch Preview */}
          <div className="relative aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <WatchImage isClickable onClick={handleNext} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              →
            </button>

            {/* View Toggle */}
            <button
              onClick={handleViewChange}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm"
            >
              {currentView === 'front' ? 'Front View' : 'Side View'}
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {WATCH_CASES.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Customization Options */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-medium mb-4">Case</h2>
              <button
                onClick={() => setActiveModal('case')}
                className="w-full p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
              >
                {selectedCase ? (
                  <>
                    <span className="block font-medium">{selectedCase.name}</span>
                    <span className="text-gray-500">${selectedCase.price}</span>
                  </>
                ) : (
                  <span className="text-gray-500">Select a case</span>
                )}
              </button>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Band</h2>
              <button
                onClick={() => setActiveModal('band')}
                className="w-full p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
              >
                {selectedBand ? (
                  <>
                    <span className="block font-medium">{selectedBand.name}</span>
                    <span className="text-gray-500">${selectedBand.price}</span>
                  </>
                ) : (
                  <span className="text-gray-500">Select a band</span>
                )}
              </button>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Size</h2>
              <button
                onClick={() => setActiveModal('size')}
                className="w-full p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
              >
                <span className="text-gray-500">Select a size</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modals */}
      <WatchCustomizerModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  )
}
