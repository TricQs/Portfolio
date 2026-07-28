'use client'

export default function Card3D({ children, className = '', overflowHidden = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`h-full ${onClick ? 'cursor-pointer' : ''} ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
