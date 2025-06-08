import { useState } from 'react'
import { styles } from './styles'
import { useResponsive, useSidebar } from './hooks'
import {
    handleSearchFocus,
    handleSearchBlur,
    createChatItemHoverHandler,
} from './utils'
import { useChatStore } from '@/core/store/chat.store'
import { useNavigate } from 'react-router-dom';

export default function LeftSidebar() {
    const [activeChat, setActiveChat] = useState(useChatStore(state => state.activeKeyId) || '')
    const [searchValue, setSearchValue] = useState('')
    const [editingChat, setEditingChat] = useState<string | null>(null)
    const [editValue, setEditValue] = useState('')
    const { isMobile } = useResponsive(768)
    const { sidebarOpen, closeSidebar } = useSidebar(isMobile)
    const navigate = useNavigate();
    const { setActiveKeyId, updateDescription, getKeyList } = useChatStore()
    const keyList = getKeyList();

    const handleChatItemHover = createChatItemHoverHandler(activeChat)

    const filteredChats = keyList.filter(chat => {
        return chat.key.toLowerCase().includes(searchValue.toLowerCase())
    }
    )

    const createChatClickHandler = (chatId: string) => {
        console.log('Chat clicked:', chatId)
        if (activeChat === chatId) {
            setActiveChat('')
            setActiveKeyId(null)
            navigate(`/chat${location.search}`);
        } else {
            setActiveChat(chatId)
            setActiveKeyId(chatId)
            navigate(`/chat/${chatId}${location.search}`);
        }
        if (isMobile) {
            closeSidebar()
        }
    }

    const handleEditClick = (e: React.MouseEvent, chatId: string, currentDescription: string) => {
        e.stopPropagation()
        setEditingChat(chatId)
        setEditValue(currentDescription)
    }

    const handleEditSave = (chatId: string) => {
        console.log('Edit saved for chat:', chatId, 'New description:', editValue)
        setEditingChat(null)
        setEditValue('')
    }

    const handleEditBlur = (chatId: string) => {
        handleEditSave(chatId)
        updateDescription(chatId, editValue)
    }

    const handleEditKeyPress = (e: React.KeyboardEvent, chatId: string) => {
        if (e.key === 'Enter') {
            handleEditSave(chatId)
            updateDescription(chatId, editValue)
        } else if (e.key === 'Escape') {
            setEditingChat(null)
            setEditValue('')
        }
    }

    return (
        <div style={{
            ...styles.sidebar,
            ...(isMobile ? {
                ...styles.sidebarMobile,
                ...(sidebarOpen ? styles.sidebarMobileOpen : {})
            } : {})
        }}>
            <div style={styles.sidebarHeader}>
                <div style={styles.sidebarTitle}>Chat CSE</div>
                <input
                    style={styles.searchInput}
                    type="text"
                    placeholder="Tìm kiếm cuộc hội thoại..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                />
            </div>            <div style={styles.chatHistory}>
                {filteredChats.map((chat) => (
                    <div
                        key={chat.id}
                        style={{
                            ...styles.chatHistoryItem,
                            ...(activeChat === chat.id ? styles.chatHistoryItemActive : {})
                        }}
                        onClick={() => createChatClickHandler(chat.id)}
                        onMouseEnter={(e) => handleChatItemHover(e, chat.id, true)}
                        onMouseLeave={(e) => handleChatItemHover(e, chat.id, false)}
                    >                        <div style={styles.chatItemContainer}>
                            <div style={styles.chatItemContent}>
                                {editingChat === chat.id ? (
                                    <input
                                        style={styles.editInput}
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onKeyPress={(e) => handleEditKeyPress(e, chat.id)}
                                        onBlur={() => handleEditBlur(chat.id)}
                                        onClick={(e) => e.stopPropagation()}
                                        autoFocus
                                    />
                                ) : (
                                    <span>{chat.key} - {chat.description ? chat.description : 'Mô tả trống'}</span>
                                )}                            </div>
                                {activeChat === chat.id && <img
                                    src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                                    alt="Edit"
                                    style={styles.editIcon}
                                    onClick={(e) => handleEditClick(e, chat.id, chat.description)}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                                />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}