'use client'

import React from 'react'
import Image from 'next/image'
import Modal from './Modal'
import { useWatchContext } from '@/context/WatchContext'
import { WATCH_CASES, WATCH_BANDS, WATCH_SIZES } from '@/data/watchData'

// Get the image number based on the case ID
const getImageNumber = (caseId: string) => {
  const caseToImage: { [key: string]: string } = {
    'aluminum-midnight': '1',
    'aluminum-starlight': '2',
    'aluminum-silver': '3',
    'stainless-gold': '4',
    'stainless-graphite': '5',
    'titanium-natural': '6',
    'titanium-black': '7'
  }
  return caseToImage[caseId] || '1'
}

interface CustomizerModalsProps {
  activeModal: 'size' | 'case' | 'band' | null
  onClose: () => void
}

export default function WatchCustomizerModals({ activeModal, onClose }: CustomizerModalsProps) {
  const {
    selectedCase,
    setSelectedCase,
    selectedSize,
    setSelectedSize,
    selectedBand,
    setSelectedBand,
  } = useWatchContext()

  const handleSelectCase = (caseItem: typeof WATCH_CASES[0]) => {
    setSelectedCase(caseItem)
    onClose()
  }

  const handleSelectBand = (band: typeof WATCH_BANDS[0]) => {
    setSelectedBand(band)
    onClose()
  }

  const handleSelectSize = (size: typeof WATCH_SIZES[0]) => {
    setSelectedSize(size.id)
    onClose()
  }

  return (
    <>
      {/* Size Selection Modal */}
      <Modal
        isOpen={activeModal === 'size'}
        onClose={onClose}
        title="Choose a Size"
      >
        <div className="grid grid-cols-2 gap-4">
          {WATCH_SIZES.map((size) => (
            <button
              key={size.id}
              onClick={() => handleSelectSize(size)}
              className={`p-4 border rounded-lg ${
                selectedSize === size.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <h3 className="text-lg font-medium">{size.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {size.description}
              </p>
            </button>
          ))}
        </div>
      </Modal>

      {/* Case Selection Modal */}
      <Modal
        isOpen={activeModal === 'case'}
        onClose={onClose}
        title="Choose a Case"
      >
        <div className="grid grid-cols-2 gap-4">
          {WATCH_CASES.map((caseItem) => (
            <button
              key={caseItem.id}
              onClick={() => handleSelectCase(caseItem)}
              className={`p-4 border rounded-lg ${
                selectedCase?.id === caseItem.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="aspect-square mb-4 relative">
                <Image
                  src={`/images/watches/${getImageNumber(caseItem.id)}.jpg`}
                  alt={caseItem.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg font-medium">{caseItem.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ${caseItem.price}
              </p>
            </button>
          ))}
        </div>
      </Modal>

      {/* Band Selection Modal */}
      <Modal
        isOpen={activeModal === 'band'}
        onClose={onClose}
        title="Choose a Band"
      >
        <div className="grid grid-cols-2 gap-4">
          {WATCH_BANDS.map((band) => (
            <button
              key={band.id}
              onClick={() => handleSelectBand(band)}
              className={`p-4 border rounded-lg ${
                selectedBand?.id === band.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="aspect-square mb-4 relative">
                <Image
                  src={`/images/watches/${getImageNumber(band.id)}.jpg`}
                  alt={band.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg font-medium">{band.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ${band.price}
              </p>
            </button>
          ))}
        </div>
      </Modal>
    </>
  )
}
