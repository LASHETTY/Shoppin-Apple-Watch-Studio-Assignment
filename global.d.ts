import React from 'react'

// Extend global JSX namespace to include intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>, 
        HTMLElement
      >
    }
  }
}

// Extend Window interface if needed
interface Window {
  // Add any custom window properties here
}

// Module augmentation for any global modules
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

// Export to make it a module
export {};
