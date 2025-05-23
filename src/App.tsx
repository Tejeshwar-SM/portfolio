import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Layout from './components/Layout'
import { ThemeProvider } from './components/theme-provider'
import { motion } from 'framer-motion'

const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 }
  }
}

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Layout>
          <Header />
          <motion.main
              variants={pageTransition}
              initial="hidden"
              animate="visible"
          >
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </motion.main>
          <Footer />
        </Layout>
      </ThemeProvider>
  )
}

export default App