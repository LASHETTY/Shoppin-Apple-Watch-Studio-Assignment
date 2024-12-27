'use client'

import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useWatchContext } from '@/context/WatchContext'
import { FiSun, FiMoon, FiSave } from 'react-icons/fi'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { selectedCase, selectedBand, selectedSize } = useWatchContext()

  const handleSave = () => {
    const configuration = {
      case: selectedCase,
      band: selectedBand,
      size: selectedSize,
      savedAt: new Date().toISOString(),
    }
    
    localStorage.setItem('watchConfiguration', JSON.stringify(configuration))

    // Show success message
    const toast = document.createElement('div')
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-transform duration-500 z-50'
    toast.textContent = 'Configuration saved!'
    document.body.appendChild(toast)

    setTimeout(() => {
      toast.style.transform = 'translateY(-100%)'
      setTimeout(() => document.body.removeChild(toast), 500)
    }, 3000)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium">
            Apple Watch Studio
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              href="/customize"
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Customize
            </Link>
            <Link
              href="/collections"
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Collections
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              <FiSave className="w-4 h-4" />
              <span>Save</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
