import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background font-mono relative overflow-hidden">
            <div className="scanlines max-w-[1400px] mx-auto">
                <div className="retro-border m-4 md:m-6 p-4 md:p-6 min-h-[calc(100vh-32px)] pixel-corners bg-background">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout