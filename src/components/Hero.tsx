import { motion } from 'framer-motion'
import { slideUp, titleAnimation, letterAnimation } from '../lib/animations'

const Hero = () => {
  const titleText = "Hi! I'm Tejeshwar"

  return (
      <section id="home" className="py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="container px-4">
          <motion.div
              className="flex flex-col items-center justify-center text-center space-y-8"
              variants={slideUp}
              initial="hidden"
              animate="visible"
          >
            <motion.h1
                className="text-2xl md:text-4xl lg:text-5xl font-display tracking-tight"
                variants={titleAnimation}
                initial="hidden"
                animate="visible"
            >
              {titleText.split('').map((letter, index) => (
                  <motion.span
                      key={index}
                      className={index % 2 === 0 ? "neon-text" : "magenta-text"}
                      variants={letterAnimation}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
              ))}
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-[800px]"
                variants={slideUp}
            >
              I<span className="neon-text"> build</span>{" "}and
              <span className="magenta-text"> ship</span>, {" "}
              <span className="magenta-text">fast</span>
              <br/>Code full-stack apps, with a focus on backend
              <br/> Currently learning <span className="gold-text">TypeScript</span>
            </motion.p>

            <motion.div
                variants={slideUp}
                className="pt-6"
            >
              <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors
                border-2 border-primary text-primary hover:bg-primary/10 pixel-corners
                shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.7)]"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default Hero