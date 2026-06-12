import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ExternalLink, Lock, Globe, Sparkles, Zap, Monitor, Workflow, Cpu } from 'lucide-react'

const webApplications = [
  {
    id: 1,
    code: 'WEB_01',
    type: 'ENTERPRISE WEB APP',
    title: 'CUSTOMER RELATIONSHIP MANAGEMENT',
    subtitle: 'Multi-tenant SaaS · Real-time Voice · AI Chatbot',
    description:
      'Enterprise-grade CRM platform featuring real-time WebSockets, Agora SDK for browser-based voice calls, and Gemini AI agentic chatbot for automated CRUD operations. Built with MERN stack for multi-tenant architecture.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Agora SDK', 'Gemini AI'],
    icon: Globe,
    railColor: 'neon-cyan',
    detailUrl: '/projects/tawasol-crm.html',
  },
  {
    id: 2,
    code: 'WEB_02',
    type: 'PRIVATE WEB APP',
    title: 'LOCALIZED PLAGIARISM DETECTION',
    subtitle: 'Offline AI Pipeline · Vector Search · Academic Focus',
    description:
      'Fully localized, offline academic AI pipeline utilizing React 19, FastAPI, SQLite with background job dispatching, ChromaDB vector storage, and local Ollama embeddings for semantic similarity detection without external APIs.',
    tech: ['React 19', 'FastAPI', 'SQLite', 'ChromaDB', 'Ollama', 'Python'],
    icon: Lock,
    railColor: 'neon-magenta',
    detailUrl: '/projects/plagiarism-checker.html',
  },
]

const automationWorkflows = [
  {
    id: 3,
    code: 'AUTO_01',
    type: 'AUTOMATION WORKFLOW',
    title: 'AUTOMATED NEWS PUBLISHING',
    subtitle: 'n8n · Multi-Agent AI · Facebook Graph API',
    description:
      'Fully autonomous AI-driven content curation and publishing engine. Multi-agent system scrapes global tech news via RSS, uses Gemini 2.5 Pro with LangChain to filter and rewrite stories, generates branded graphics programmatically, and publishes to Facebook via Graph API with database logging.',
    tech: ['n8n', 'LangChain', 'Gemini 2.5 Pro', 'Facebook Graph API', 'Google Sheets', 'Node.js'],
    icon: Zap,
    railColor: 'neon-amber',
    detailUrl: '/projects/binary-times.html',
  },
]

const desktopApplications = [
  {
    id: 4,
    code: 'DESK_01',
    type: 'WINDOWS DESKTOP APP',
    title: 'DEGUNK - SYSTEM OPTIMIZER',
    subtitle: 'C# · WPF · Windows API · RAM Optimization',
    description:
      'Windows desktop application that frees up system memory by pausing non-essential background applications for gaming. Features live RAM monitoring with Windows API interop, process tree termination with state persistence, Fluent Design UI with Mica/Acrylic backdrops, and one-click resume functionality.',
    tech: ['C#', '.NET 6.0', 'WPF', 'P/Invoke', 'Windows API', 'Inno Setup'],
    icon: Cpu,
    railColor: 'neon-magenta',
    detailUrl: '/projects/degunk.html',
  },
]

const Billboard = ({ project, index, sectionColor }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showScan, setShowScan] = useState(false)
  const Icon = project.icon
  const isCyan = project.railColor === 'neon-cyan'
  const isAmber = project.railColor === 'neon-amber'

  useEffect(() => {
    if (isInView) {
      setShowScan(true)
    }
  }, [isInView])

  return (
    <motion.article
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
    >
      {/* Billboard Container */}
      <div className={`relative overflow-hidden bg-asphalt/60 border border-chrome-700/30 hover:border-${project.railColor}/40 transition-all duration-500`}>
        
        {/* Scan Sweep Effect */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 z-20 ${showScan ? 'opacity-100' : 'opacity-0'}`}>
          <motion.div
            className={`h-full bg-gradient-to-r from-transparent via-${project.railColor} to-transparent`}
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '200%' } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: index * 0.15 + 0.2 }}
          />
        </div>

        {/* Left Neon Rail */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${project.railColor} opacity-60 group-hover:opacity-100 transition-all duration-500`}
          style={{
            boxShadow: isCyan 
              ? '0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)' 
              : isAmber
              ? '0 0 10px rgba(255, 181, 71, 0.5), 0 0 20px rgba(255, 181, 71, 0.3)'
              : '0 0 10px rgba(255, 43, 214, 0.5), 0 0 20px rgba(255, 43, 214, 0.3)'
          }}
        />

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-0">
          
          {/* Left Panel - Meta */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-chrome-700/30 bg-chrome/10">
            <div className="flex items-center gap-3 mb-6">
              <Icon className={`w-5 h-5 text-${project.railColor}`} />
              <span className={`font-mono text-xs tracking-widest text-${project.railColor}`}>
                {project.code}
              </span>
            </div>
            
            <div className="space-y-1">
              <span className="station-code block">TYPE</span>
              <span className="font-mono text-sm text-chrome-300 tracking-wide">
                {project.type}
              </span>
            </div>

            {/* Tech Codes */}
            <div className="mt-8 space-y-3">
              <span className="station-code block">STACK</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className={`font-mono text-xs px-2 py-1 bg-${project.railColor}/10 border border-${project.railColor}/20 text-chrome-400`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="p-6 md:p-8 relative">
            {/* Title */}
            <motion.h3 
              className="font-display text-3xl sm:text-4xl lg:text-5xl mb-3 tracking-tight leading-none"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            >
              <span className={`text-chrome-200 group-hover:text-${project.railColor} transition-colors duration-500`}>
                {project.title}
              </span>
            </motion.h3>

            {/* Subtitle */}
            <p className={`font-sub text-sm tracking-[0.2em] uppercase mb-6 text-${project.railColor}/80`}>
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-chrome-500 leading-relaxed mb-8 max-w-2xl">
              {project.description}
            </p>

            {/* Boarding Pass CTA */}
            <motion.a
              href={project.detailUrl}
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`boarding-pass relative px-6 py-3 bg-chrome/30 border border-${project.railColor}/30 hover:border-${project.railColor}/60 transition-all duration-300 group/btn inline-flex items-center gap-3 font-sub text-sm tracking-wider text-chrome-400 hover:text-${project.railColor} uppercase`}>
                View Details
                <ExternalLink className="w-4 h-4" />
              </span>
              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-${project.railColor}/60 pointer-events-none`} />
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-${project.railColor}/60 pointer-events-none`} />
            </motion.a>

            {/* Hover Glow */}
            <div 
              className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`}
              style={{
                background: isCyan 
                  ? 'radial-gradient(circle, rgba(0, 229, 255, 0.8) 0%, transparent 70%)' 
                  : isAmber
                  ? 'radial-gradient(circle, rgba(255, 181, 71, 0.8) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255, 43, 214, 0.8) 0%, transparent 70%)'
              }}
            />
          </div>
        </div>

        {/* Background Sheen */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${isCyan ? 'rgba(0, 229, 255, 0.02)' : isAmber ? 'rgba(255, 181, 71, 0.02)' : 'rgba(255, 43, 214, 0.02)'} 50%, transparent 100%)`
            }}
          />
        </div>
      </div>
    </motion.article>
  )
}

