import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'
import TimelinePage from './pages/TimelinePage'
import ParallaxStrips from './components/ParallaxStrips'
import CursorPixel from './components/CursorPixel'

function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

// Keyed on pathname so every route change triggers the CSS animation
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-enter">
      <Routes>
        <Route path="/"                  element={<Portfolio />}   />
        <Route path="/projects/:slug"    element={<ProjectPage />} />
        <Route path="/skills"            element={<SkillsPage />}   />
        <Route path="/timeline"          element={<TimelinePage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ParallaxStrips />
      <CursorPixel />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
