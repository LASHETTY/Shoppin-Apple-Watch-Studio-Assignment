'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { WatchCase, WatchBand, WatchSize, WatchCollection } from '@/data/watchData'

interface WatchContextType {
  selectedCase: WatchCase | null
  setSelectedCase: (watchCase: WatchCase | null) => void
  selectedSize: string | null
  setSelectedSize: (size: string | null) => void
  selectedBand: WatchBand | null
  setSelectedBand: (band: WatchBand | null) => void
  selectedCollection: WatchCollection | null
  setSelectedCollection: (collection: WatchCollection | null) => void
  calculateTotalPrice: () => number
  currentView: 'front' | 'side'
  setCurrentView: (view: 'front' | 'side') => void
}

const WatchContext = createContext<WatchContextType | null>(null)

export function WatchProvider({ children }: { children: React.ReactNode }) {
  const [selectedCase, setSelectedCase] = useState<WatchCase | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedBand, setSelectedBand] = useState<WatchBand | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<WatchCollection | null>(null)
  const [currentView, setCurrentView] = useState<'front' | 'side'>('front')

  // Load saved configuration on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedConfig = localStorage.getItem('watchConfiguration')
      if (savedConfig) {
        const config = JSON.parse(savedConfig)
        setSelectedCase(config.case)
        setSelectedBand(config.band)
        setSelectedSize(config.size)
      }
    }
  }, [])

  // Auto-save configuration when it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (selectedCase || selectedBand || selectedSize)) {
      const configuration = {
        case: selectedCase,
        band: selectedBand,
        size: selectedSize,
        savedAt: new Date().toISOString(),
      }
      localStorage.setItem('watchConfiguration', JSON.stringify(configuration))
    }
  }, [selectedCase, selectedBand, selectedSize])

  const calculateTotalPrice = () => {
    let total = 0
    if (selectedCase) total += selectedCase.price
    if (selectedBand) total += selectedBand.price
    return total
  }

  return (
    <WatchContext.Provider
      value={{
        selectedCase,
        setSelectedCase,
        selectedSize,
        setSelectedSize,
        selectedBand,
        setSelectedBand,
        selectedCollection,
        setSelectedCollection,
        calculateTotalPrice,
        currentView,
        setCurrentView,
      }}
    >
      {children}
    </WatchContext.Provider>
  )
}

export function useWatchContext() {
  const context = useContext(WatchContext)
  if (!context) {
    throw new Error('useWatchContext must be used within a WatchProvider')
  }
  return context
}
