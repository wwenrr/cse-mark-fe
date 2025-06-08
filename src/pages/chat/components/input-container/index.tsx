import React, { useState } from 'react'
import { useChatStore } from '@/core/store/chat.store';
import { toast } from 'react-toastify';

const styles = {
    inputContainer: {
        position: 'fixed' as const,
        bottom: '20px',
        left: '320px',
        right: '20px',
        padding: '16px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
    },    inputContainerMobile: {
        left: '20px',
    },
    
    input: {
        flex: 1,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#ffffff',
        fontSize: '16px',
        padding: '12px 0',
        transition: 'opacity 0.2s ease',
        '::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
        }
    },
    
    inputDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    
    sendButton: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        color: '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        position: 'relative' as const,
    },
    
    sendButtonDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        transform: 'none !important',
    },
    
    loadingSpinner: {
        width: '20px',
        height: '20px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderTop: '2px solid #ffffff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
} as const

export default function InputContainer() {    
    const [inputValue, setInputValue] = useState('')
    const [isMobile] = useState(window.innerWidth <= 768)
    const { addChatMessage } = useChatStore()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
      // Function to scroll to bottom
    const scrollToBottom = () => {
        setTimeout(() => {
            // Tìm element cuối cùng trong chat để scroll đến
            const messagesEndElement = document.querySelector('[data-messages-end]');
            if (messagesEndElement) {
                messagesEndElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback: tìm container chứa tin nhắn
                const chatContainer = document.querySelector('[data-chat-container]') || 
                                   document.querySelector('.chat-messages') ||
                                   document.body;
                
                if (chatContainer && chatContainer.scrollTo) {
                    chatContainer.scrollTo({
                        top: chatContainer.scrollHeight,
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback cuối: scroll window
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        }, 100);
    }
    
    const handleSendMessage = async () => {
        if (loading) return; // Prevent multiple submissions
        
        setLoading(true)
        setError(null)

        try {
            const trimmedInput = inputValue.trim();

            if (!trimmedInput) {
                setLoading(false);
                return;
            }

            const userChat = {
                timestamp: Date.now(),
                content: trimmedInput,
                type: 'user'
            }

            // Clear input immediately for better UX
            setInputValue('')
              // Scroll to bottom after sending
            scrollToBottom()
            
            await addChatMessage(userChat, true)
            
            // Scroll again after response với delay lớn hơn để đảm bảo DOM đã update
            setTimeout(() => {
                scrollToBottom()
            }, 500)
        }
        catch (err) {
            setError('Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại.')
            console.error('Error sending message:', err)
            toast.error('Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại.')} finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey && !loading) {
            e.preventDefault()
            handleSendMessage()
        }
    }
    
    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
            <div
                style={{
                    ...styles.inputContainer,
                    ...(isMobile ? styles.inputContainerMobile : {})
                }}
            >
                <input
                    style={{
                        ...styles.input,
                        ...(loading ? styles.inputDisabled : {})
                    }}
                    type="text"
                    placeholder={loading ? "Đang gửi tin nhắn..." : "<Mã môn học> <hk>-<năm học> <nội dung>"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                />
                <button
                    style={{
                        ...styles.sendButton,
                        ...(loading ? styles.sendButtonDisabled : {})
                    }}
                    onClick={handleSendMessage}
                    disabled={loading}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)'
                        }
                    }}
                >                    {loading ? (
                        <div style={styles.loadingSpinner}></div>
                    ) : (
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/9293/9293734.png" 
                            alt="Send" 
                            style={{
                                width: '20px',
                                height: '20px',
                                filter: 'invert(1)'
                            }}
                        />
                    )}
                </button>
            </div>
            {error && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    left: '320px',
                    right: '20px',
                    padding: '12px 16px',
                    background: 'rgba(220, 38, 38, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '14px',
                    zIndex: 1001,
                    ...(isMobile ? { left: '20px' } : {})
                }}>
                    {error}
                </div>
            )}
        </>
    );
}