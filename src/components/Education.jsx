import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, BookOpen, School, MapPin, ArrowUpRight } from 'lucide-react'

// PLACEHOLDER DATA — replace course lists / dates with real details later.
const education = [
  {
    id: 1,
    code: 'STATION_03',
    level: 'UNIVERSITY',
    institution: 'North South University',
    qualification: 'BSc in Computer Science & Engineering',
    period: '2022 — Present',
    location: 'Dhaka, Bangladesh',
    color: 'cyan',
    icon: GraduationCap,
    detailUrl: '/education/university.html',
    courses: [
      'Placeholder Course',
      'Placeholder Course',
      'Placeholder Course',
      'Placeholder Course',
    ],
  },
  {
    id: 2,
    code: 'STATION_02',
    level: 'A LEVELS',
    institution: 'Willes Little Flower School & College',
    qualification: 'Edexcel International A Levels',
    period: '20XX — 20XX',
    location: 'Dhaka, Bangladesh',
    color: 'magenta',
    icon: BookOpen,
    detailUrl: '/education/a-levels.html',
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
  },
  {
    id: 3,
    code: 'STATION_01',
    level: 'O LEVELS',
    institution: 'Willes Little Flower School & College',
    qualification: 'Edexcel International O Levels',
    period: '20XX — 20XX',
    location: 'Dhaka, Bangladesh',
    color: 'amber',
    icon: School,
    detailUrl: '/education/o-levels.html',
    courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'ICT'],
  },
]

// Colors are applied via inline styles (not dynamic Tailwind classes) so every
// accent renders reliably regardless of the JIT compiler's class scanning.
const palette = {
  cyan: { hex: '#00e5ff', rgb: '0, 229, 255' },
  magenta: { hex: '#ff2bd6', rgb: '255, 43, 214' },
  amber: { hex: '#ffb547', rgb: '255, 181, 71' },
}

const Station = ({ item, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(false)
  const Icon = item.icon
  const { hex, rgb } = palette[item.color]

  return (
    <motion.article
      ref={ref}
      className="group relative pl-16 sm:pl-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Station Node Dot */}
      <div className="absolute left-5 sm:left-7 top-7 -translate-x-1/2 z-10">
        <span
          className="block w-4 h-4 rounded-full bg-obsidian"
          style={{
            border: `2px solid ${hex}`,
            boxShadow: `0 0 10px rgba(${rgb}, 0.6), 0 0 24px rgba(${rgb}, 0.35)`,
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: hex }}
          animate={isInView ? { scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Station Card */}
      <div
        className="relative overflow-hidden bg-asphalt/60 transition-colors duration-500 mb-10"
        style={{ border: `1px solid rgba(${rgb}, ${hovered ? 0.4 : 0.18})` }}
      >
        {/* Left Neon Rail */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-500"
          style={{
            backgroundColor: hex,
            opacity: hovered ? 1 : 0.6,
            boxShadow: `0 0 10px rgba(${rgb}, 0.6), 0 0 24px rgba(${rgb}, 0.35)`,
          }}
        />

        <div className="p-6 md:p-8">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" style={{ color: hex }} />
              <span className="font-mono text-xs tracking-widest" style={{ color: hex }}>
                {item.code}
              </span>
            </div>
            <span className="font-sub text-xs tracking-[0.2em] uppercase text-chrome-500">
              {item.level}
            </span>
          </div>

          {/* Institution */}
          <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-none mb-2">
            <span
              className="transition-colors duration-500"
              style={{ color: hovered ? hex : '#e6e9f2' }}
            >
              {item.institution}
            </span>
          </h3>

          {/* Qualification */}
          <p
            className="font-sub text-sm tracking-[0.15em] uppercase mb-4"
            style={{ color: `rgba(${rgb}, 0.85)` }}
          >
            {item.qualification}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-chrome-500 font-mono text-xs">
            <span className="flex items-center gap-2">
              <span className="station-code">PERIOD</span>
              {item.period}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
          </div>

          {/* Courses */}
          <div className="space-y-3 mb-8">
            <span className="station-code block">COURSES</span>
            <div className="flex flex-wrap gap-2">
              {item.courses.map((course, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-3 py-1.5 text-chrome-400"
                  style={{
                    backgroundColor: `rgba(${rgb}, 0.08)`,
                    border: `1px solid rgba(${rgb}, 0.2)`,
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* View Details Button */}
          <motion.a
            href={item.detailUrl}
            className="relative inline-block boarding-pass"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="relative inline-flex items-center gap-3 px-6 py-3 bg-chrome/30 font-sub text-sm tracking-wider uppercase transition-colors duration-300"
              style={{
                border: `1px solid rgba(${rgb}, ${hovered ? 0.6 : 0.3})`,
                color: hex,
              }}
            >
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <div
              className="absolute top-0 left-0 w-2 h-2 pointer-events-none"
              style={{ borderTop: `1px solid rgba(${rgb}, 0.6)`, borderLeft: `1px solid rgba(${rgb}, 0.6)` }}
            />
            <div
              className="absolute bottom-0 right-0 w-2 h-2 pointer-events-none"
              style={{ borderBottom: `1px solid rgba(${rgb}, 0.6)`, borderRight: `1px solid rgba(${rgb}, 0.6)` }}
            />
          </motion.a>
        </div>

        {/* Hover Glow */}
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: hovered ? 0.2 : 0,
            background: `radial-gradient(circle, rgba(${rgb}, 0.8) 0%, transparent 70%)`,
          }}
        />
      </div>
    </motion.article>
  )
}

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Chrome Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome-700/50 to-transparent" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <GraduationCap className="w-4 h-4 text-neon-amber" />
          <span className="font-mono text-xs tracking-widest text-neon-cyan">
            // ACADEMIC LINE
          </span>
        </motion.div>

        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-4">
          <span className="text-gradient glow-text-cyan">THE ROUTE</span>
        </h2>

        <p className="font-sub text-sm sm:text-base text-chrome-500 tracking-wide max-w-xl mx-auto">
          Academic stations along the line — from O Levels through university
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Rail */}
        <div
          className="absolute left-5 sm:left-7 top-2 bottom-10 w-px"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,229,255,0.6) 0%, rgba(255,43,214,0.4) 50%, rgba(255,181,71,0.6) 100%)',
          }}
          aria-hidden="true"
        />

        {education.map((item, index) => (
          <Station key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Chrome Divider */}
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-chrome-700/50 to-transparent" />
    </section>
  )
}

export default Education
