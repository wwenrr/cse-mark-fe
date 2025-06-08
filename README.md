# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite, `vite-plugin-pwa`, `vite-tsconfig-paths`
- **State Management:** Zustand
- **Routing:** React Router DOM

## Project Structure

The project follows a modular structure to organize code effectively:

```
cse-mark-fe/
├── docs/                    # Documentation images (e.g., chat_interface.png, project_structure.png)
├── public/                  # Static assets (e.g., vite.svg)
├── src/
│   ├── assets/              # Images (react.svg), global styles (assets/styles/global.css)
│   ├── core/                # Core application logic
│   │   ├── configs/         # Environment configurations (env.config.ts)
│   │   ├── constants/       # Application-wide constants (app-enum.constants.ts, etc.)
│   │   ├── data/            # Mock data (auth.res-model.ts) and common data structures
│   │   ├── helpers/         # Utility functions (api.helper.ts, cookie.helper.ts, etc.)
│   │   ├── hooks/           # Custom React hooks (useParams.ts, useTranslation.ts)
│   │   ├── layouts/         # Layout components (if any)
│   │   ├── locales/         # Internationalization (i18n) files (en_US/, vi_VN/)
│   │   ├── models/          # Data models and types (authenticate.model.ts)
│   │   ├── router/          # Routing configuration
│   │   ├── services/        # API service integrations (auth.api-service.ts)
│   │   ├── store/           # Zustand store definitions (chat.store.ts, user.store.ts)
│   │   └── utils/           # General utility functions (browser-language.ts, google-oauth.ts)
│   ├── pages/               # Page-level components
│   │   ├── chat/            # Chat page and its components
│   │   │   ├── _mock/       # Mock data specific to the chat page (index.tsx)
│   │   │   └── components/  # Reusable components for the chat page
│   │   │       ├── chat-message/
│   │   │       ├── header/
│   │   │       ├── input-container/
│   │   │       └── left-sidebar/
│   │   └── home/            # Home page components (index.tsx)
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Main entry point
│   ├── index.css            # Global styles (can be removed if assets/styles/global.css is primary)
│   ├── example-enum-usage.ts # Example file
│   └── vite-env.d.ts        # Vite environment type definitions
├── .eslint.config.js        # ESLint configuration (updated from .eslintrc.js)
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
├── README.md                # This file
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # TypeScript configuration for the application
├── tsconfig.node.json       # TypeScript configuration for Node.js specific files (e.g. vite.config.ts)
└── vite.config.ts           # Vite configuration
```

## Getting Started

...

## Core Functionalities

### Authentication
The application implements a robust authentication system:
- **JWT Management:** Uses JSON Web Tokens for securing API requests. Token handling (storage, refresh, and injection into API calls) is managed by `src/core/helpers/jwt.helper.ts`.
- **Google OAuth 2.0:** Supports "Sign in with Google" functionality, integrated via `src/core/helpers/googleOauth2.helper.ts` and `src/core/utils/google-oauth.ts`.
- **Cookie Handling:** Securely manages authentication tokens and user session information using `src/core/helpers/cookie.helper.ts`.
- **API Services:** Authentication-related API calls (login, register, token refresh) are handled by services in `src/core/services/api/auth/`.
- **User Store:** The `src/core/store/user.store.ts` (Zustand store) manages the authenticated user's state, profile information, and login status across the application.

### Chat Interface
The main chat interface, located in `src/pages/chat/`, is composed of several interconnected components:
- **Header (`src/pages/chat/components/header/`):** Displays chat information, user details, and navigation controls. It includes a responsive design managed by custom hooks like `useResponsive.ts` and `useSidebar.ts` within its `hooks/` subdirectory.
- **Message Display (`ChatMessage`):** Renders individual messages with appropriate styling for user and bot messages.
- **Input Area (`InputContainer`):** Allows users to type and send messages, with loading states and auto-scroll.
- **Left Sidebar (`LeftSidebar`):** Provides navigation, potentially a list of conversations or contacts, and includes edit functionalities. It also utilizes responsive hooks.

### State Management
Zustand is the primary state management library:
- **`chat.store.ts`:** Manages all state related to chat messages, including message lists, loading status for sending/receiving messages, and active conversation details.
- **`user.store.ts`:** Manages user authentication state, user profile information (like username, avatar), and preferences. It plays a crucial role in personalizing the user experience and controlling access to authenticated routes.

### API Integration
API communication is centralized and structured:
- **API Helpers:** `src/core/helpers/api.helper.ts` provides a base configuration for API calls (e.g., setting base URL, headers). `src/core/helpers/chat-api.helper.ts` might contain specific configurations for chat-related endpoints.
- **Service Layer:** API services are organized by feature under `src/core/services/api/`. For example, `auth.api-service.ts` handles all authentication-related network requests. This promotes separation of concerns and makes API logic easier to manage and test.
- **Request/Response Models:** TypeScript interfaces and types in `src/core/models/` (e.g., `authenticate.model.ts`) define the structure of API request payloads and response data, ensuring type safety.

