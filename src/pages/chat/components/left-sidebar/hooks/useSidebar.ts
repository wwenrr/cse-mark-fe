import { useState, useEffect } from 'react'

/**
 * Custom hook for managing sidebar state with responsive behavior
 * @param isMobile - Whether the current view is mobile
 * @returns Object containing sidebar state and control functions
 */
export const useSidebar = (isMobile: boolean) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        if (!isMobile && sidebarOpen) {
            setSidebarOpen(false)
        }
    }, [isMobile, sidebarOpen])

    return {
        sidebarOpen,
        setSidebarOpen,
        closeSidebar: () => setSidebarOpen(false)
    }
}
