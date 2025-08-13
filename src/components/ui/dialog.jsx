import React from 'react'
import { createPortal } from 'react-dom'

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
        onClick={() => onOpenChange(false)}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
export function DialogContent({ className = '', children }) {
  return <div className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg ${className}`}
    onClick={e => e.stopPropagation()}>{children}</div>;
}
export function DialogHeader({ children }) { return <div className="mb-3">{children}</div> }
export function DialogTitle({ children, className = '' }) { return <h2 className={`text-2xl font-semibold ${className}`}>{children}</h2> }
export function DialogDescription({ children, className = '' }) { return <p className={`text-base text-gray-700 ${className}`}>{children}</p> }
export function DialogTrigger({ asChild, children, onClick }) {
  const child = React.Children.only(children)
  return React.cloneElement(child, { onClick })
}
