import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RetroBadgeProps {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'accent'
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

const RetroBadge = ({
                        children,
                        color = 'primary',
                        className = '',
                        size = 'md'
                    }: RetroBadgeProps) => {

    const colorStyles = {
        primary: "border-primary text-primary shadow-[0_0_8px_rgba(57,255,20,0.5)]",
        secondary: "border-secondary text-secondary shadow-[0_0_8px_rgba(255,45,149,0.5)]",
        accent: "border-accent text-accent shadow-[0_0_8px_rgba(252,211,77,0.5)]"
    }

    const sizeStyles = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base"
    }

    return (
        <motion.span
            className={`inline-flex items-center justify-center border retro-border ${colorStyles[color]} ${sizeStyles[size]} ${className}`}
            whileHover={{
                boxShadow: color === 'primary'
                    ? '0 0 12px 4px rgba(57, 255, 20, 0.7)'
                    : color === 'secondary'
                        ? '0 0 12px 4px rgba(255, 45, 149, 0.7)'
                        : '0 0 12px 4px rgba(252, 211, 77, 0.7)',
                scale: 1.05
            }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.span>
    )
}

export default RetroBadge