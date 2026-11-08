import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

// Section emblem: a line icon in an accent tile with a slowly turning dashed ring.
// It pops in on scroll, floats gently and tilts in 3D toward the pointer.
export default function SectionIcon({ icon: Icon, delay = 0 }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 15 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 15 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      aria-hidden
      className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
      style={{ perspective: 600 }}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 170, damping: 16 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* turning dashed ring */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-accent/50"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="50" cy="2" r="2.5" className="fill-accent" />
      </motion.svg>

      {/* floating tile */}
      <motion.div
        className="absolute inset-[16%]"
        animate={reduce ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="flex h-full w-full items-center justify-center rounded-2xl border border-accent/30 bg-panel shadow-lg shadow-accent/15"
        >
          <Icon className="h-1/2 w-1/2 text-accent" strokeWidth={1.5} style={{ transform: 'translateZ(18px)' }} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
