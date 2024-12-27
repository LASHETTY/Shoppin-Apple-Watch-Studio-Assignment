'use client'

import React from 'react'
import { useWatchContext } from '@/context/WatchContext'
import { WATCH_CASES, WATCH_BANDS, WATCH_SIZES } from '@/data/watchData'

export default function WatchCustomizer() {
  const {
    selectedCase,
    setSelectedCase,
    selectedSize,
    setSelectedSize,
    selectedBand,
    setSelectedBand,
    calculateTotalPrice
  } = useWatchContext()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Watch Preview */}
        <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg">
          {selectedCase && (
            <img
              src={selectedCase.image}
              alt={selectedCase.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}
          {selectedBand && (
            <img
              src={selectedBand.image}
              alt={selectedBand.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}
        </div>

        {/* Customization Options */}
        <div className="space-y-8">
          {/* Case Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Choose Your Case</h2>
            <div className="grid grid-cols-2 gap-4">
              {WATCH_CASES.map((watchCase) => (
                <button
                  key={watchCase.id}
                  onClick={() => setSelectedCase(watchCase)}
                  className={`p-4 border rounded-lg ${
                    selectedCase?.id === watchCase.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img src={watchCase.image} alt={watchCase.name} className="w-full h-32 object-contain mb-2" />
                  <p className="font-medium">{watchCase.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">${watchCase.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Choose Your Size</h2>
            <div className="grid grid-cols-2 gap-4">
              {WATCH_SIZES.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.name)}
                  className={`p-4 border rounded-lg ${
                    selectedSize === size.name
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <p className="font-medium">{size.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Band Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Choose Your Band</h2>
            <div className="grid grid-cols-2 gap-4">
              {WATCH_BANDS.map((band) => (
                <button
                  key={band.id}
                  onClick={() => setSelectedBand(band)}
                  className={`p-4 border rounded-lg ${
                    selectedBand?.id === band.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img src={band.image} alt={band.name} className="w-full h-32 object-contain mb-2" />
                  <p className="font-medium">{band.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">${band.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Total Price */}
          <div className="border-t pt-4">
            <p className="text-2xl font-bold">
              Total: ${calculateTotalPrice()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
