import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] horizon-grid opacity-30" />
      </div>

      {/* Neon Haze Anchors */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 43, 214, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Transit Code Top Row */}
      <motion.div
        className="absolute top-6 left-6 sm:left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span className="font-mono text-xs sm:text-sm text-neon-magenta tracking-widest uppercase">
          SECTOR 01 — NIGHT DRIVE
        </span>
      </motion.div>

      {/* Live Status Pill */}
      <motion.div
        className="absolute top-6 right-6 sm:right-8 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-chrome/30 border border-chrome-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span className="font-mono text-xs text-chrome-300 tracking-wider">
            LIVE · 2026
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Billboard Name */}
        <motion.div variants={itemVariants} className="relative mb-6 flex flex-col items-center">
          <h1 className="font-display text-[4rem] sm:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tight">
            <span className="inline-block text-gradient glow-text-magenta">
              AMANUR
            </span>
            <br />
            <span className="inline-block text-gradient glow-text-cyan">
              RAHMAN
            </span>
          </h1>

          {/* Chrome Split Line */}
          <div className="chrome-split" />
        </motion.div>

        {/* Sub-display Role */}
        <motion.p
          variants={itemVariants}
          className="font-sub text-sm sm:text-base lg:text-lg text-neon-cyan tracking-[0.3em] uppercase mb-8"
        >
          System Designer / Software Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-chrome-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting high-performance systems with AI integration, real-time communication,
          and modern web technologies. Based in Dhaka, Bangladesh.
        </motion.p>

        {/* Boarding Pass CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4"
        >
          {/* Primary - View Systems */}
          <motion.button
            onClick={scrollToProjects}
            className="group relative boarding-pass w-44 sm:w-48"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative px-6 py-4 bg-asphalt border border-neon-cyan/40 hover:border-neon-cyan transition-colors duration-300 flex items-center justify-center">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3 font-sub text-sm tracking-wider text-neon-cyan uppercase">
                View Systems
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-cyan/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-cyan/60" />
          </motion.button>

          {/* Secondary - Contact */}
          <motion.a
            href="mailto:rahmanamanur51@gmail.com"
            className="group relative boarding-pass w-44 sm:w-48"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative px-6 py-4 bg-asphalt border border-neon-magenta/40 hover:border-neon-magenta transition-colors duration-300 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3 font-sub text-sm tracking-wider text-neon-magenta uppercase">
                Contact
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </div>
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-magenta/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-magenta/60" />
          </motion.a>

          {/* Tertiary - Download CV */}
          <motion.a
            href="/cv.pdf"
            download
            className="group relative boarding-pass w-44 sm:w-48"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative px-6 py-4 bg-asphalt border border-neon-amber/40 hover:border-neon-amber transition-colors duration-300 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3 font-sub text-sm tracking-wider text-neon-amber uppercase">
                Download CV
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </span>
            </div>
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-amber/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-amber/60" />
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator - Centered */}
      <motion.div
        className="absolute bottom-8 w-full flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-mono text-xs text-chrome-700 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-sm border border-chrome-700 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-neon-cyan"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Chrome Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
    </section>
  )
}

export default Hero
