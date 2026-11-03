import { motion } from 'framer-motion'
import { X } from 'lucide-react'

// Full-screen image viewer: shows the image at (up to) its natural size,
// scrollable if larger than the screen. Click outside or ✕ to close.
export default function Lightbox({ image, closeLabel = 'Close', onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col bg-black/85 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <p className="text-sm text-white/80">{image.caption}</p>
        <button
          onClick={onClose}
          aria-label={closeLabel}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex flex-1 items-start justify-center overflow-auto px-4 pb-6">
        <img
          src={image.src}
          alt={image.caption || image.alt || ''}
          onClick={(e) => e.stopPropagation()}
          className="h-auto max-w-full rounded-xl bg-white shadow-2xl"
        />
      </div>
    </motion.div>
  )
}
