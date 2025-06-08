import { useState, useEffect } from 'react'

/**
 * Custom hook for handling responsive design and mobile detection
 * @param breakpoint - The width breakpoint for mobile detection (default: 768)
 * @returns Object containing isMobile state and responsive utilities
 */
export const useResponsive = (breakpoint: number = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [breakpoint])

    return { isMobile }
}
