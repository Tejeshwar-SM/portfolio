import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github,  Linkedin } from 'lucide-react'
// import { Mail, Github, Twitter, Linkedin } from 'lucide-react'
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
            'service_4g0xizr',      // ← your EmailJS Service ID
            'template_logspbm',     // ← your EmailJS Template ID
            form.current!,         // ← the form ref
            'QMbOZNxxytHlyrEsV'     // ← your EmailJS Public Key
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
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="mt-2 text-muted-foreground">
                  I&rsquo;m currently available for freelance work or full-time
                  positions. Let&rsquo;s build something amazing together!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <a
                    href="mailto:work10tejeshwar@gmail.com"
                    className="text-muted-foreground hover:text-foreground cursor-pointer-hover"
                >
                  work10tejeshwar@gmail.com
                </a>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                      href="https://github.com/Tejeshwar-SM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-background shadow-sm border border-input hover:bg-accent transition-colors cursor-pointer-hover"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  {/*<a*/}
                  {/*    href="https://x.com/Prsnecadmiral"*/}
                  {/*    target="_blank"*/}
                  {/*    rel="noopener noreferrer"*/}
                  {/*    className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-background shadow-sm border border-input hover:bg-accent transition-colors cursor-pointer-hover"*/}
                  {/*>*/}
                  {/*  <Twitter className="h-6 w-6" />*/}
                  {/*  <span className="sr-only">Twitter</span>*/}
                  {/*</a>*/}
                  <a
                      href="https://www.linkedin.com/in/tejeshwar-singh-71b115229/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-background shadow-sm border border-input hover:bg-accent transition-colors cursor-pointer-hover"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                className="rounded-lg border bg-card p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
              {isSubmitted ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I&rsquo;ll get back to you as soon
                      as possible.
                    </p>
                  </div>
              ) : (
                  <form
                      ref={form}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                  >
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
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-text"
                          placeholder="Your name"
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
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-text"
                          placeholder="your.email@example.com"
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
                          required
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-text"
                          placeholder="Your message"
                      />
                    </div>

                    {error && (
                        <div className="text-sm text-red-500">{error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer-hover"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default Contact