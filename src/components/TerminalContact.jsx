import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

const TerminalContact = () => {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [showJson, setShowJson] = useState(false)

  const firstLine = '> fetching developer_status...'
  // JSON content preserved exactly as in original
  const jsonLine = '> { location: "Dhaka, Bangladesh", status: "Architecting Agentic AI Workflows", university: "North South University" }'

  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= firstLine.length) {
        setTypedText(firstLine.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setShowJson(true)
        }, 500)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Social links preserved exactly as in original
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AmanurRahman101',
      icon: Github,
      color: 'neon-magenta',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amanur-rahman-2a8833385',
      icon: Linkedin,
      color: 'neon-cyan',
    },
    {
      name: 'Email',
      url: 'mailto:rahmanamanur51@gmail.com',
      icon: Mail,
      color: 'neon-magenta',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Chrome Top Border to match billboards */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Window */}
        <div className="relative overflow-hidden bg-chrome/60 border border-chrome-700/40 shadow-glow-cyan/10">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-asphalt/80 border-b border-chrome-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-magenta" />
              <div className="w-3 h-3 rounded-full bg-neon-amber" />
              <div className="w-3 h-3 rounded-full bg-neon-cyan" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-xs text-chrome-500 flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3" />
                developer@amanur-rahman:~$
              </span>
            </div>
            <div className="w-14" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm sm:text-base">
            {/* Typing Line */}
            <div className="mb-2">
              <span className="text-neon-cyan">➜</span>{' '}
              <span className="text-neon-magenta">~</span>{' '}
              <span className="text-chrome-300">{typedText}</span>
              <span
                className={`inline-block w-2 h-4 bg-neon-cyan ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>

            {/* JSON Output - COLORS SWAPPED to Neo Tokyo palette */}
            {showJson && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-chrome-400 mb-8 leading-relaxed"
              >
                <span className="text-neon-magenta">{'{'}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-neon-cyan">location</span>
                    <span className="text-chrome-600">: </span>
                    <span className="text-neon-amber">"Dhaka, Bangladesh"</span>
                    <span className="text-chrome-600">,</span>
                  </div>
                  <div>
                    <span className="text-neon-cyan">status</span>
                    <span className="text-chrome-600">: </span>
                    <span className="text-neon-amber">"Architecting Agentic AI Workflows"</span>
                    <span className="text-chrome-600">,</span>
                  </div>
                  <div>
                    <span className="text-neon-cyan">university</span>
                    <span className="text-chrome-600">: </span>
                    <span className="text-neon-amber">"North South University"</span>
                  </div>
                </div>
                <span className="text-neon-magenta">{'}'}</span>
              </motion.div>
            )}

            {/* Empty prompt */}
            <div className="text-chrome-700 mb-6">
              <span className="text-neon-cyan">➜</span>{' '}
              <span className="text-neon-magenta">~</span>{' '}
              <span className="animate-pulse">_</span>
            </div>

            {/* Links Section */}
            <div className="border-t border-chrome-700/50 pt-6">
              <p className="text-chrome-600 text-xs mb-4 uppercase tracking-wider font-mono">
                // Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  const isCyan = link.color === 'neon-cyan'
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-2 px-4 py-2 bg-asphalt/50 border border-chrome-700/30 hover:border-neon-cyan/50 hover:bg-asphalt/80 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon
                        className={`w-4 h-4 text-chrome-600 transition-colors duration-300 ${
                          isCyan ? 'group-hover:text-neon-cyan' : 'group-hover:text-neon-magenta'
                        }`}
                      />
                      <span className="font-mono text-sm text-chrome-500 group-hover:text-chrome-300 transition-colors duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Background Glows - Swapped to Neo Tokyo colors */}
          <div 
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 43, 214, 0.4) 0%, transparent 70%)'
            }}
          />
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-chrome-600 text-xs mt-8 font-mono tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          © 2026 Amanur Rahman · System Designer & Software Engineer
        </motion.p>
      </motion.div>
    </section>
  )
}

export default TerminalContact
