import { getGoogleOAuthUrl } from "@/core/utils/google-oauth"

export const GoogleOauth2Helper = {
    getGoogleLoginUrl: () => {
        const url = getGoogleOAuthUrl()
        
        return url
    }
}