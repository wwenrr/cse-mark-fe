const styles = {
    header: {
        padding: '16px 24px',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        minHeight: '70px',
        zIndex: 50,
    },

    headerMobile: {
        padding: '16px 20px',
        display: 'grid',
        gridTemplateColumns: '40px 1fr auto',
        alignItems: 'center',
        gap: '16px',
    },

    menuButton: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
    },

    headerTitle: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#ffffff',
    },

    userSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
} as const

export default styles;