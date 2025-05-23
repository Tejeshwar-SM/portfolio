import { ReactNode } from 'react';

interface ScrollLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const ScrollLink = ({ href, children, className = '', onClick }: ScrollLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Add a small delay for visual effect
            setTimeout(() => {
                // Improved scrolling with better positioning
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });

                // Optional: Update URL hash without causing a scroll
                history.pushState(null, '', href);
            }, 50);
        }

        // Call the passed onClick handler if provided
        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`cursor-pointer-hover ${className}`}
        >
            {children}
        </a>
    );
};

export default ScrollLink;