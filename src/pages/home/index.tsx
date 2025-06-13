import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { icon } from "@/core/constants/img.constants"
import Tippy from '@tippyjs/react'
import { toast } from 'react-toastify';
import 'tippy.js/dist/tippy.css'
import { useUserStore } from '@/core/store/user.store';
import { cookieConfigConstant } from '@/core/constants/config.constants';
import cookieHelper from '@/core/helpers/cookie.helper';
import { mockVerifyCode } from "@/core/services/api/auth/auth.api-service";
import {GoogleOauth2Helper} from '@/core/helpers/googleOauth2.helper';

// Toast styles matching website theme
const toastStyles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '1rem',
  } as CSSProperties,
  container: {
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '16px 24px',
    minWidth: 320,
  } as CSSProperties
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

const useHomePage = (): UseHomePageReturn => {
  const { width } = useScreenSize()
  const { setUser } = useUserStore()
  const isMobile = width <= 768
  const isSmallMobile = width <= 480
  let loginToastId: string | number | undefined;
  
  const handleLogin = () => {
    // Prevent multiple toasts
    if (loginToastId !== undefined && toast.isActive(loginToastId)) {
      return;
    }

    window.location.href = GoogleOauth2Helper.getGoogleLoginUrl();

    // loginToastId = toast.warning(
    //   <div style={toastStyles.content}>
    //     <span>Chức năng đăng nhập chưa được phát triển</span>
    //   </div>,
    //   {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: false,
    //     style: toastStyles.container,
    //     className: 'custom-toast',
    //   }
    // );
  };
  const handleMockTest = async () => {
    var res = await mockVerifyCode.authenticate({"code": "123456"});

    cookieHelper.setCookie(cookieConfigConstant.mockAccessToken.name, res.access_token, {
      path: cookieConfigConstant.mockAccessToken.path,
    });

    cookieHelper.setCookie(cookieConfigConstant.mockIdToken.name, res.id_token, {
      path: cookieConfigConstant.mockIdToken.path,
    });

    setUser({
      name: 'MK',
      email: 'qscvdefb@gmail.com',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocImvdcQGu_U9Ck2Mt4n0D7W2FoDJcGZKMJ4KxJaBUWPMYmBnII=s96-c'
    });

    window.location.href = '/chat?mock=true';
  };

  const getLoginCardStyle = () => ({
    ...styles.loginCard,
    ...(isMobile ? styles.loginCardMobile : {})
  })

  const getLogoStyle = () => ({
    ...styles.logo,
    ...(isSmallMobile ? styles.logoSmallMobile : isMobile ? styles.logoMobile : {})
  })

  const getTitleStyle = () => ({
    ...styles.title,
    ...(isSmallMobile ? styles.titleMobile : {})
  })

  const getLoginBtnStyle = () => ({
    ...styles.loginBtn,
    ...styles.loginBtnWithIcon,
    ...(isMobile ? styles.loginBtnMobile : {})
  })

  const getGoogleIconContainerStyle = () => ({
    ...styles.googleIconContainer,
    ...(isMobile ? styles.googleIconContainerMobile : {})
  })

  const getLoginBtnTextStyle = () => ({
    ...styles.loginBtnText,
    ...(isMobile ? styles.loginBtnTextMobile : {})
  })

  return {
    width,
    isMobile,
    isSmallMobile,
    handleLogin,
    handleMockTest,
    getLoginCardStyle,
    getLogoStyle,
    getTitleStyle,
    getLoginBtnStyle,
    getGoogleIconContainerStyle,
    getLoginBtnTextStyle,
  }
}

type Styles = {
  container: CSSProperties,
  glass: CSSProperties,
  loginContainer: CSSProperties,
  loginCard: CSSProperties,
  loginCardMobile: CSSProperties,
  loginBtn: CSSProperties,
  loginBtnWithIcon: CSSProperties,
  loginBtnMobile: CSSProperties,
  googleIconContainer: CSSProperties,
  googleIconContainerMobile: CSSProperties,
  googleIcon: CSSProperties,
  loginBtnText: CSSProperties,
  loginBtnTextMobile: CSSProperties,
  backgroundEffects: CSSProperties,
  logoContainer: CSSProperties,
  logo: CSSProperties,
  logoMobile: CSSProperties,
  logoSmallMobile: CSSProperties,
  title: CSSProperties,
  titleMobile: CSSProperties,
  description: CSSProperties,
  helpText: CSSProperties,
  mockTestBtn: CSSProperties
};

