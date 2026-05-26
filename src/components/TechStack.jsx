import { motion } from 'framer-motion'
import {
  Database,
  Server,
  Code2,
  Container,
  Cpu,
  Layers,
  Search,
  MessageSquare,
  Brain,
  Globe,
  Zap,
  Boxes,
} from 'lucide-react'

const technologies = [
  { name: 'Python', icon: Code2, category: 'LANG', code: '01', border: 'neon-cyan' },
  { name: 'Java', icon: Cpu, category: 'LANG', code: '02', border: 'neon-magenta' },
  { name: 'TypeScript', icon: Code2, category: 'LANG', code: '03', border: 'neon-cyan' },
  { name: 'React 19', icon: Globe, category: 'FEND', code: '01', border: 'neon-magenta' },
  { name: 'Node.js', icon: Server, category: 'BACK', code: '01', border: 'neon-cyan' },
  { name: 'Express', icon: Zap, category: 'BACK', code: '02', border: 'neon-magenta' },
  { name: 'FastAPI', icon: Zap, category: 'BACK', code: '03', border: 'neon-cyan' },
  { name: 'MySQL', icon: Database, category: 'DATA', code: '01', border: 'neon-magenta' },
  { name: 'SQLite', icon: Database, category: 'DATA', code: '02', border: 'neon-cyan' },
  { name: 'ChromaDB', icon: Boxes, category: 'DATA', code: '03', border: 'neon-magenta' },
  { name: 'Docker', icon: Container, category: 'DEV', code: '01', border: 'neon-magenta' },
  { name: 'LangChain', icon: Layers, category: 'AI', code: '01', border: 'neon-cyan' },
  { name: 'Ollama', icon: Brain, category: 'AI', code: '02', border: 'neon-magenta' },
  { name: 'Gemini AI', icon: Brain, category: 'AI', code: '03', border: 'neon-cyan' },
  { name: 'WebSockets', icon: MessageSquare, category: 'COM', code: '01', border: 'neon-magenta' },
  { name: 'n8n', icon: Zap, category: 'FLOW', code: '01', border: 'neon-cyan' },
]

// Duplicate for seamless loop
const duplicatedTechs = [...technologies, ...technologies]

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        {/* Transit Code */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-mono text-xs tracking-widest text-neon-magenta">
            // ARSENAL
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-4">
          <span className="text-gradient glow-text-cyan">
            THE ARSENAL
          </span>
        </h2>
        
        <p className="font-sub text-sm sm:text-base text-chrome-500 tracking-wide max-w-xl mx-auto">
          Technologies and tools I wield to build scalable, intelligent systems
        </p>
      </motion.div>

      {/* Marquee - Signal Panels */}
      <div className="relative mb-8">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        {/* Scrolling Marquee */}
        <div className="marquee-container overflow-hidden py-4">
          <motion.div
            className="marquee-content flex gap-4 animate-marquee"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {duplicatedTechs.map((tech, index) => {
              const Icon = tech.icon
              const isCyan = tech.border === 'neon-cyan'
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="group flex-shrink-0"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`relative flex flex-col items-center justify-center p-4 min-w-[100px] min-h-[140px] rounded-sm bg-asphalt/80 transition-all duration-300 ${
                      isCyan 
                        ? 'border border-neon-cyan/30 hover:border-neon-cyan/70 hover:shadow-glow-cyan' 
                        : 'border border-neon-magenta/30 hover:border-neon-magenta/70 hover:shadow-glow-magenta'
                    }`}
                  >
                    {/* Category Code */}
                    <span className={`station-code absolute top-2 left-2 ${isCyan ? 'text-neon-cyan/50' : 'text-neon-magenta/50'}`}>
                      {tech.category}/{tech.code}
                    </span>
                    
                    {/* Icon */}
                    <Icon
                      className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                        isCyan 
                          ? 'text-chrome-700 group-hover:text-neon-cyan' 
                          : 'text-chrome-700 group-hover:text-neon-magenta'
                      }`}
                    />
                    
                    {/* Tech Name */}
                    <span className="font-display text-lg tracking-wide text-chrome-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Reverse Direction Marquee */}
        <div className="marquee-container overflow-hidden py-4">
          <motion.div
            className="marquee-content flex gap-4 animate-marquee-reverse"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...duplicatedTechs].reverse().map((tech, index) => {
              const Icon = tech.icon
              const isCyan = tech.border === 'neon-cyan'
              return (
                <motion.div
                  key={`${tech.name}-reverse-${index}`}
                  className="group flex-shrink-0"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`relative flex flex-col items-center justify-center p-4 min-w-[100px] min-h-[140px] rounded-sm bg-asphalt/80 transition-all duration-300 ${
                      isCyan 
                        ? 'border border-neon-cyan/30 hover:border-neon-cyan/70 hover:shadow-glow-cyan' 
                        : 'border border-neon-magenta/30 hover:border-neon-magenta/70 hover:shadow-glow-magenta'
                    }`}
                  >
                    <span className={`station-code absolute top-2 left-2 ${isCyan ? 'text-neon-cyan/50' : 'text-neon-magenta/50'}`}>
                      {tech.category}/{tech.code}
                    </span>
                    <Icon
                      className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                        isCyan 
                          ? 'text-chrome-700 group-hover:text-neon-cyan' 
                          : 'text-chrome-700 group-hover:text-neon-magenta'
                      }`}
                    />
                    <span className="font-display text-lg tracking-wide text-chrome-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Static Grid - Station Tiles (for mobile/accessibility) */}
      <motion.div
        className="hidden lg:grid lg:grid-cols-8 gap-3 max-w-6xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          const isCyan = tech.border === 'neon-cyan'
          return (
            <motion.div
              key={`grid-${tech.name}`}
              className="group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`flex flex-col items-center gap-2 p-4 rounded-sm bg-asphalt/60 border transition-all duration-300 ${
                  isCyan 
                    ? 'border-chrome-700/50 hover:border-neon-cyan/50' 
                    : 'border-chrome-700/50 hover:border-neon-magenta/50'
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isCyan 
                      ? 'text-chrome-600 group-hover:text-neon-cyan' 
                      : 'text-chrome-600 group-hover:text-neon-magenta'
                  }`}
                />
                <span className="font-mono text-xs text-chrome-500 group-hover:text-chrome-300 transition-colors duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Transit Footer */}
      <motion.div
        className="flex justify-center items-center gap-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">SYS</span>
          <span className="font-mono text-xs text-neon-cyan">ONLINE</span>
        </div>
        <div className="w-8 h-px bg-chrome-700" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">COUNT</span>
          <span className="font-mono text-xs text-neon-magenta">{technologies.length}</span>
        </div>
      </motion.div>

      {/* Chrome Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-chrome-700/50 to-transparent" />
    </section>
  )
}

export default TechStack
