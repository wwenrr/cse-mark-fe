import UserDropdown from './components/userdropdown'
import { useResponsive, useSidebar } from './hooks'
import { handleMenuButtonHoverEnter, handleMenuButtonHoverLeave } from './utils'
import { useChatStore } from '@/core/store/chat.store'
import { useParams } from 'react-router-dom'
import styles from './styles'

export default function Header() {
    const { isMobile } = useResponsive(768)
    const { toggleSidebar } = useSidebar(isMobile)
    const { getKeyById } = useChatStore()
    const { id } = useParams<{ id: string }>()

    return (
        <div style={{
            ...styles.header,
            ...(isMobile ? styles.headerMobile : {})
        }}>
            {isMobile && (
                <button
                    style={styles.menuButton}
                    onClick={toggleSidebar}
                    onMouseEnter={handleMenuButtonHoverEnter}
                    onMouseLeave={handleMenuButtonHoverLeave}
                >
                    ☰
                </button>
            )}
            <div style={styles.headerTitle}>{id ? getKeyById(id) : 'Cuộc hội thoại'}</div>
            <div style={styles.userSection}>
                <UserDropdown />
            </div>
        </div>
    );
}