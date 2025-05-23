import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
// import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  // const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-6 w-6 mx-1" />, url: 'https://github.com/Tejeshwar-SM' },
    { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6 mx-1" />, url: 'https://www.linkedin.com/in/tejeshwar-singh-71b115229/' }
  ]
    // { name: 'Twitter', icon: <Twitter className="h-6 w-6" />, url: 'https://twitter.com/' }

  return (
      <footer className="py-8 border-t border-muted mt-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
              >
                <span className="neon-text">Thanks for visiting!</span> <span className="magenta-text"> &lt;3</span>
              </motion.p>
            </div>

            <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
              {socialLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer-hover"
                      aria-label={link.name}
                  >
                    {link.icon}
                  </a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
  )
}

export default Footer