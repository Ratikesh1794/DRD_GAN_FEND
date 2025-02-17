interface PopupProps {
  isOpen: boolean
  type: 'success' | 'error'
  message: string
  onClose: () => void
}

const Popup = ({ isOpen, type, message, onClose }: PopupProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex items-start space-x-5 mb-6">
          <div className={`p-3 rounded-xl ${
            type === 'success' 
              ? 'bg-green-500/10 text-green-400 ring-1 ring-green-500/20' 
              : 'bg-red-500/10 text-red-400 ring-1 ring-red-500/20'
          }`}>
            {type === 'success' ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-semibold mb-2 ${
              type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {type === 'success' ? 'Operation Successful' : 'Operation Failed'}
            </h3>
            <p className="text-neutral-300 leading-relaxed">{message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className={`w-full px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
            type === 'success'
              ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20 ring-1 ring-green-500/20'
              : 'bg-red-500/10 text-red-400 hover:bg-red-500/20 ring-1 ring-red-500/20'
          }`}
        >
          {type === 'success' ? 'Continue' : 'Try Again'}
        </button>
      </div>
    </div>
  )
}

export default Popup 