import { EnvConfig } from '../configs/env.config'

export function getGoogleOAuthUrl() {
    const params = `client_id=${EnvConfig.getClientId()}&redirect_uri=${EnvConfig.getRedirectUri()}&response_type=${EnvConfig.getResponseType()}&scope=${EnvConfig.getScope()}&access_type=${EnvConfig.getAccessType()}&prompt=${EnvConfig.getPrompt()}`
  
    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}