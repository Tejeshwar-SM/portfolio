import { motion } from 'framer-motion'
import { staggerContainer, glowPulse } from '../lib/animations'

interface SkillCategoryProps {
    title: string
    skills: string[]
}

const skillsData: SkillCategoryProps[] = [
    {
        title: "Frontend",
        skills: [
            "TypeScript/JavaScript",
            "React",
            "HTML/CSS",
            "Tailwind CSS",
            "Framer Motion",
        ]
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Java",
            "Python",
            "Django",
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            "Git & Version Control",
            "Docker Containerization",
            "AWS Cloud (EC2/S3/CDN)",
            "Linux (Xubuntu)",
        ]
    }
]

const SkillBadge = ({ skill }: { skill: string }) => {
    return (
        <motion.div
            className="inline-block px-4 py-2 border border-primary text-sm rounded-sm retro-border cursor-pointer-hover"
            whileHover="hover"
            variants={glowPulse}
        >
            {skill}
        </motion.div>
    )
}

const SkillCategory = ({ category }: { category: SkillCategoryProps }) => {
    return (
        <motion.div
            className="mb-8"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
        >
            <h3 className="text-xl font-display mb-4 magenta-text">{category.title}</h3>

            <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
            >
                {category.skills.map((skill) => (
                    <motion.div key={skill} variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { type: "spring" } }
                    }}>
                        <SkillBadge skill={skill} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-36 bg-card/30">
            <div className="container px-4">
                <motion.h2
                    className="text-2xl md:text-3xl font-display mb-12 text-center neon-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    SKILLS
                </motion.h2>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillsData.map((category, index) => (
                        <SkillCategory key={index} category={category} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills