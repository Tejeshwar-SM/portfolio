import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80">
        <div className="container px-4 py-4 flex items-center justify-between">
          <a
              href="#home"
              className="text-xl font-display neon-text"
          >
            /dev
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
              className="inline-flex items-center justify-center md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
          >
            {isOpen ? (
                <X className="h-6 w-6 text-primary" />
            ) : (
                <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
            <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
            >
              <div className="container px-4 pb-4 flex flex-col space-y-4 retro-border mt-2 mb-2 mx-4">
                {navItems.map(item => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium py-2 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                ))}
              </div>
            </motion.div>
        )}
      </header>
  )
}

export default Header