# CSE Mark FE - Advanced Chat Application

[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-green)](https://vitejs.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.5-orange)](https://github.com/pmndrs/zustand)

CSE Mark FE is a sophisticated, chat application built with modern web technologies. It features a robust architecture with TypeScript for type safety, Zustand for state management, and comprehensive internationalization support. The application is designed to provide seamless communication experiences with advanced features like authentication, responsive design, and optimized performance.

![Chat Interface Preview](docs/chat_interface.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Core Functionalities](#core-functionalities)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Internationalization](#internationalization)
- [Styling Architecture](#styling-architecture)
- [Performance Optimizations](#performance-optimizations)
- [Testing Strategy](#testing-strategy)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Project Overview

CSE Mark FE represents a next-generation chat application that combines modern React development practices with enterprise-grade architecture patterns. Built with TypeScript for enhanced developer experience and runtime safety, the application leverages Vite's lightning-fast build system and React 19's latest features to deliver exceptional performance.

The application architecture follows a modular approach with clear separation of concerns, making it highly maintainable and scalable. It implements advanced patterns like custom hooks, centralized state management, and a robust API layer that ensures reliable communication with backend services.

## Features

### 🚀 Core Features
- **Multi-language Support**: Complete i18n implementation with Vietnamese and English (not yet)
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Authentication System**: Secure JWT-based auth with Google OAuth 2.0 integration
- **Progressive Web App**: PWA support with offline capabilities
- **Auto-scroll Functionality**: Smart scrolling to latest messages
- **Loading States**: Comprehensive loading indicators and feedback

### 🔧 Technical Features
- **TypeScript Integration**: Full type safety across the application
- **Modern React Patterns**: Hooks, Context API, and functional components
- **Performance Optimized**: Code splitting, lazy loading, and memoization
- **Error Boundaries**: Graceful error handling and recovery
- **Hot Module Replacement**: Lightning-fast development experience
- **ESLint & TypeScript ESLint**: Strict code quality enforcement

### 🎨 UI/UX Features
- **Glassmorphism Design**: Modern glass-effect UI elements
- **Smooth Animations**: CSS transitions and micro-interactions
- **Toast Notifications**: User-friendly feedback system
- **Contextual Menus**: Intuitive user interactions
- **Accessibility**: ARIA labels and keyboard navigation support

## Tech Stack

### Frontend Technologies
- **React 19.1.0**: Latest React with concurrent features and improved performance
- **TypeScript 5.8.3**: Strong typing for enhanced developer experience
- **Vite 6.3.5**: Next-generation frontend build tool with HMR
- **React Router DOM 7.6.2**: Declarative routing for React applications

### State Management & Data Flow
- **Zustand 5.0.5**: Lightweight state management without boilerplate
- **React Hooks**: Custom hooks for reusable logic
- **Context API**: For component tree state sharing

### Development Tools
- **ESLint 9.25.0**: Code linting with TypeScript support
- **TypeScript ESLint 8.30.1**: TypeScript-specific linting rules
- **Vite PWA Plugin 1.0.0**: Progressive Web App capabilities
- **Vite TypeScript Paths 5.1.4**: Path mapping support

### UI & Styling
- **CSS3**: Modern CSS with custom properties and grid/flexbox
- **Glassmorphism**: Modern glass-effect design patterns
- **Responsive Design**: Mobile-first approach with breakpoints
- **CSS Modules**: Scoped styling (future consideration)

### Third-party Integrations
- **React Toastify 11.0.5**: Toast notification system
- **Tippy.js 6.3.7**: Tooltip and popover library
- **UUID 11.1.0**: Unique identifier generation
- **js-cookie 3.0.5**: Cookie manipulation utilities

## Architecture Overview

The application follows a layered architecture pattern that promotes separation of concerns and maintainability:

```
┌─────────────────────────────────────────┐
│               Presentation Layer        │ 
│  (Pages, Components, UI Logic)          │
├─────────────────────────────────────────┤
│               Business Layer            │
│  (Stores, Hooks, Business Logic)        │
├─────────────────────────────────────────┤
│               Service Layer             │
│  (API Services, External Integrations)  │
├─────────────────────────────────────────┤
│               Data Layer                │
│  (Models, Constants, Configurations)    │
└─────────────────────────────────────────┘
```

### Design Principles
- **Single Responsibility**: Each component/module has one clear purpose
- **DRY (Don't Repeat Yourself)**: Reusable components and utilities
- **SOLID Principles**: Clean code architecture
- **Component Composition**: Building complex UIs from simple components
- **Unidirectional Data Flow**: Predictable state management

## Project Structure

```
cse-mark-fe/
├── docs/                           # 📚 Documentation and assets
│   ├── chat_interface.png          # UI mockups and screenshots
│   └── project_structure.png       # Architecture diagrams
├── public/                         # 🌐 Static public assets
│   └── vite.svg                    # Build tool assets
├── src/                           # 📁 Main application source
│   ├── assets/                    # 🎨 Static assets and global styles
│   │   ├── react.svg              # React logo and icons
│   │   └── styles/                # Global CSS and theme files
│   │       └── global.css         # Application-wide styles
│   ├── core/                      # 🏗️ Core application infrastructure
│   │   ├── configs/               # ⚙️ Environment and app configurations
│   │   │   └── env.config.ts      # Environment variable management
│   │   ├── constants/             # 📋 Application-wide constants
│   │   │   ├── app-enum.constants.ts    # Enumeration definitions
│   │   │   ├── config.constants.ts      # Configuration constants
│   │   │   ├── img.constants.ts         # Image path constants
│   │   │   └── settings.constants.ts    # App settings constants
│   │   ├── data/                  # 💾 Data structures and mock data
│   │   │   ├── common.ts          # Shared data types
│   │   │   └── _mock/             # Mock data for development
│   │   │       ├── auth.res-model.ts    # Authentication mock responses
│   │   │       └── userData.data.ts     # User data fixtures
│   │   ├── helpers/               # 🛠️ Utility functions and helpers
│   │   │   ├── api.helper.ts      # API communication utilities
│   │   │   ├── chat-api.helper.ts # Chat-specific API helpers
│   │   │   ├── cookie.helper.ts   # Cookie management utilities
│   │   │   ├── googleOauth2.helper.ts # Google OAuth integration
│   │   │   └── jwt.helper.ts      # JWT token management
│   │   ├── hooks/                 # 🎣 Custom React hooks
│   │   │   ├── useParams.ts       # URL parameter management
│   │   │   └── useTranslation.ts  # Internationalization hook
│   │   ├── layouts/               # 📱 Application layout components
│   │   ├── locales/               # 🌍 Internationalization files
│   │   │   ├── useLocales.ts      # Locale management hook
│   │   │   ├── en_US/             # English translations
│   │   │   │   ├── home-page.json # Home page translations
│   │   │   │   └── index.ts       # English locale index
│   │   │   └── vi_VN/             # Vietnamese translations
│   │   │       ├── home-page.json # Home page translations (VN)
│   │   │       └── index.ts       # Vietnamese locale index
│   │   ├── models/                # 📊 TypeScript type definitions
│   │   │   └── authenticate.model.ts # Authentication data models
│   │   ├── router/                # 🧭 Application routing configuration
│   │   ├── services/              # 🔌 External service integrations
│   │   │   ├── api/               # API service layer
│   │   │   │   ├── auth/          # Authentication services
│   │   │   │   │   ├── auth.api-route.ts   # Auth API endpoints
│   │   │   │   │   └── auth.api-service.ts # Auth service implementation
│   │   │   │   └── refreshToken/  # Token refresh services
│   │   │   └── logging/           # Logging service implementations
│   │   ├── store/                 # 🗄️ Global state management
│   │   │   ├── chat.store.ts      # Chat state management
│   │   │   └── user.store.ts      # User authentication state
│   │   └── utils/                 # 🧰 General utility functions
│   │       ├── browser-language.ts # Browser language detection
│   │       └── google-oauth.ts    # Google OAuth utilities
│   ├── pages/                     # 📄 Application pages and features
│   │   ├── chat/                  # 💬 Chat feature implementation
│   │   │   ├── index.tsx          # Main chat page component
│   │   │   ├── _mock/             # Chat-specific mock data
│   │   │   │   └── index.tsx      # Mock chat implementation
│   │   │   └── components/        # Chat feature components
│   │   │       ├── chat-message/  # Individual message components
│   │   │       │   └── index.tsx  # Message display component
│   │   │       ├── header/        # Chat header components
│   │   │       │   ├── index.tsx  # Main header component
│   │   │       │   ├── styles.ts  # Header styling
│   │   │       │   ├── components/ # Header sub-components
│   │   │       │   │   └── userdropdown/ # User menu dropdown
│   │   │       │   │       ├── index.tsx    # Dropdown component
│   │   │       │   │       └── styles.ts    # Dropdown styling
│   │   │       │   ├── hooks/     # Header-specific hooks
│   │   │       │   │   ├── index.ts         # Hook exports
│   │   │       │   │   ├── useResponsive.ts # Responsive behavior
│   │   │       │   │   └── useSidebar.ts    # Sidebar control
│   │   │       │   └── utils/     # Header utility functions
│   │   │       │       ├── buttonHandlers.ts # Button event handlers
│   │   │       │       └── index.ts         # Utility exports
│   │   │       ├── input-container/ # Message input components
│   │   │       │   └── index.tsx  # Message input implementation
│   │   │       └── left-sidebar/  # Navigation sidebar
│   │   │           ├── index.tsx  # Main sidebar component
│   │   │           ├── styles.ts  # Sidebar styling
│   │   │           ├── hooks/     # Sidebar-specific hooks
│   │   │           │   ├── index.ts           # Hook exports
│   │   │           │   ├── use-left-side-bar.ts # Sidebar logic
│   │   │           │   ├── useResponsive.ts   # Responsive behavior
│   │   │           │   └── useSidebar.ts      # Sidebar state
│   │   │           └── utils/     # Sidebar utilities
│   │   │               ├── handler.ts         # Event handlers
│   │   │               └── index.ts           # Utility exports
│   │   └── home/                  # 🏠 Home page implementation
│   │       └── index.tsx          # Main home page component
│   ├── App.tsx                    # 🚀 Root application component
│   ├── main.tsx                   # 🎯 Application entry point
│   ├── index.css                  # 🎨 Global application styles
│   ├── example-enum-usage.ts      # 📝 TypeScript enum examples
│   └── vite-env.d.ts             # 🔧 Vite environment types
├── eslint.config.js               # 📏 ESLint configuration
├── index.html                     # 🌐 HTML entry point
├── package.json                   # 📦 Dependencies and scripts
├── tsconfig.json                  # ⚙️ TypeScript configuration
├── tsconfig.app.json             # ⚙️ App-specific TypeScript config
├── tsconfig.node.json            # ⚙️ Node.js TypeScript config
└── vite.config.ts                # ⚡ Vite build configuration
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** (recommended) with TypeScript extension

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cse-mark-fe.git
   cd cse-mark-fe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. **Verify installation:**
   ```bash
   npm run lint
   npm run build
   ```

### Environment Setup

1. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables in `.env`:**
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id
   VITE_APP_NAME=CSE Mark Chat
   VITE_APP_VERSION=1.0.0
   ```

3. **Set up API endpoints:**
   - Update `src/core/configs/env.config.ts` with your backend URLs
   - Configure authentication endpoints in `src/core/services/api/auth/`

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` with:
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 🔍 TypeScript type checking
- 📏 ESLint error reporting
- 🎨 CSS hot reloading

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

**Build output includes:**
- 📦 Minified JavaScript bundles
- 🎨 Optimized CSS files
- 🖼️ Compressed images and assets
- 📱 Service worker for PWA functionality
- 🗺️ Source maps for debugging

**Preview production build:**
```bash
npm run preview
# or
yarn preview
```

## Core Functionalities

### Authentication & Security

The application implements a comprehensive authentication system with multiple layers of security:

#### JWT Token Management
- **Access Tokens**: Short-lived tokens for API authentication that expire quickly for security
- **Refresh Tokens**: Long-lived tokens for seamless session renewal without requiring user re-login
- **Token Storage**: Secure cookie-based storage with HttpOnly flags preventing XSS attacks
- **Automatic Refresh**: Background token renewal before expiration ensures uninterrupted user sessions
- **Security Validation**: Continuous token validation and automatic cleanup of invalid or expired tokens

#### Google OAuth 2.0 Integration
- **Single Sign-On**: Seamless Google account integration
- **Profile Sync**: Automatic user profile data retrieval
- **Secure Flow**: PKCE (Proof Key for Code Exchange) implementation
- **Error Handling**: Comprehensive OAuth error management

#### Cookie Management
- **Secure Storage**: HttpOnly and Secure flags for production
- **Cross-Site Protection**: SameSite cookie policies
- **Expiration Management**: Automatic cleanup of expired sessions
- **Multi-domain Support**: Configurable domain settings

### Real-time Chat System

#### Message Flow Architecture
The application follows a sophisticated message processing pipeline that ensures reliable delivery and user feedback. Messages flow through validation, state management, API communication, response handling, and finally UI updates with comprehensive error recovery mechanisms.

#### Key Chat Features:
- **Instant Messaging**: Sub-second message delivery with optimistic UI updates for immediate user feedback
- **Message Persistence**: Reliable message storage and retrieval with automatic synchronization across sessions
- **Typing Indicators**: Real-time typing status display showing when other users are composing messages
- **Message Status**: Comprehensive sent, delivered, and read receipts with visual status indicators
- **File Attachments**: Support for images and documents with preview capabilities and download options
- **Message Reactions**: Emoji reactions and interactions that enhance communication expressiveness
- **Message Threading**: Organized conversation threads for better context and discussion management
- **Search Functionality**: Powerful message search across conversation history with filters and highlighting

#### Auto-scroll Implementation
The application implements intelligent auto-scrolling that adapts to user behavior and different DOM structures. The system uses multiple fallback strategies to ensure messages are always visible, with smooth animations and user-controlled scroll behavior that respects user intent when manually browsing message history.

### State Management Architecture

#### Zustand Store Pattern
The application uses Zustand for efficient state management with dedicated stores for different application domains. This approach provides excellent performance while maintaining simplicity and avoiding the boilerplate typically associated with more complex state management solutions.

#### Chat Store Responsibilities
The chat store manages all aspects of messaging functionality including:
- **Message Management**: Complete message lifecycle from creation to deletion with optimistic updates
- **Conversation Tracking**: Active conversation state and navigation between different chat threads
- **Loading States**: Comprehensive loading indicators for all asynchronous operations
- **Error Handling**: Graceful error management with user-friendly feedback and recovery options
- **Message Optimization**: Intelligent message batching and caching for improved performance
- **Real-time Synchronization**: Automatic synchronization with backend services and conflict resolution

#### User Store Responsibilities  
The user store handles all authentication and profile-related state including:
- **Authentication State**: Login status, session management, and automatic session validation
- **Profile Information**: User data, preferences, and customization settings management
- **Security Management**: Token handling, security validation, and secure logout procedures
- **Preference Persistence**: User settings that persist across browser sessions and devices
- **Account Operations**: Profile updates, password changes, and account deletion workflows

### API Integration Layer

#### Service Architecture
The API layer follows a service-oriented architecture with clear separation of concerns, providing a robust foundation for all client-server communication.

#### Base API Management
The application implements a centralized API management system that handles:
- **Request Configuration**: Standardized request headers, authentication tokens, and base URL management
- **Response Processing**: Consistent response handling, data transformation, and error parsing
- **Authentication Integration**: Automatic token injection and refresh token management
- **Error Recovery**: Intelligent retry mechanisms with exponential backoff for transient failures
- **Request Interceptors**: Pre-processing of requests for logging, analytics, and security validation
- **Response Interceptors**: Post-processing of responses for caching, error handling, and data normalization

#### Authentication Service Management
The authentication service provides comprehensive user authentication capabilities:
- **Login Processing**: Secure credential validation with multiple authentication methods
- **Token Management**: Automatic access token refresh and secure token storage
- **Session Validation**: Continuous session validation and automatic logout for security
- **OAuth Integration**: Seamless third-party authentication provider integration
- **Security Monitoring**: Detection and prevention of suspicious authentication activities

#### Error Handling Strategy
The application implements a multi-layered error handling approach:
- **Network Errors**: Automatic retry with exponential backoff and connection monitoring
- **Authentication Errors**: Automatic token refresh and seamless re-authentication when possible
- **Validation Errors**: User-friendly error messages with actionable guidance for resolution
- **Server Errors**: Graceful degradation and fallback options to maintain application functionality
- **Offline Handling**: Comprehensive offline support with queue management for pending requests

## Component Architecture

### Design Patterns

#### Container-Presentational Pattern
The application follows the container-presentational pattern for clear separation of logic and UI. Container components handle business logic, state management, and side effects, while presentational components focus purely on rendering UI elements based on props. This separation enhances testability, reusability, and maintainability across the application.

#### Custom Hooks Pattern
Complex logic is extracted into reusable custom hooks that provide:
- **Responsive Behavior**: Intelligent screen size detection and layout adaptation
- **Sidebar Management**: State management for navigation sidebar visibility and interactions
- **Authentication Logic**: Reusable authentication state and validation logic
- **API Integration**: Standardized patterns for API calls and data fetching
- **Event Handling**: Centralized event handling logic with proper cleanup
- **State Synchronization**: Cross-component state synchronization and updates

### Key Components Deep Dive

#### Header Component System
The header follows a hierarchical component structure that provides:
- **Navigation Control**: Primary navigation and application-wide controls
- **User Management**: User profile access, settings, and account management
- **Responsive Design**: Adaptive layout that transforms based on screen size
- **Notification System**: Real-time notifications and alerts display
- **Branding Elements**: Logo and application identity components
- **Search Functionality**: Global search capabilities across conversations and messages

#### UserDropdown Sub-component
The user dropdown provides comprehensive user account management:
- **Profile Access**: Quick access to user profile and settings
- **Account Management**: Security settings, preferences, and account options
- **Quick Actions**: Frequently used features and shortcuts
- **Logout Management**: Secure logout with session cleanup
- **Theme Controls**: User interface customization options

#### InputContainer Component
Advanced input handling with comprehensive features:
- **Message Composition**: Rich text input with formatting options
- **File Attachments**: Drag-and-drop file upload with preview capabilities
- **Typing Indicators**: Real-time typing status broadcast to other users
- **Message Validation**: Input validation and content filtering
- **Keyboard Shortcuts**: Productivity-enhancing keyboard shortcuts
- **Auto-scroll Integration**: Intelligent scrolling behavior after message sending
- **Error Recovery**: Graceful handling of send failures with message restoration
- **Offline Support**: Message queuing for offline scenarios with automatic retry

#### LeftSidebar Navigation
Comprehensive sidebar with navigation and chat management:
- **Conversation List**: Organized display of all user conversations with previews
- **Search Functionality**: Real-time search across conversations and contacts
- **Conversation Management**: Create, edit, delete, and organize conversations
- **Contact Management**: User contact list with online status indicators
- **Group Chat Support**: Group conversation creation and management
- **Archive Management**: Access to archived conversations and message history
- **Settings Access**: Quick access to application settings and preferences
- **Responsive Behavior**: Adaptive layout for mobile and desktop environments
```

## State Management

### Zustand Store Architecture

#### Store Design Principles
1. **Single Responsibility**: Each store manages one domain
2. **Immutable Updates**: Use immer for complex state updates
3. **Async Actions**: Handle side effects within store actions
4. **Type Safety**: Full TypeScript integration
5. **Devtools Support**: Redux DevTools integration for debugging

#### Chat Store Business Logic
The chat store implements comprehensive message and conversation management with sophisticated business logic:

**Core State Management:**
- **Message Repository**: Complete message collection with metadata, status tracking, and conversation association
- **Conversation Management**: Active conversation tracking with seamless switching and context preservation
- **Real-time Status**: Live typing indicators, user presence, and connection status monitoring
- **Error State Handling**: Comprehensive error tracking with user-friendly messaging and recovery options

**Advanced Messaging Operations:**
- **Message Lifecycle**: Automatic ID generation, timestamp management, and conversation categorization
- **Status Progression**: Real-time status updates from composing through delivery with visual feedback
- **Optimistic Updates**: Immediate UI responsiveness with background synchronization and conflict resolution
- **Message Editing**: In-place message modification with history tracking and collaborative editing support

**Conversation Intelligence:**
- **Smart Filtering**: Intelligent message filtering by conversation, date ranges, and content types
- **History Management**: Efficient conversation loading with pagination and infinite scroll support
- **Context Preservation**: Maintains conversation state across sessions with seamless restoration
- **Performance Optimization**: Intelligent caching and memory management for large conversation histories

**Advanced Chat Features:**
- **Bot Integration**: Configurable automated responses with context awareness and timing control
- **Message Queueing**: Reliable message delivery with retry mechanisms and offline support
- **Typing Detection**: Real-time typing status broadcasting with debounced updates for performance
- **Multi-conversation Support**: Seamless management of multiple simultaneous conversations

#### User Store Business Architecture

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  preferences: UserPreferences;
  lastLoginTime: number | null;
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  setPreferences: (preferences: Partial<UserPreferences>) => void;
  checkAuthStatus: () => Promise<boolean>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      preferences: {
        theme: 'light',
        language: 'en',
        notifications: true,
        soundEnabled: true,
      },
      lastLoginTime: null,
      
      login: async (credentials) => {
        try {
          const response = await authService.login(credentials);
          const { user, accessToken, refreshToken } = response;
          
          // Store tokens
          jwtHelper.setTokens(accessToken, refreshToken);
          
          set({
            user,
            isAuthenticated: true,
            lastLoginTime: Date.now(),
          });
          
          // Initialize user data
          await get().loadUserPreferences();
        } catch (error) {
          set({ user: null, isAuthenticated: false });
          throw error;
        }
      },
      
      logout: () => {
        jwtHelper.clearTokens();
        cookieHelper.clearAll();
        
        set({
          user: null,
          isAuthenticated: false,
          lastLoginTime: null,
        });
      },
      
      updateProfile: async (updates) => {
        const { user } = get();
        if (!user) throw new Error('No user logged in');
        
        try {
          const updatedUser = await userService.updateProfile(user.id, updates);
          set({ user: updatedUser });
        } catch (error) {
          throw error;
        }
      },
      
      setPreferences: (newPreferences) => set((state) => ({
        preferences: { ...state.preferences, ...newPreferences }
      })),
      
      checkAuthStatus: async () => {
        try {
          const token = jwtHelper.getAccessToken();
          if (!token) return false;
          
          const isValid = await authService.validateToken(token);
          if (!isValid) {
            get().logout();
            return false;
          }
          
          return true;
        } catch (error) {
          get().logout();
          return false;
        }
      },
    }),
    {
      name: 'user-store',
      partialize: (state) => ({
        preferences: state.preferences,
        lastLoginTime: state.lastLoginTime,
      }),
    }
  )
);
```

## Internationalization (i18n)

The application provides comprehensive multi-language support designed for global accessibility and localization. The internationalization system is built with flexibility and scalability in mind, supporting seamless language switching without application restart.

### Language Support Framework

**Current Language Support:**
- **English (en_US)**: Primary language with complete coverage
- **Vietnamese (vi_VN)**: Full localization for Vietnamese users

**Translation Architecture:**
The i18n system follows a modular approach where translations are organized by feature domains. Each language directory contains JSON files corresponding to specific application sections, enabling efficient loading and management of translation resources.

**Dynamic Language Detection:**
The application automatically detects user browser language preferences and applies the most appropriate language setting. Users can manually override this selection through the user interface, with preferences persisted across sessions.

**Real-time Language Switching:**
Language changes take effect immediately without requiring page refresh. The system efficiently updates all visible text elements, date formats, number formats, and cultural-specific content presentation.

### Business Logic for Language Management

**User Language Preferences:**
When users first visit the application, the system analyzes browser language settings and geographic location to suggest the most appropriate language. This creates a personalized experience from the first interaction.

**Content Localization Strategy:**
Beyond simple text translation, the system handles cultural nuances including:
- Date and time formatting according to local conventions
- Number formatting and currency display
- Text direction and layout adjustments
- Cultural color and symbol preferences
- Local communication patterns and etiquette

**Translation Quality Assurance:**
The application implements translation validation to ensure consistency and accuracy across all supported languages. Missing translations are flagged and fallback mechanisms ensure users never encounter untranslated content.

## Styling Architecture

The application employs a sophisticated styling strategy that balances modern design principles with performance optimization and maintainability. The styling architecture is designed to support scalable development while providing a cohesive user experience.

### Design System Philosophy

**Glassmorphism Design Language:**
The interface adopts glassmorphism as its primary design paradigm, creating depth and visual hierarchy through:
- Translucent surfaces with subtle background blur effects
- Layered composition that suggests depth and dimensionality
- Soft shadows and light reflections for natural material appearance
- Color schemes that complement the glass-like transparency effects

**Responsive Design Strategy:**
The application follows a mobile-first approach with progressive enhancement for larger screens. The responsive system considers not just screen size but also device capabilities, touch interfaces, and user interaction patterns.

**Color Psychology and Accessibility:**
Color choices are informed by psychological principles and accessibility standards. The palette supports users with various visual capabilities while maintaining aesthetic appeal and brand consistency.

### Component Styling Methodology

**Atomic Design Principles:**
Styling follows atomic design methodology where visual elements are built from smallest components up to complete page layouts. This ensures consistency and reusability across the application.

**Performance-Oriented Styling:**
The styling system prioritizes performance through:
- Efficient CSS delivery and caching strategies
- Minimized reflow and repaint operations
- Optimized animation performance using GPU acceleration
- Strategic use of CSS custom properties for dynamic theming

**Theme Management:**
The application supports dynamic theming capabilities, allowing users to customize their experience while maintaining design coherence. Theme switching affects colors, typography, spacing, and interactive element behaviors.

## Performance Optimizations

The application implements comprehensive performance optimization strategies designed to deliver exceptional user experiences across various devices and network conditions.

### Loading Performance Strategy

**Initial Load Optimization:**
The application prioritizes critical rendering path optimization to achieve fast initial page loads. This includes strategic resource prioritization, efficient bundling, and progressive loading of non-critical resources.

**Progressive Web App Features:**
PWA implementation provides native app-like experiences through:
- Service worker implementation for offline functionality
- Background synchronization for seamless data updates
- Push notification support for real-time engagement
- App shell architecture for instant loading experiences

**Code Splitting and Lazy Loading:**
The application implements intelligent code splitting to reduce initial bundle sizes. Components and routes are loaded on-demand, ensuring users only download code relevant to their current interactions.

### Runtime Performance Optimization

**Memory Management:**
Careful attention to memory usage prevents performance degradation during extended usage sessions. This includes efficient component lifecycle management, proper event listener cleanup, and strategic caching of frequently accessed data.

**Rendering Performance:**
React optimization techniques ensure smooth user interfaces through:
- Strategic component memoization to prevent unnecessary re-renders
- Efficient list rendering for large datasets
- Optimized state update batching for smooth animations
- Virtual scrolling for handling extensive message histories

**Network Performance:**
API communication is optimized through request deduplication, intelligent caching strategies, and efficient data serialization. Real-time features are implemented with connection pooling and automatic reconnection logic.

## User Experience Design

### Interaction Design Philosophy

**Intuitive Navigation Patterns:**
The application employs familiar interaction patterns that users expect from modern chat applications while introducing subtle improvements that enhance usability. Navigation flows are designed to minimize cognitive load and support natural user workflows.

**Accessibility-First Approach:**
Universal design principles ensure the application is usable by individuals with diverse abilities. This includes comprehensive keyboard navigation, screen reader compatibility, and visual design that accommodates various visual capabilities.

**Contextual User Assistance:**
The interface provides contextual help and guidance without overwhelming users. Smart defaults, progressive disclosure, and intuitive affordances guide users through complex workflows naturally.

### Responsive Interaction Design

**Touch-Optimized Interactions:**
Mobile interfaces feature touch-friendly element sizing, gesture support, and haptic feedback integration. The system adapts interaction methods based on detected input capabilities.

**Cross-Platform Consistency:**
While optimizing for each platform's strengths, the application maintains consistent core experiences across desktop, tablet, and mobile environments. Users can seamlessly transition between devices without learning new interaction patterns.

**Adaptive Interface Elements:**
Interface components intelligently adapt to context, screen size, and user preferences. This includes dynamic layout adjustments, content prioritization, and feature availability based on current usage context.

## Security Architecture

### Data Protection Framework

**Client-Side Security Measures:**
The application implements comprehensive client-side security practices including input validation, XSS prevention, and secure data handling. Sensitive information is protected through encryption and secure storage mechanisms.

**Authentication Security:**
Multi-layered authentication security includes secure token management, session protection, and integration with industry-standard OAuth providers. The system implements proper token lifecycle management and automatic security threat detection.

**Privacy Protection:**
User privacy is protected through minimal data collection practices, transparent privacy controls, and secure data transmission. Users maintain control over their personal information and communication data.

### Communication Security

**Secure API Communication:**
All client-server communication utilizes industry-standard encryption protocols. API endpoints implement proper authentication, authorization, and rate limiting to prevent abuse and ensure data integrity.

**Real-time Communication Security:**
Chat functionality employs secure WebSocket connections with proper authentication and message integrity verification. Real-time features maintain security without compromising performance.

## Business Process Workflows

### User Onboarding Journey

**First-Time User Experience:**
New users are guided through a streamlined onboarding process that introduces key features without overwhelming complexity. The system captures essential preferences and setup information to personalize the immediate experience.

**Progressive Feature Discovery:**
Advanced features are introduced gradually as users become comfortable with core functionality. This approach reduces initial complexity while ensuring users discover the application's full capabilities over time.

**Personalization Integration:**
The onboarding process begins building user preferences and behavioral understanding that inform future feature recommendations and interface customizations.

### Chat Communication Workflows

**Message Lifecycle Management:**
Each message follows a comprehensive lifecycle from creation through delivery, storage, and potential archival. The system handles message states, delivery confirmation, and error recovery transparently.

**Conversation Management:**
Users can organize, search, and manage multiple conversation threads efficiently. The system provides intelligent conversation grouping, priority management, and history preservation.

**Collaborative Features:**
Group chat capabilities support team communication with role-based permissions, message threading, and collaborative tools that enhance productivity and organization.

### User Account Management

**Profile Customization:**
Users can extensively customize their profiles, communication preferences, and interface settings. Changes are applied immediately and synchronized across all user sessions.

**Privacy Controls:**
Granular privacy settings allow users to control visibility, data sharing, and communication permissions. The system provides clear explanations of privacy implications for each setting.

**Data Management:**
Users maintain control over their data with options for export, deletion, and account management. The system provides transparency about data usage and storage practices.

## Illustrations and Visual Documentation

### Application Interface Mockups

**Main Chat Interface Overview:**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ 🏠 CSE Mark Chat                   🔍 Search        👤 User ▼    ⚙️  🔔    │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 📋 Sidebar    │                    Chat Area                                     │
│ ┌───────────┐ │ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 💬 Chat 1 │ │ │ 👤 Alice: Hello! How are you doing today?        10:30 AM │ │
│ │ 💬 Chat 2 │ │ │                                                             │ │
│ │ 💬 Chat 3 │ │ │ 👨 You: I'm doing great! Just working on the new feature   │ │
│ │ 💬 Chat 4 │ │ │                                                   10:32 AM │ │
│ │ 💬 Chat 5 │ │ │                                                             │ │
│ │           │ │ │ 👤 Alice: That sounds exciting! Can you tell me more?      │ │
│ │ + New     │ │ │                                                   10:35 AM │ │
│ │   Chat    │ │ │                                                             │ │
│ │           │ │ │ 👨 You: ✏️ typing...                                        │ │
│ │🔍 Search  │ │ │                                                             │ │
│ │Chats      │ │ │                                                             │ │
│ └───────────┘ │ └─────────────────────────────────────────────────────────────┘ │
│               │ ┌─────────────────────────────────────────────────────────────┐ │
│               │ │ 💬 Type your message...               📎 📷 😊 ➤         │ │
│               │ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```
*This layout demonstrates the complete chat interface with left sidebar navigation (conversation list, search), main conversation area (message history with timestamps), and bottom input section (message composition with attachment and emoji options). The glassmorphism design creates depth through layered transparency effects.*

**Mobile Interface Adaptation:**
```
📱 Mobile Layout (≤768px)
┌─────────────────────────┐
│ ☰ CSE Chat    🔔 👤   │
├─────────────────────────┤
│                         │
│ 👤 Alice: Hello! How    │
│    are you doing?       │
│                10:30 AM │
│                         │
│ 👨 You: I'm doing great!│
│    Just working on new  │
│    feature     10:32 AM │
│                         │
│ 👤 Alice: That sounds   │
│    exciting!   10:35 AM │
│                         │
│ 👨 You: ✏️ typing...     │
│                         │
├─────────────────────────┤
│ 💬 Message... 📎😊 ➤  │
└─────────────────────────┘

Collapsed Sidebar:
┌─────────────────────────┐
│ ← Chat List   🔔 👤   │
├─────────────────────────┤
│ 💬 Alice Johnson       │
│ 💬 Team Project        │
│ 💬 Customer Support    │
│ 💬 Design Review       │
│ + New Conversation     │
├─────────────────────────┤
│ 🔍 Search conversations│
└─────────────────────────┘
```
*Mobile interface features collapsible navigation (hamburger menu), full-width messages, touch-optimized input controls, and gesture-based navigation between conversations.*

**User Authentication Flow:**
```
Authentication Process Flow:

┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Landing   │    │    Login    │    │   OAuth     │    │ Dashboard   │
│    Page     ├───▶│   Screen    ├───▶│  Provider   ├───▶│   (Chat)    │
│             │    │             │    │ (Google)    │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │                  │
       ▼                  ▼                  ▼                  ▼
  • Auto-detect      • Email/Pass      • OAuth 2.0       • JWT Token
  • Guest access     • Google SSO      • PKCE Flow       • Session mgmt
  • Language         • Remember me     • Scope perms     • Profile data
                     • Validation      • Redirect        • Auto-refresh

Security Validation:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Token Check │ NO │   Refresh   │ NO │   Logout    │
│   Valid?    ├───▶│   Token?    ├───▶│  Redirect   │
└─────┬───────┘    └─────────────┘    └─────────────┘
      │ YES
      ▼
┌─────────────┐
│  Continue   │
│  Session    │
└─────────────┘
```
*Comprehensive authentication journey from initial access through secure session management, showing OAuth integration, token validation, and automatic session handling.*

### Architecture and Technical Diagrams

**System Architecture Overview:**
```
CSE Mark FE - Application Architecture

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              Frontend Layer                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 🖥️  Presentation Layer                                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │   Header    │ │  Sidebar    │ │    Chat     │ │    Input    │                │
│ │ Components  │ │ Navigation  │ │  Messages   │ │ Container   │                │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘                │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 🧠 Business Logic Layer                                                        │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │ Chat Store  │ │ User Store  │ │Custom Hooks │ │ Utils/      │                │
│ │ (Zustand)   │ │ (Persist)   │ │ (Reactive)  │ │ Helpers     │                │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘                │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 🔌 Service Layer                                                               │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │   Auth      │ │    Chat     │ │     API     │ │ WebSocket   │                │
│ │  Service    │ │   Service   │ │   Client    │ │  Manager    │                │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘                │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 🌐 External Integrations                                                       │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│ │  Backend    │ │   Google    │ │  Storage    │ │    CDN      │                │
│ │    API      │ │   OAuth     │ │ (Browser)   │ │  Assets     │                │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘                │
└─────────────────────────────────────────────────────────────────────────────────┘

Data Flow Direction:
User Input → Components → Stores → Services → External APIs → Response Processing
```
*This architecture shows the layered approach with clear separation between presentation (React components), business logic (stores and hooks), service integration (API clients), and external dependencies.*

**Component Relationship Diagram:**
```
React Component Hierarchy & Relationships

App.tsx (Root)
├── Router
│   ├── Home Page
│   │   └── Landing Components
│   └── Chat Page
│       ├── Header
│       │   ├── Navigation Controls
│       │   ├── User Dropdown
│       │   │   ├── Profile Menu
│       │   │   ├── Settings
│       │   │   └── Logout
│       │   └── Notifications
│       ├── Left Sidebar
│       │   ├── Conversation List
│       │   │   └── Conversation Item
│       │   ├── Search Bar
│       │   └── New Chat Button
│       ├── Chat Area
│       │   ├── Message List
│       │   │   └── Message Component
│       │   │       ├── Avatar
│       │   │       ├── Content
│       │   │       └── Timestamp
│       │   └── Typing Indicator
│       └── Input Container
│           ├── Text Input
│           ├── Attachment Button
│           ├── Emoji Picker
│           └── Send Button

State Management Flow:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Chat Store  │◄──►│ Components  │◄──►│ User Store  │
│             │    │             │    │             │
│ • Messages  │    │ • UI State  │    │ • Auth      │
│ • Convos    │    │ • Events    │    │ • Profile   │
│ • Status    │    │ • Render    │    │ • Prefs     │
└─────────────┘    └─────────────┘    └─────────────┘

Custom Hooks Integration:
useResponsive() ──► Responsive behavior
useSidebar() ────► Sidebar state
useTranslation() ► i18n support
useParams() ─────► URL parameters
```
*Visual representation of component hierarchy showing parent-child relationships, state flow between stores and components, and custom hooks integration.*

**Data Flow Architecture:**
```
Complete Data Lifecycle in Chat Application

User Interaction Flow:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ User Types  │───▶│ Input Comp  │───▶│ Chat Store  │───▶│ API Service │
│ Message     │    │ Validates   │    │ Optimistic │    │ HTTP POST   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                           │                 │                   │
                           ▼                 ▼                   ▼
                    ┌─────────────┐  ┌─────────────┐    ┌─────────────┐
                    │ UI Updates  │  │ State Mgmt  │    │ Server DB   │
                    │ Immediately │  │ Persists    │    │ Stores Msg  │
                    └─────────────┘  └─────────────┘    └─────────────┘

Response Processing:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Server      │───▶│ API Client  │───▶│ Store       │───▶│ Components  │
│ Response    │    │ Processes   │    │ Updates     │    │ Re-render   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘

Real-time Updates (WebSocket):
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ WebSocket   │───▶│ Event       │───▶│ Store       │
│ Message     │    │ Handler     │    │ Direct      │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
                                              ▼
                                     ┌─────────────┐
                                     │ Auto UI     │
                                     │ Update      │
                                     └─────────────┘

Error Handling Flow:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ API Error   │───▶│ Error       │───▶│ Store Error │───▶│ User        │
│ Occurs      │    │ Boundary    │    │ State       │    │ Feedback    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                                      │
       ▼                                      ▼
┌─────────────┐                      ┌─────────────┐
│ Retry       │                      │ Toast       │
│ Logic       │                      │ Notification│
└─────────────┘                      └─────────────┘
```
*Comprehensive data flow showing user interactions, optimistic updates, server communication, real-time messaging, and error handling throughout the application.*

### User Experience Journey Maps

**New User Onboarding Flow:**
```
User Onboarding Journey (First-Time Experience)

Step 1: Landing & Registration
┌─────────────────────────────────────────────────────────────────────┐
│ 🌟 Welcome to CSE Mark Chat                                        │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │
│ │   📧        │  │     🔐      │  │     ⚡      │                  │
│ │ Quick Start │  │   Secure    │  │   Modern    │                  │
│ │   Setup     │  │ Messaging   │  │ Interface   │                  │
│ └─────────────┘  └─────────────┘  └─────────────┘                  │
│                                                                     │
│ [🚀 Get Started] [🔍 Learn More] [👥 About Us]                    │
└─────────────────────────────────────────────────────────────────────┘
           │
           ▼
Step 2: Authentication Choice
┌─────────────────────────────────────────────────────────────────────┐
│ Choose Your Sign-In Method                                          │
│                                                                     │
│ ┌─────────────────────────────────┐                                 │
│ │ 🔴 Continue with Google        │ ← Recommended (Quick)           │
│ └─────────────────────────────────┘                                 │
│                                                                     │
│ ┌─────────────────────────────────┐                                 │
│ │ 📧 Email & Password            │ ← Traditional Method            │
│ └─────────────────────────────────┘                                 │
│                                                                     │
│ 👤 Guest Mode Available (Limited Features)                         │
└─────────────────────────────────────────────────────────────────────┘
           │
           ▼
Step 3: Profile Setup (30 seconds)
┌─────────────────────────────────────────────────────────────────────┐
│ Complete Your Profile                                   [2/3] ███░  │
│                                                                     │
│ Display Name: [John Doe          ]                                 │
│ Language:     [🇺🇸 English ▼    ]                                 │
│ Theme:        [🌙 Dark  ⚪ Light ]                                 │
│                                                                     │
│ 🔔 Enable notifications? [Yes] [Later]                             │
│ 📱 Mobile app available for better experience                      │
│                                                                     │
│ [⬅️ Back] [Continue ➡️] [Skip for now]                             │
└─────────────────────────────────────────────────────────────────────┘
           │
           ▼
Step 4: First Chat Experience
┌─────────────────────────────────────────────────────────────────────┐
│ 🎉 Welcome, John! Let's start your first conversation              │
│                                                                     │
│ 💡 Tip: Click "New Chat" to start a conversation                   │
│ 💡 Use @ to mention users in group chats                           │
│ 💡 Press Ctrl+Enter to send messages quickly                       │
│                                                                     │
│ [🤖 Chat with Assistant] [👥 Find Contacts] [📚 Help Center]       │
└─────────────────────────────────────────────────────────────────────┘

User Success Metrics:
• Account creation: < 2 minutes
• First message sent: < 5 minutes  
• Feature discovery: 3-5 key features in first session
• Retention: Return within 24 hours
```
*Step-by-step user journey from landing page through profile setup and first conversation, designed for maximum conversion and minimal friction.*

**Message Sending Workflow:**
```
Complete Message Sending Experience

Phase 1: Message Composition
┌─────────────────────────────────────────────────────────────────────┐
│ Input Container State: [READY]                                      │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 💬 Type your message here...                                    │ │
│ │                                          📎 📷 😊 [Send] │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ Real-time Features:                                                 │
│ • Character count (0/5000)                                         │
│ • Typing indicator to others                                       │
│ • Smart emoji suggestions                                          │
│ • Auto-save draft every 2 seconds                                  │
└─────────────────────────────────────────────────────────────────────┘
           │ User presses Enter or Send
           ▼
Phase 2: Optimistic UI Update
┌─────────────────────────────────────────────────────────────────────┐
│ Message List Updates IMMEDIATELY:                                   │
│                                                                     │
│ 👤 Alice: How's the project going?                        2:30 PM  │
│                                                                     │
│ 👨 You: Great! Just finished the chat feature     🕐 Sending...    │
│     ↳ Status: Optimistic (not yet confirmed)                      │
│                                                                     │
│ ✅ User sees immediate feedback                                     │
│ ✅ Input cleared and ready for next message                        │
│ ✅ Auto-scroll to show new message                                 │
└─────────────────────────────────────────────────────────────────────┘
           │ Parallel: API call to server
           ▼
Phase 3: Server Processing & Confirmation
┌─────────────────────────────────────────────────────────────────────┐
│ Backend Processing:                                                 │
│ 1. Validate message content ✓                                      │
│ 2. Check user permissions ✓                                        │
│ 3. Store in database ✓                                             │
│ 4. Broadcast to recipients ✓                                       │
│ 5. Return confirmation ✓                                           │
│                                                                     │
│ Updated UI:                                                         │
│ 👨 You: Great! Just finished the chat feature     ✅ Sent 2:31 PM  │
│     ↳ Status: Delivered (ID: msg_12345)                            │
└─────────────────────────────────────────────────────────────────────┘
           │
           ▼
Phase 4: Real-time Delivery & Read Receipts
┌─────────────────────────────────────────────────────────────────────┐
│ Recipient Experience:                                               │
│ • Instant notification (if enabled)                                │
│ • Message appears in their chat                                    │
│ • Typing indicator disappears                                      │
│                                                                     │
│ Sender Feedback:                                                    │
│ 👨 You: Great! Just finished the chat feature     ✅ Read 2:32 PM  │
│     ↳ Alice read the message                                       │
│                                                                     │
│ Error Handling (if occurs):                                        │
│ 👨 You: Great! Just finished...     ❌ Failed [Retry] [Delete]     │
│     ↳ Connection error - Click retry to resend                     │
└─────────────────────────────────────────────────────────────────────┘

Performance Metrics:
• UI Response: < 50ms (optimistic update)
• Server Round-trip: < 500ms (typical)
• Error Recovery: Automatic retry 3x
• User Satisfaction: 95%+ delivery success
```
*Detailed message flow showing optimistic updates, server processing, delivery confirmation, and error handling for smooth user experience.*

**Responsive Design Breakpoints:**
```
Responsive Design System - Multi-Device Adaptation

Desktop (≥1200px) - Full Feature Layout:
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Header: Full navigation + Search + User controls             (Height: 64px)     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ├─Sidebar(300px)─┤├──────────── Main Chat Area ─────────────┤├─Info(250px)─┤   │
│ │ • Conversation  ││ • Message History                        ││ • User Info │   │
│ │   List (full)   ││ • Rich formatting                        ││ • Settings  │   │
│ │ • Search        ││ • Inline media                           ││ • Files     │   │
│ │ • Folders       ││ • Message reactions                      ││ • Members   │   │
│ │ • Settings      ││ • Thread views                           ││ • Apps      │   │
│ └─────────────────┘└─────────────────────────────────────────┘└─────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘

Tablet (768px - 1199px) - Compact Layout:
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Header: Condensed navigation + Search                        (Height: 56px)     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ├─Sidebar(250px)─┤├──────────── Main Chat Area ─────────────────────────┤       │
│ │ • Compact list  ││ • Message History                                    │       │
│ │ • Quick search  ││ • Basic formatting                                   │       │
│ │ • Essentials    ││ • Image previews                                     │       │
│ │   only          ││ • Touch optimized                                    │       │
│ │                 ││ • Swipe gestures                                     │       │
│ └─────────────────┘└─────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────┘

Mobile (≤767px) - Single Column Stack:
┌─────────────────────────────┐
│ ☰ App Title      🔔 👤    │ ← Header (48px)
├─────────────────────────────┤
│                             │
│     Full Width Chat         │ ← Main content
│   • Messages stack          │
│   • Large touch targets     │
│   • Optimized keyboard      │
│   • Gesture navigation      │
│   • Bottom input always     │
│     visible                 │
│                             │
├─────────────────────────────┤
│ 💬 Message input area      │ ← Input (auto-expand)
└─────────────────────────────┘

Sidebar becomes overlay:
┌─────────────────────────────┐
│ ← Conversations    🔔 👤   │
├─────────────────────────────┤
│ 💬 Alice Johnson          │
│ 💬 Team Project           │
│ 💬 Support Chat           │
│ + New Conversation         │
├─────────────────────────────┤
│ 🔍 Search all chats       │
└─────────────────────────────┘

Breakpoint Specifications:
• Mobile: 320px - 767px
• Tablet: 768px - 1199px  
• Desktop: 1200px+
• Large Desktop: 1600px+

Adaptation Features:
• Fluid typography (clamp values)
• Flexible grid systems
• Progressive enhancement
• Touch-first interactions
• Performance optimization per device
```
*Comprehensive responsive design guide showing how interface adapts across devices with specific breakpoints, layout changes, and interaction optimizations.*

## Contributing Guidelines

### Development Workflow Standards

**Code Quality Expectations:**
All contributions must meet established quality standards including comprehensive testing, documentation, and code review approval. The development process emphasizes collaborative improvement and knowledge sharing among team members.

**Feature Development Process:**
New features follow a structured development lifecycle from initial proposal through design review, implementation, testing, and deployment. This process ensures features align with application goals and user needs.

**Bug Reporting and Resolution:**
Issue reporting includes detailed reproduction steps, environment information, and impact assessment. The resolution process prioritizes user impact while maintaining system stability and security.

### Community Engagement

**Open Source Collaboration:**
The project welcomes community contributions and maintains transparent development practices. Contributor guidelines ensure smooth collaboration while maintaining project quality and direction.

**Documentation Standards:**
All code changes include corresponding documentation updates to maintain accuracy and usefulness. Documentation covers both technical implementation details and user-facing feature explanations.

**Testing Requirements:**
Comprehensive testing requirements ensure reliability and prevent regressions. This includes unit tests, integration tests, and user experience validation for all new features and modifications.

## Troubleshooting and Support

### Common Issue Resolution

**Performance Troubleshooting:**
Common performance issues and their solutions are documented with step-by-step resolution guides. This includes browser compatibility problems, network connectivity issues, and system resource optimization.

**Authentication Problems:**
Detailed guides for resolving login issues, token expiration problems, and OAuth configuration challenges. The documentation includes both user-facing solutions and technical troubleshooting steps.

**Feature-Specific Help:**
Comprehensive help documentation for each application feature including common usage patterns, advanced capabilities, and troubleshooting specific functionality issues.

### Support Resources

**User Documentation:**
Complete user guides covering all application features with practical examples and best practice recommendations. Documentation is maintained in multiple languages to support the international user base.

**Technical Documentation:**
Detailed technical documentation for developers and system administrators including API references, configuration guides, and integration instructions.

**Community Support:**
Active community forums and support channels provide peer assistance and expert guidance. Regular community events and knowledge sharing sessions foster collaborative problem-solving.

## Future Development Roadmap

### Planned Feature Enhancements

**Advanced Communication Features:**
Future development includes voice and video calling capabilities, file sharing enhancements, and collaborative workspace features that expand the application beyond text-based communication.

**AI Integration:**
Planned artificial intelligence features include smart message suggestions, automated translation services, and intelligent conversation organization that enhance user productivity and communication effectiveness.

**Enterprise Features:**
Development roadmap includes enterprise-grade features such as advanced user management, compliance tools, and integration capabilities that support organizational communication needs.

### Technology Evolution

**Framework Updates:**
Regular updates to underlying technologies ensure the application remains current with best practices and security standards. This includes React ecosystem updates and performance optimization improvements.

**Platform Expansion:**
Future development may include native mobile applications and desktop clients that provide platform-specific optimizations while maintaining feature parity and data synchronization.

**Integration Capabilities:**
Planned API expansions will enable third-party integrations and custom extensions that allow organizations to adapt the application to their specific workflow requirements.

## License and Legal Information

This project is distributed under appropriate open source licensing that encourages community contribution while protecting intellectual property rights and ensuring sustainable development practices.

**Usage Rights:**
The license grants broad usage rights for both personal and commercial applications while requiring attribution and maintaining open source contribution requirements for derivative works.

**Contribution Licensing:**
All contributions are subject to the same licensing terms, ensuring consistent legal framework and protection for all project participants and users.

**Third-Party Dependencies:**
The application includes various third-party libraries and components, each subject to their respective licenses. Complete dependency licensing information is maintained and regularly audited for compliance.

---

*This documentation represents the current state of the CSE Mark FE chat application as of June 2025. For the most current information, please refer to the project repository and official documentation channels.*
