import React from 'react'

export default function LoadingSpinner({ size = 'md', color = 'custom-red' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className={`w-full h-full border-4 border-gray-200 border-t-${color} rounded-full`}></div>
      </div>
    </div>
  )
}

// Full page loading component
export function PageLoading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-gray-600 font-medium">Đang tải...</p>
      </div>
    </div>
  )
}
