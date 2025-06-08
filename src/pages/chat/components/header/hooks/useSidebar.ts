import { useState, useEffect } from 'react'

/**
 * Custom hook for managing sidebar state with responsive behavior
 * @param isMobile - Whether the current view is mobile
 * @returns Object containing sidebar state and toggle function
 */
export const useSidebar = (isMobile: boolean) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // Auto-close sidebar when switching from mobile to desktop
    useEffect(() => {
        if (!isMobile && sidebarOpen) {
            setSidebarOpen(false)
        }
    }, [isMobile, sidebarOpen])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    return {
        sidebarOpen,
        toggleSidebar,
        closeSidebar,
        openSidebar
    }
}