## Key Components

### `Header` (`src/pages/chat/components/header/index.tsx`)
This component serves as the main navigation and information bar within the chat interface.
- **User Information:** Displays the current user's avatar and name, often including a `UserDropdown` component for accessing profile settings or logging out.
- **Responsive Controls:** Adapts its layout for different screen sizes using custom hooks (`useResponsive.ts`, `useSidebar.ts`) to manage the visibility and behavior of elements like the sidebar toggle.
- **Navigation/Actions:** May include buttons for initiating new chats, accessing settings, or other primary actions.

### `UserDropdown` (`src/pages/chat/components/header/components/userdropdown/index.tsx`)
A sub-component of the `Header`, providing a dropdown menu typically activated by clicking the user's avatar or name.
- **Actions:** Offers options like "View Profile," "Settings," and "Logout."

### `InputContainer` (`src/pages/chat/components/input-container/index.tsx`)
- **Message Input:** A textarea or input field bound to the message state, allowing users to type their messages.
- **Send Button:** A button that triggers the send action, usually by calling a function from the chat store.
- **Loading Indicator:** Displays a loading spinner or animation when the message is being sent or if there's a delay in response.

### `LeftSidebar` (`src/pages/chat/components/left-sidebar/index.tsx`)
- **Navigation Links:** Links or buttons that navigate to different sections of the app, like the home page or user settings.
- **Conversation List:** A list (possibly a scrollable area) showing recent or pinned conversations, allowing users to quickly switch between chats.
- **Edit Functionality:** Options to edit or rename conversations, possibly using inline editing or a dedicated modal.

## Internationalization (i18n)

The application supports multiple languages using a dedicated i18n setup:
- **Locale Files:** Language-specific translations are stored in JSON files under `src/core/locales/` (e.g., `en_US/home-page.json`, `vi_VN/home-page.json`).
- **`useLocales` & `useTranslation`:** The `src/core/locales/useLocales.ts` likely initializes and manages the i18n instance, while `src/core/hooks/useTranslation.ts` provides a custom hook to easily access translation functions within components.
- **Language Detection:** `src/core/utils/browser-language.ts` might be used to detect the user's preferred browser language for setting the initial language.

## Styling
- **Global Styles:** Base styles and resets are defined in `src/assets/styles/global.css` and `src/index.css`.
- **Component Styles:** Currently, styling is primarily handled via inline styles within components (as seen in `InputContainer`, `LeftSidebar`, etc.). This approach offers direct control but can be less maintainable for larger applications.
- **Future Considerations:** The project could explore CSS Modules, Styled Components, or Tailwind CSS for more scalable and maintainable styling solutions.

## Linting & Formatting
- **ESLint:** The project uses ESLint for code linting, with its configuration defined in `eslint.config.js`. This helps maintain code quality and consistency.
- **TypeScript ESLint:** Integrates ESLint with TypeScript for type-aware linting rules.
- **Prettier (Recommended):** While not explicitly configured in the provided structure, integrating Prettier for automated code formatting is highly recommended to ensure a consistent code style across the project.

## Illustrations
- **Chat Interface Mockup:** `docs/chat_interface.png` provides a visual reference for the chat interface layout, including the header, message area, and input container.
- **Project Structure Diagram:** `docs/project_structure.png` illustrates the overall structure of the project, showing the main directories and their purposes.

## Troubleshooting

### Common Issues

#### 1. Dependency Conflicts
- **Symptom:** Errors related to package versions when running `npm install` or `vite`.
- **Solution:** Ensure that your `package.json` has compatible versions of dependencies. Consider deleting `node_modules` and `package-lock.json` and running `npm install` again.

#### 2. TypeScript Errors
- **Symptom:** Type errors when running `vite` or in your code editor.
- **Solution:** Ensure your TypeScript configuration files (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`) are correctly set up. Pay attention to the `include` and `exclude` paths.

#### 3. ESLint Issues
- **Symptom:** ESLint errors or warnings that prevent the project from building.
- **Solution:** Check your ESLint configuration (`.eslint.config.js`) and ensure it matches your project's needs. You can also run ESLint in fix mode: `npx eslint . --fix`.

### Getting Help
- For issues with dependencies or build tools, check the [Vite documentation](https://vitejs.dev/guide/).
- For React or TypeScript specific issues, refer to the [React documentation](https://reactjs.org/docs/getting-started.html) and [TypeScript documentation](https://www.typescriptlang.org/docs/).
- For ESLint configuration, visit the [ESLint documentation](https://eslint.org/docs/user-guide/configuring).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
