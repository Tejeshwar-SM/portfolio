import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { staggerContainer, slideUp } from '../lib/animations'

interface ProjectProps {
  title: string
  description: string
  techs: string[]
  liveUrl: string
  githubUrl: string
  image: string
}

const projectData: ProjectProps[] = [
  {
    title: "FocusBuddy",
    description: "A full stack productivity app with  React, TypeScript and Express",
    techs: ["React", "TypeScript", "Express", "Tailwind CSS", "MongoDB", "AWS"],
    liveUrl: "https://www.focusbuddy.me",
    githubUrl: "https://github.com/Tejeshwar-SM/FocusManager",
    image: "/assets/images/project1.jpg"
  },
  {
    title: "Construction Management",
    description: "A complete solution for construction companies to manage their projects, tasks and finances. Built with EJS, Express, MongoDB and Cloudinary.",
    techs: ["EJS","JavaScript", "Express", "MongoDB", "Cloudinary"],
    liveUrl: "https://constructionmanagement-jwdr.onrender.com/",
    githubUrl: "https://github.com/VNITCiv-FinalYearProject/ProjectManagement",
    image: "/assets/images/project2.jpg"
  },
  {
    title: "Dashboard App",
    description: "Interactive analytics dashboard with real-time data visualization and user management",
    techs: ["React", "Chart.js", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/assets/images/project3.jpg"
  },
  {
    title: "Task Manager",
    description: "Collaborative task management application with drag and drop interface and team features",
    techs: ["TypeScript", "React Query", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/assets/images/project4.jpg"
  }
]

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
      <motion.div
          className="retro-border p-5 bg-card rounded-none pixel-corners"
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(57, 255, 20, 0.7)" }}
          transition={{ duration: 0.2 }}
          variants={slideUp}
      >
        <div className="h-48 mb-4 overflow-hidden bg-muted pixel-corners">
          {/* Placeholder for project image */}
          <div className="h-full w-full flex items-center justify-center bg-muted text-muted-foreground">
            {project.title[0]}
          </div>
        </div>

        <h3 className="text-lg font-display mb-2 magenta-text">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted text-primary rounded-sm">
              {tech}
            </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </div>
      </motion.div>
  )
}

const Projects = () => {
  return (
      <section id="projects" className="py-16 md:py-24">
        <div className="container px-4">
          <motion.h2
              className="text-2xl md:text-3xl font-display mb-12 text-center neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>

          <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
          >
            {projectData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default Projects