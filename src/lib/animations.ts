import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
}

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const glowPulse: Variants = {
    hover: {
        boxShadow: "0 0 12px 4px rgba(57, 255, 20, 0.9)",
        borderColor: "rgba(57, 255, 20, 1)",
        scale: 1.05,
        transition: { duration: 0.3 }
    }
}

export const hoverScale: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.3 }
    }
}

export const titleAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
}