const styles = {
    avatar: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: '600',
        cursor: 'pointer',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.2s ease',
        fontSize: '16px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },

    dropdown: {
        background: 'rgba(20, 20, 20, 0.95)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderRadius: '12px',
        border: 'none',
        padding: '0',
        minWidth: '200px',
        color: '#ffffff',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
    },

    dropdownHeader: {
        padding: '16px',
        background: 'rgba(255, 255, 255, 0.02)',
    },

    dropdownName: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '4px',
    },

    dropdownEmail: {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.7)',
    },

    dropdownButton: {
        width: '100%',
        padding: '14px 16px',
        background: 'transparent',
        border: 'none',
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        textAlign: 'left' as const,
        fontWeight: '500',
    },
} as const

export default styles