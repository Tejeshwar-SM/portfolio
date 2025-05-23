import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react'
import { slideUp } from '../lib/animations'
// import { staggerContainer, slideUp } from '../lib/animations'
import { useRef, useState, useEffect } from 'react'

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
    description: "A full stack productivity app with pomodoro timers, calendar, journals and a real-time leaderboard. Built with React, TypeScript and Express",
    techs: ["React", "TypeScript", "Express", "Tailwind CSS", "MongoDB", "AWS"],
    liveUrl: "https://www.focusbuddy.me",
    githubUrl: "https://github.com/Tejeshwar-SM/FocusManager",
    image: "/assets/project1.png"
  },
  {
    title: "Construction Management",
    description: "A complete solution for construction companies to manage their projects, tasks and finances. Built with EJS, Express, MongoDB and Cloudinary.",
    techs: ["EJS", "JavaScript", "Express", "MongoDB", "Cloudinary"],
    liveUrl: "https://constructionmanagement-jwdr.onrender.com/",
    githubUrl: "https://github.com/VNITCiv-FinalYearProject/ProjectManagement",
    image: "/assets/project2.png"
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
          className="retro-border bg-card rounded-none pixel-corners flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] h-[500px] flex flex-col"
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(57, 255, 20, 0.7)" }}
          transition={{ duration: 0.2 }}
          variants={slideUp}
      >
        <div className="aspect-square w-full overflow-hidden bg-muted relative group">
          <motion.div
              className="absolute inset-0 border-2 border-primary z-10 pixel-corners"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
          />
          <motion.img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/fallback.png"
              }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-display mb-2 magenta-text">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

          <div className="mb-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-muted text-primary rounded-sm">
                {tech}
              </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-primary transition-colors cursor-pointer-hover"
            >
              <Github className="h-4 w-4" /> Code
            </a>
            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:text-primary transition-colors cursor-pointer-hover"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
  )
}

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Check if scroll buttons should be visible
  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 20);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 20);
  };

  // Attach scroll listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      // Check initially
      checkScrollButtons();

      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
      <section id="projects" className="py-16 md:py-24 relative">
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

          <div className="relative">
            {/* Scroll Left Button */}
            {showLeftScroll && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 border border-primary cursor-pointer-hover"
                    aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </button>
            )}

            {/* Scroll Right Button */}
            {showRightScroll && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 border border-primary cursor-pointer-hover"
                    aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </button>
            )}

            {/* Horizontal Scrolling Container */}
            <motion.div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 pt-2 px-2 -mx-2 snap-x snap-mandatory scroll-smooth scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {projectData.map((project, index) => (
                  <motion.div
                      key={index}
                      variants={slideUp}
                      className="snap-center"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          {/*<div className="flex justify-center mt-6 gap-2">*/}
          {/*  {projectData.map((_, index) => (*/}
          {/*      <div*/}
          {/*          key={index}*/}
          {/*          className="w-2 h-2 rounded-full bg-muted-foreground"*/}
          {/*          style={{ opacity: index === 0 ? 1 : 0.5 }}*/}
          {/*      />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </section>
  )
}


export default Projects