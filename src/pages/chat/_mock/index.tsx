import Header from '@/pages/chat/components/header'
import React, { useState } from 'react'
import LeftSidebar from '@/pages/chat/components/left-sidebar';
import ChatMessage from '@/pages/chat/components/chat-message';
import InputContainer from '@/pages/chat/components/input-container';

// Style constants for glassmorphism dark theme
const styles = {
  container: {
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
  mainArea: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    position: 'relative' as const,
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
} as const

export default function MockChat() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
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
  // Scroll to bottom when messages change
  React.useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    scrollToBottom()  }, []) // Cuộn khi component mount

  const closeSidebar = () => {
    setSidebarOpen(false)
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
      <LeftSidebar />   

      {/* Main Chat Area */}
      <div style={styles.mainArea}>

        <Header />
        <ChatMessage />

        {/* Input Container */}
        <InputContainer />
      </div>
    </div>
  )
}