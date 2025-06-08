import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { useUserStore } from '@/core/store/user.store';
import styles from './styles'

const UserDropdown = () => {
    const { getUser } = useUserStore();
    const user = getUser();

    const dropdownContent = (
        <div style={styles.dropdown}>
            <div style={styles.dropdownHeader}>
                <div style={styles.dropdownName}>{user?.name}</div>
                <div style={styles.dropdownEmail}>{user?.email}</div>
            </div>
            <button
                style={styles.dropdownButton}
                onClick={() => console.log('Settings clicked')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                }}
            >
                Cài đặt
            </button>

            <button
                style={styles.dropdownButton}
                onClick={() => console.log('Help clicked')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                }}
            >
                Trợ giúp
            </button>

            <button
                style={styles.dropdownButton}
                onClick={() => console.log('FAQ clicked')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                }}
            >
                Câu hỏi thường gặp
            </button>

            <button
                style={{
                    ...styles.dropdownButton,
                    borderBottom: 'none',
                    color: '#ff6b6b'
                }}
                onClick={() => console.log(window.location.href = '/')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 107, 107, 0.1)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                }}
            >
                Đăng xuất
            </button>
        </div>
    )

    return (
        <Tippy
            content={dropdownContent}
            interactive={true}
            trigger="click"
            placement="bottom-end"
            animation="fade"
        >
            <div
                style={styles.avatar}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}            >
                {user?.picture ? (
                    <img 
                        src={user.picture} 
                        alt={user.name || 'User'} 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                ) : (
                    user?.name?.charAt(0)?.toUpperCase() || 'U'
                )}
            </div>
        </Tippy>
    )
}

export default UserDropdown;