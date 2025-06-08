export const handleSearchFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)'
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
}

export const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)'
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
}

export const createChatItemHoverHandler = (activeChat: string) => 
    (e: React.MouseEvent<HTMLDivElement>, chatId: string, isEnter: boolean) => {
        if (activeChat !== chatId) {
            if (isEnter) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
            } else {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                e.currentTarget.style.border = '1px solid transparent'
            }
        }
    }

export const createChatClickHandler = (
    activeChat: string,
    setActiveChat: (chatId: string) => void,
    isMobile: boolean,
    closeSidebar: () => void
) => (chatId: string) => {
    console.log('Chat clicked:', chatId)
    if (activeChat === chatId) {
        setActiveChat('')
    } else {
        setActiveChat(chatId)
    }
    if (isMobile) {
        closeSidebar()
    }
}