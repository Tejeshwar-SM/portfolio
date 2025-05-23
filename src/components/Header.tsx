import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ScrollLink from './ScrollLink'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        {/* Removed border-b border-muted */}
        <div className="container px-4 flex justify-between items-center h-16">
          <ScrollLink href="#home" className="font-display text-xl neon-text">
            /dev
          </ScrollLink>

          {/* Mobile menu toggle */}
          <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ScrollLink href="#home" className="text-sm hover:text-primary transition">
              Home
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm hover:text-primary transition">
              Projects
            </ScrollLink>
            <ScrollLink href="#skills" className="text-sm hover:text-primary transition">
              Skills
            </ScrollLink>
            <ScrollLink href="#contact" className="text-sm hover:text-primary transition">
              Contact
            </ScrollLink>
          </nav>

          {/* Mobile navigation */}
          {isOpen && (
              <motion.div
                  className="absolute top-16 left-0 right-0 bg-card border-b border-border p-4 md:hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
              >
                <nav className="flex flex-col space-y-4">
                  <ScrollLink
                      href="#home"
                      className="text-sm hover:text-primary transition py-2"
                      onClick={() => setIsOpen(false)}
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                      href="#projects"
                      className="text-sm hover:text-primary transition py-2"
                      onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </ScrollLink>
                  <ScrollLink
                      href="#skills"
                      className="text-sm hover:text-primary transition py-2"
                      onClick={() => setIsOpen(false)}
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                      href="#contact"
                      className="text-sm hover:text-primary transition py-2"
                      onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </nav>
              </motion.div>
          )}
        </div>
      </header>
  )
}

export default Header