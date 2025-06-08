import React from 'react'
import ReactJson from '@microlink/react-json-view'
import { useChatStore } from '@/core/store/chat.store'

// Style constants for chat messages
const styles = {
    chatMessages: {
        flex: 1,
        padding: '20px',
        overflowY: 'auto' as const,
        paddingBottom: '100px',
    },

    chatMessagesMobile: {
        padding: '16px',
        paddingBottom: '120px',
    },

    messageContainer: {
        display: 'flex',
        marginBottom: '16px',
        gap: '12px',
    },

    messageContainerUser: {
        justifyContent: 'flex-end',
    },

    messageContainerBot: {
        justifyContent: 'flex-start',
    },

    messageBubble: {
        maxWidth: '70%',
        padding: '12px 16px 20px 16px',
        borderRadius: '18px',
        fontSize: '14px',
        lineHeight: '1.4',
        wordWrap: 'break-word' as const,
        position: 'relative' as const,
    },

    messageBubbleMobile: {
        maxWidth: '85%',
        fontSize: '15px',
        padding: '10px 14px 18px 14px',
    },

    messageBubbleUser: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#ffffff',
        borderBottomRightRadius: '6px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },

    messageBubbleBot: {
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        borderBottomLeftRadius: '6px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },

    jsonContainer: {
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        padding: '8px',
        marginTop: '8px',
    },

    messageTimestampInBubble: {
        position: 'absolute' as const,
        bottom: '4px',
        right: '8px',
        fontSize: '9px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontWeight: '400',
        pointerEvents: 'none' as const,
    },

    messageTimestampInBubbleUser: {
        right: '8px',
    },

    messageTimestampInBubbleBot: {
        right: '8px',
    },

    timeDivider: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
        gap: '12px',
    },

    timeDividerLine: {
        flex: 1,
        height: '1px',
        background: 'rgba(255, 255, 255, 0.2)',
    },

    timeDividerText: {
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: '500',
        whiteSpace: 'nowrap' as const,
        padding: '0 8px',
    },
} as const

// Helper function to format timestamp for display inside message bubbles
const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

const formatRelativeTime = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / (1000 * 60))

    if (minutes < 1) return 'Vừa xong'
    if (minutes < 60) return `${minutes} phút trước`

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} giờ trước`

    const days = Math.floor(hours / 24)
    return `${days} ngày trước`
}

export default function ChatMessage() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
    const { getMessages } = useChatStore()
    const messagesEndRef = React.useRef<HTMLDivElement>(null)
    
    const messages = getMessages()
    
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
      // Scroll to bottom when messages change
    React.useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        scrollToBottom()
    }, [messages]) // Cuộn khi messages thay đổi

    return (
        <div style={{
            ...styles.chatMessages,
            ...(isMobile ? styles.chatMessagesMobile : {})
        }}>
            {messages.map((message, index) => {
                const showTimeDivider = index > 0 &&
                    (message.timestamp - messages[index - 1].timestamp) > 5 * 60 * 1000;

                return (
                    <React.Fragment key={message.id}>
                        {showTimeDivider && (
                            <div style={styles.timeDivider}>
                                <div style={styles.timeDividerLine}></div>
                                <div style={styles.timeDividerText}>
                                    {formatRelativeTime(message.timestamp)}
                                </div>
                                <div style={styles.timeDividerLine}></div>
                            </div>
                        )}

                        <div
                            style={{
                                ...styles.messageContainer,
                                ...(message.type === 'user' ? styles.messageContainerUser : styles.messageContainerBot)
                            }}
                        >
                            <div
                                style={{
                                    ...styles.messageBubble,
                                    ...(isMobile ? styles.messageBubbleMobile : {}),
                                    ...(message.type === 'user' ? styles.messageBubbleUser : styles.messageBubbleBot)
                                }}
                            >
                                {message.content && message.content}
                                {message.type === 'bot' && message.data && (
                                    <div style={styles.jsonContainer}>
                                        <ReactJson
                                            src={message.data}
                                            theme="monokai"
                                            displayDataTypes={false}
                                            displayObjectSize={false}
                                            enableClipboard={false}
                                            collapsed={false}
                                            style={{
                                                backgroundColor: 'transparent',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}
                                        />
                                    </div>
                                )}
                                <div
                                    style={{
                                        ...styles.messageTimestampInBubble,
                                        ...(message.type === 'user' ? styles.messageTimestampInBubbleUser : styles.messageTimestampInBubbleBot)
                                    }}
                                >
                                    {formatTimestamp(message.timestamp)}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )            })}
            <div ref={messagesEndRef} data-messages-end />
        </div>
    )
}