import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import TerminalContact from './components/TerminalContact'

function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-chrome-200 font-sans overflow-x-hidden" style={{ backgroundColor: '#05060a' }}>
      {/* Atmospheric Overlay Layers */}
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-40" />
      
      {/* Rain Drift */}
      <div className="fixed inset-0 pointer-events-none z-40 rain-drift opacity-50" />
      
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-30 vignette" />
      
      {/* Horizon Glow */}
      <div className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none z-20 horizon-glow" />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <TerminalContact />
      </main>
    </div>
  )
}

export default App
