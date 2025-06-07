

import React, { useState } from 'react'
import Tippy from '@tippyjs/react'
import ReactJson from '@microlink/react-json-view'
import 'tippy.js/dist/tippy.css'

// Style constants for glassmorphism dark theme
const styles = {  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0c0c0c 100%)',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    width: '100%',
    position: 'relative' as const,
  },

  containerMobile: {
    display: 'flex',
    flexDirection: 'column' as const,
    gridTemplateColumns: 'none',
  },
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

  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    opacity: 0,
    visibility: 'hidden' as const,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },

  overlayVisible: {
    opacity: 1,
    visibility: 'visible' as const,
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

  newChatButton: {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },

  chatHistory: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto' as const,
  },

  chatHistoryItem: {
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
  },

  chatHistoryItemActive: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },

  mainArea: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    position: 'relative' as const,
  },
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
  },  headerMobile: {
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
  },  dropdown: {
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
  },  dropdownButton: {
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
    padding: '12px 16px',
    borderRadius: '18px',
    fontSize: '14px',
    lineHeight: '1.4',
    wordWrap: 'break-word' as const,
  },

  messageBubbleMobile: {
    maxWidth: '85%',
    fontSize: '15px',
    padding: '10px 14px',
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
  },

  inputContainerMobile: {
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
    '::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
    }
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
  },

  jsonContainer: {
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    padding: '8px',
    marginTop: '8px',
  },
} as const

// Mock data
const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'JD'
}

const mockChatHistory = [
  { id: '1', title: 'Tra cứu điểm học kỳ 1', active: true },
  { id: '2', title: 'Lịch thi cuối kỳ', active: false },
  { id: '3', title: 'Thông tin học phí', active: false },
  { id: '4', title: 'Đăng ký môn học', active: false },
  { id: '5', title: 'Thời khóa biểu', active: false },
  { id: '6', title: 'Thông tin khóa học', active: false },
]

const mockMessages = [
  {
    id: '1',
    type: 'user',
    content: 'cnpm hk241'
  },  {
    id: '2',
    type: 'bot',
    data: {
      semester: 'HK1 2024-2025',
      subjects: [
        { code: 'CS101', name: 'Lập trình cơ bản', grade: 8.5, credits: 3 },
        { code: 'MA101', name: 'Toán cao cấp', grade: 7.8, credits: 4 },
        { code: 'EN101', name: 'Tiếng Anh', grade: 8.2, credits: 2 }
      ],
      gpa: 8.1
    }
  },
  {
    id: '3',
    type: 'user',
    content: 'ltnc kh232'
  },  {
    id: '4',
    type: 'bot',
    data: {
      gpa: 8.1,
      rank: 'Giỏi',
      totalCredits: 9,
      passedCredits: 9
    }
  }
]

// User dropdown component
const UserDropdown = () => {
  const dropdownContent = (
    <div style={styles.dropdown}>
      <div style={styles.dropdownHeader}>
        <div style={styles.dropdownName}>{mockUser.name}</div>
        <div style={styles.dropdownEmail}>{mockUser.email}</div>
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
        onClick={() => console.log('Logout clicked')}
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
        }}
      >
        {mockUser.avatar}
      </div>
    </Tippy>
  )
}

export default function MockChat() {
  const [activeChat, setActiveChat] = useState('1')
  const [inputValue, setInputValue] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setSidebarOpen(false) // Close sidebar on desktop
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const handleChatClick = (chatId: string) => {
    console.log('Chat clicked:', chatId)
    setActiveChat(chatId)
    if (isMobile) {
      setSidebarOpen(false) // Close sidebar after selecting chat on mobile
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const handleSendMessage = () => {
    console.log('Send message:', inputValue)
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  return (
    <div style={{
      ...styles.container,
      ...(isMobile ? styles.containerMobile : {})
    }}>
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          style={{
            ...styles.overlay,
            ...styles.overlayVisible
          }}
          onClick={closeSidebar}
        />
      )}

      {/* Left Sidebar */}
      <div style={{
        ...styles.sidebar,
        ...(isMobile ? {
          ...styles.sidebarMobile,
          ...(sidebarOpen ? styles.sidebarMobileOpen : {})
        } : {})
      }}>
        <div style={styles.sidebarHeader}>
          <div style={styles.sidebarTitle}>Chat CSE</div>
          <button
            style={styles.newChatButton}
            onClick={() => console.log('New chat clicked')}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Cuộc hội thoại mới
          </button>
        </div>

        <div style={styles.chatHistory}>
          {mockChatHistory.map((chat) => (
            <div
              key={chat.id}
              style={{
                ...styles.chatHistoryItem,
                ...(activeChat === chat.id ? styles.chatHistoryItemActive : {})
              }}
              onClick={() => handleChatClick(chat.id)}
              onMouseEnter={(e) => {
                if (activeChat !== chat.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeChat !== chat.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                  e.currentTarget.style.border = '1px solid transparent'
                }
              }}
            >
              {chat.title}
            </div>
          ))}
        </div>
      </div>      {/* Main Chat Area */}
      <div style={styles.mainArea}>
        {/* Header */}
        <div style={{
          ...styles.header,
          ...(isMobile ? styles.headerMobile : {})
        }}>
          {isMobile && (
            <button
              style={styles.menuButton}
              onClick={toggleSidebar}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              ☰
            </button>
          )}
          <div style={styles.headerTitle}>Cuộc hội thoại</div>
          <div style={styles.userSection}>
            <UserDropdown />
          </div>
        </div>        {/* Chat Messages */}
        <div style={{
          ...styles.chatMessages,
          ...(isMobile ? styles.chatMessagesMobile : {})
        }}>
          {mockMessages.map((message) => (
            <div
              key={message.id}
              style={{
                ...styles.messageContainer,
                ...(message.type === 'user' ? styles.messageContainerUser : styles.messageContainerBot)
              }}
            >              <div
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
              </div>
            </div>
          ))}
        </div>

        {/* Input Container */}
        <div 
          style={{
            ...styles.inputContainer,
            ...(isMobile ? styles.inputContainerMobile : {})
          }}
        >
          <input
            style={styles.input}
            type="text"
            placeholder="Nhập tin nhắn của bạn..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            style={styles.sendButton}
            onClick={handleSendMessage}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            ✈️
          </button>
        </div>
      </div>
    </div>
  )
}