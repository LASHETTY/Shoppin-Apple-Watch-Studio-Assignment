import { useState, useCallback } from 'react'
import { 
  WATCH_CASES, 
  WATCH_BANDS, 
  WATCH_SIZES, 
  WATCH_COLLECTIONS 
} from '@/data/watchData'

export const useWatchConfiguration = () => {
  const [selectedCase, setSelectedCase] = useState(WATCH_CASES[0])
  const [selectedBand, setSelectedBand] = useState(WATCH_BANDS[0])
  const [selectedSize, setSelectedSize] = useState(WATCH_SIZES[0])
  const [selectedCollection, setSelectedCollection] = useState(WATCH_COLLECTIONS[0])

  const calculateTotalPrice = useCallback(() => {
    let basePrice = selectedCollection.basePrice
    basePrice += selectedCase.price
    basePrice += selectedBand.price

    // Size might have a small price adjustment
    basePrice += selectedSize.id === '45mm' ? 20 : 0

    return basePrice
  }, [selectedCase, selectedBand, selectedSize, selectedCollection])

  const resetConfiguration = useCallback(() => {
    setSelectedCase(WATCH_CASES[0])
    setSelectedBand(WATCH_BANDS[0])
    setSelectedSize(WATCH_SIZES[0])
    setSelectedCollection(WATCH_COLLECTIONS[0])
  }, [])

  const shareConfiguration = useCallback(() => {
    // Generate a shareable URL or configuration string
    const config = {
      case: selectedCase.id,
      band: selectedBand.id,
      size: selectedSize.id,
      collection: selectedCollection.id,
      totalPrice: calculateTotalPrice()
    }
    return JSON.stringify(config)
  }, [selectedCase, selectedBand, selectedSize, selectedCollection, calculateTotalPrice])

  return {
    selectedCase,
    setSelectedCase,
    selectedBand,
    setSelectedBand,
    selectedSize,
    setSelectedSize,
    selectedCollection,
    setSelectedCollection,
    calculateTotalPrice,
    resetConfiguration,
    shareConfiguration,
    availableCases: WATCH_CASES,
    availableBands: WATCH_BANDS,
    availableSizes: WATCH_SIZES,
    availableCollections: WATCH_COLLECTIONS
  }
}
