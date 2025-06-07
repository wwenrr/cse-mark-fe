export const EnvConfig = {
    getClientId: () => import.meta.env.VITE_CLIENT_ID,
    getRedirectUri: () => import.meta.env.VITE_FRONT_END_REDIRECT_URL,
    getScope: () => import.meta.env.VITE_SCOPE,
    getAccessType: () => import.meta.env.VITE_ACCESS_TYPE,
    getPrompt: () => import.meta.env.VITE_PROMT,   
    getResponseType: () => import.meta.env.VITE_RESPONSE_TYPE,
}
