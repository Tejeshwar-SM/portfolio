import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RetroButtonProps {
    children: ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
    href?: string
    variant?: 'primary' | 'secondary' | 'outline'
}

const RetroButton = ({
                         children,
                         onClick,
                         type = 'button',
                         className = '',
                         disabled = false,
                         href,
                         variant = 'primary',
                     }: RetroButtonProps) => {

    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors pixel-corners"

    const variantStyles = {
        primary: "border-2 border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(57,255,20,0.5)] hover:shadow-[0_0_15px_rgba(57,255,20,0.7)]",
        secondary: "border-2 border-secondary text-secondary hover:bg-secondary/10 shadow-[0_0_10px_rgba(255,45,149,0.5)] hover:shadow-[0_0_15px_rgba(255,45,149,0.7)]",
        outline: "border-2 border-muted text-foreground hover:border-primary hover:text-primary"
    }

    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

    // Animation variants
    const buttonVariants = {
        hover: {
            scale: 1.02,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.1 }
        }
    }

    // If href is provided, render an anchor tag
    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
            >
                {children}
            </motion.a>
        )
    }

    // Otherwise render a button
    return (
        <motion.button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            whileHover={!disabled ? "hover" : undefined}
            whileTap={!disabled ? "tap" : undefined}
            variants={buttonVariants}
        >
            {children}
        </motion.button>
    )
}

export default RetroButton