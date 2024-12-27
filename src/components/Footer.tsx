import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h4 className="font-bold mb-4 text-gray-800 dark:text-white">Apple Watch</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Series</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">SE</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Studio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800 dark:text-white">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Features</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Pricing</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Customization</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800 dark:text-white">Support</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Help Center</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</Link></li>
            <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Warranty</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-800 dark:text-white">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl mt-8 text-center border-t dark:border-gray-700 pt-4">
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Apple Watch Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
