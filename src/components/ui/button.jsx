export function Button({ children, className = '', variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  }
  return (
    <button className={`px-4 py-2 rounded-xl shadow-sm transition ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
