import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education, { Activities } from './components/Education'
import Contact from './components/Contact'
import Footer, { BackToTop } from './components/Footer'
import Resume from './components/Resume'

// Page order — section numbers (01, 02…) follow this list automatically.
// Keep in sync with SECTIONS in Navbar.jsx.
const SECTIONS = [About, Education, Experience, Projects, Skills, Activities, Resume, Contact]

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {SECTIONS.map((Component, i) => (
          <Component key={i} index={i + 1} />
        ))}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