const SectionHeader = ({ icon: Icon, label, title, subtitle, color }) => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7 }}
  >
    {/* Category Label */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mb-4 flex items-center justify-center gap-2"
    >
      <Icon className={`w-4 h-4 text-${color}`} />
      <span className={`font-mono text-xs tracking-widest text-${color}`}>
        // {label}
      </span>
    </motion.div>
    
    {/* Section Title */}
    <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-4">
      <span className={`text-${color} glow-text-${color}`}>
        {title}
      </span>
    </h3>
    
    <p className="font-sub text-sm sm:text-base text-chrome-500 tracking-wide max-w-xl mx-auto">
      {subtitle}
    </p>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      {/* Main Section Header */}
      <motion.div
        className="text-center mb-20"
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
          <Sparkles className="w-4 h-4 text-neon-amber" />
          <span className="font-mono text-xs tracking-widest text-neon-cyan">
            // FEATURED
          </span>
        </motion.div>
        
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-4">
          <span className="text-gradient glow-text-magenta">
            BILLBOARDS
          </span>
        </h2>
        
        <p className="font-sub text-sm sm:text-base text-chrome-500 tracking-wide max-w-xl mx-auto">
          Selected engineering work showcasing system design and AI integration
        </p>
      </motion.div>

      {/* WEB APPLICATIONS */}
      <div className="max-w-5xl mx-auto mb-20">
        <SectionHeader
          icon={Monitor}
          label="CATEGORY_WEB"
          title="WEB APPLICATIONS"
          subtitle="Full-stack web platforms with real-time features and AI integration"
          color="neon-cyan"
        />
        
        <div className="space-y-8">
          {webApplications.map((project, index) => (
            <Billboard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* AUTOMATION WORKFLOWS */}
      <div className="max-w-5xl mx-auto mb-20">
        <SectionHeader
          icon={Workflow}
          label="CATEGORY_AUTO"
          title="AUTOMATION WORKFLOWS"
          subtitle="n8n-powered autonomous systems with multi-agent AI orchestration"
          color="neon-amber"
        />

        <div className="space-y-8">
          {automationWorkflows.map((project, index) => (
            <Billboard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* DESKTOP APPLICATIONS */}
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          icon={Cpu}
          label="CATEGORY_DESKTOP"
          title="DESKTOP APPLICATIONS"
          subtitle="Native Windows applications with system-level integration and modern UI"
          color="neon-magenta"
        />

        <div className="space-y-8">
          {desktopApplications.map((project, index) => (
            <Billboard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Transit Footer */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">DISPLAY</span>
          <span className="font-mono text-xs text-neon-magenta">
            {webApplications.length + automationWorkflows.length + desktopApplications.length}
          </span>
        </div>
        <div className="w-8 h-px bg-chrome-700 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">WEB_APPS</span>
          <span className="font-mono text-xs text-neon-cyan">{webApplications.length}</span>
        </div>
        <div className="w-8 h-px bg-chrome-700 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">AUTOMATION</span>
          <span className="font-mono text-xs text-neon-amber">{automationWorkflows.length}</span>
        </div>
        <div className="w-8 h-px bg-chrome-700 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-chrome-700">DESKTOP</span>
          <span className="font-mono text-xs text-neon-magenta">{desktopApplications.length}</span>
        </div>
      </motion.div>

      {/* Chrome Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-chrome-700/50 to-transparent" />
    </section>
  )
}

export default Projects
