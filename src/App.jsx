import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import './index.css'
import './App.css'

export default function App() {
  return(
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