type UseHomePageReturn = {
  width: number;
  isMobile: boolean;
  isSmallMobile: boolean;
  handleLogin: () => void;
  handleMockTest: () => void;
  getLoginCardStyle: () => CSSProperties;
  getLogoStyle: () => CSSProperties;
  getTitleStyle: () => CSSProperties;
  getLoginBtnStyle: () => CSSProperties;
  getGoogleIconContainerStyle: () => CSSProperties;
  getLoginBtnTextStyle: () => CSSProperties;
};

const glassStyle: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
};

const styles: Styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0a0a0a 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  glass: glassStyle,
  loginContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
  },
  loginCard: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px 30px',
    textAlign: 'center',
    ...glassStyle,
  },
  loginCardMobile: {
    margin: '0 16px',
    padding: '32px 24px',
  },
  loginBtn: {
    width: '100%',
    padding: '16px 24px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    textDecoration: 'none',
    display: 'inline-block',
    boxSizing: 'border-box',
  },
  backgroundEffects: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  logoContainer: {
    marginBottom: '32px',
  },
  logo: {
    height: '175px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
    transform: 'translateX(-15px)',
  },
  logoMobile: {
    height: '120px',
  },
  logoSmallMobile: {
    height: '100px',
  },
  title: {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 700,
    margin: '0 0 8px 0',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  titleMobile: {
    fontSize: '1.5rem',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    margin: '0',
    lineHeight: '1.5',
  },
  helpText: {
    marginTop: '24px',
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.4',
  },  mockTestBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.85rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    zIndex: 10,
  },
  loginBtnWithIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 0,
    paddingRight: 0,
  },
  loginBtnMobile: {
    paddingLeft: '50px',
    paddingRight: '16px',
    fontSize: '0.9rem',
  },
  googleIconContainer: {
    position: 'absolute',
    left: 25,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 22,
  },
  googleIconContainerMobile: {
    left: 16,
    height: 18,
    width: 18,
  },
  googleIcon: {
    height: 22,
    width: 22,
    display: 'block',
  },
  loginBtnText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 600,
  },  loginBtnTextMobile: {
    textAlign: 'left',
    marginLeft: 0,
    fontSize: '0.9rem',
  }
};

export default function Home() {
  const {
    handleLogin,
    handleMockTest,
    getLoginCardStyle,
    getLogoStyle,
    getTitleStyle,
    getLoginBtnStyle,
    getGoogleIconContainerStyle,
    getLoginBtnTextStyle,
  } = useHomePage()
  return (
    <>
        <div style={styles.container}>
            <Tippy 
                content="Truy cập phiên bản thử nghiệm không cần đăng nhập Google"
                placement="bottom-end"
                theme="dark"
                arrow={true}
                delay={[100, 0]}
            >
                <button
                    style={styles.mockTestBtn}
                    onClick={handleMockTest}
                    onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'rgba(255, 255, 255, 0.1)';
                    target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'rgba(255, 255, 255, 0.05)';
                    target.style.color = 'rgba(255, 255, 255, 0.8)';
                    }}
                >
                    🧪 Thử nghiệm
                </button>
            </Tippy>{/* Background effects */}
            <div style={styles.backgroundEffects} />
            
            <div style={styles.loginContainer}>
                <div style={getLoginCardStyle()} className="login-card">
                    <div style={styles.logoContainer}>
                    <img src={icon.webIcon} alt="logo" style={getLogoStyle()} />
                    <h1 style={getTitleStyle()}>
                        CSE Mark Chatbot
                    </h1>
                    <p style={styles.description}>
                        Trợ lý ảo tra cứu điểm số và thông tin học tập
                    </p>
                    </div>
                    
                    <button
                        style={getLoginBtnStyle()}
                        onClick={handleLogin}
                        onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.background = 'rgba(255, 255, 255, 0.2)';
                        target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.background = 'rgba(255, 255, 255, 0.1)';
                        target.style.transform = 'translateY(0)';
                        }}
                    >
                        <span style={getGoogleIconContainerStyle()}>
                        <img
                        src={icon.googleIcon}
                        alt="Google"
                        style={styles.googleIcon}
                        />
                        </span>
                        <span style={getLoginBtnTextStyle()}>
                        Đăng nhập với Google
                        </span>
                    </button>
                    
                    <div style={styles.helpText}>
                    Sử dụng tài khoản Google của trường để đăng nhập
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}