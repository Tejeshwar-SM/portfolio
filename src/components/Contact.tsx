import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setIsSubmitting(false)
          setIsSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setIsSubmitted(false), 5000)
        })
        .catch(err => {
          setIsSubmitting(false)
          setError('Failed to send message. Please try again later.')
          console.error('EmailJS Error:', err)
        })
  }

  return (
      <section id="contact" className="py-24 pt-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display neon-text">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold magenta-text">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">
                  I&rsquo;m currently available for freelance work or full-time
                  positions. Let&rsquo;s build something amazing together!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:tejeshwarssm@gmail.com" className="text-primary hover:underline">
                  tejeshwarssm@gmail.com
                </a>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold gold-text">Connect with me</h4>
                <div className="flex items-center gap-4">
                  <a
                      href="https://github.com/Tejeshwar-SM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/tejeshwar-singh-71b115229/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                className="rounded-lg border border-border bg-card p-6 shadow-sm retro-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
              {isSubmitted ? (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <h3 className="mb-2 text-xl font-semibold neon-text">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
              ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Your name"
                          required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Your email"
                          required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Your message"
                          required
                      ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                    )}
                  </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default Contact