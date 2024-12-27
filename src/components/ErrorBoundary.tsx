import React, { Component, ErrorInfo, ReactNode } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ 
      hasError: true, 
      error, 
      errorInfo 
    })
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900">
          <div className="text-center p-8 bg-white dark:bg-black rounded-lg shadow-xl">
            <FaExclamationTriangle className="mx-auto text-6xl text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                <summary className="cursor-pointer text-gray-700 dark:text-gray-300">
                  Error Details
                </summary>
                <pre className="text-xs text-red-700 dark:text-red-300 overflow-x-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
