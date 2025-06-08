// Styles only for what's actually used in LeftSidebar component
export const styles = {
    sidebar: {
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100vh',
        overflowY: 'auto' as const,
        zIndex: 100,
        transition: 'transform 0.3s ease',
    },

    sidebarMobile: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '300px',
        height: '100vh',
        background: 'rgba(12, 12, 12, 0.95)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
    },

    sidebarMobileOpen: {
        transform: 'translateX(0)',
    },

    sidebarHeader: {
        padding: '20px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(255, 255, 255, 0.02)',
    },

    sidebarTitle: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '16px',
    },

    searchInput: {
        width: '100%',
        padding: '12px 16px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '10px',
        color: '#ffffff',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
    },

    chatHistory: {
        flex: 1,
        padding: '16px',
        overflowY: 'auto' as const,
    },    chatHistoryItem: {
        padding: '12px 16px',
        margin: '4px 0',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid transparent',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        overflow: 'hidden',
    },    
    chatHistoryItemActive: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },    
    editIcon: {
        width: '16px',
        height: '16px',
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'opacity 0.2s ease',
    },

    chatItemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },

    chatItemContent: {
        flex: 1,
        overflow: 'hidden',
    },

    editInput: {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '0',
        color: '#ffffff',
        fontSize: '14px',
        padding: '6px 0',
        outline: 'none',
        width: '85%',
        minHeight: '24px',
    },
} as const
