import type { MouseEvent } from 'react'

/**
 * Utility functions for handling button interactions
 */

/**
 * Handler for menu button hover enter effect
 * @param event - Mouse event from the button
 */
export const handleMenuButtonHoverEnter = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
    event.currentTarget.style.transform = 'scale(1.05)'
}

/**
 * Handler for menu button hover leave effect
 * @param event - Mouse event from the button
 */
export const handleMenuButtonHoverLeave = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
    event.currentTarget.style.transform = 'scale(1)'
}

/**
 * Creates hover handlers for interactive buttons
 * @param hoverStyles - Styles to apply on hover
 * @param defaultStyles - Default styles to restore on leave
 * @returns Object with onMouseEnter and onMouseLeave handlers
 */
export const createButtonHoverHandlers = (
    hoverStyles: Record<string, string>,
    defaultStyles: Record<string, string>
) => ({
    onMouseEnter: (event: MouseEvent<HTMLButtonElement>) => {
        Object.entries(hoverStyles).forEach(([property, value]) => {
            event.currentTarget.style[property as any] = value
        })
    },
    onMouseLeave: (event: MouseEvent<HTMLButtonElement>) => {
        Object.entries(defaultStyles).forEach(([property, value]) => {
            event.currentTarget.style[property as any] = value
        })
    }
})

/**
 * Default hover configuration for menu button
 */
export const menuButtonHoverConfig = {
    hoverStyles: {
        background: 'rgba(255, 255, 255, 0.12)',
        transform: 'scale(1.05)'
    },
    defaultStyles: {
        background: 'rgba(255, 255, 255, 0.08)',
        transform: 'scale(1)'
    }
}
