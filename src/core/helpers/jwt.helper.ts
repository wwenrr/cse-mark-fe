/**
 * JWT Helper - Client-side decoding (without signature verification)
 * 
 * ⚠️ WARNING: This does NOT verify the signature!
 * Only use for reading public information from tokens.
 * Never use for security validation on client-side.
 */

export interface JWTPayload {
  [key: string]: any;
  iss?: string; // Issuer
  sub?: string; // Subject
  aud?: string | string[]; // Audience
  exp?: number; // Expiration time
  nbf?: number; // Not before
  iat?: number; // Issued at
  jti?: string; // JWT ID
}

export interface JWTHeader {
  [key: string]: any;
  typ?: string; // Token type
  alg?: string; // Algorithm
  kid?: string; // Key ID
}

export interface DecodedJWT {
  header: JWTHeader;
  payload: JWTPayload;
  signature: string;
}

/**
 * Base64 URL decode
 */
const base64UrlDecode = (str: string): string => {
  // Add padding if needed
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padding = base64.length % 4;
  if (padding) {
    base64 += '='.repeat(4 - padding);
  }
  
  try {
    return atob(base64);
  } catch (error) {
    throw new Error('Invalid base64 string');
  }
};

/**
 * Decode JWT token without signature verification
 */
export const decodeJWT = (token: string): DecodedJWT => {
  if (!token || typeof token !== 'string') {
    throw new Error('Invalid token: Token must be a non-empty string');
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token: JWT must have 3 parts separated by dots');
  }

  try {
    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    const signature = parts[2];

    return {
      header,
      payload,
      signature
    };
  } catch (error) {
    throw new Error(`Failed to decode token: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Get payload from JWT token
 */
export const getJWTPayload = (token: string): JWTPayload => {
  return decodeJWT(token).payload;
};

/**
 * Get header from JWT token
 */
export const getJWTHeader = (token: string): JWTHeader => {
  return decodeJWT(token).header;
};

/**
 * Check if JWT token is expired
 */
export const isJWTExpired = (token: string): boolean => {
  try {
    const payload = getJWTPayload(token);
    
    if (!payload.exp) {
      // No expiration time means token doesn't expire
      return false;
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (error) {
    // If we can't decode the token, consider it expired
    return true;
  }
};

/**
 * Get token expiration date
 */
export const getJWTExpirationDate = (token: string): Date | null => {
  try {
    const payload = getJWTPayload(token);
    
    if (!payload.exp) {
      return null;
    }
    
    return new Date(payload.exp * 1000);
  } catch (error) {
    return null;
  }
};

/**
 * Get time until token expires (in seconds)
 */
export const getJWTTimeToExpiry = (token: string): number | null => {
  try {
    const payload = getJWTPayload(token);
    
    if (!payload.exp) {
      return null;
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    const timeToExpiry = payload.exp - currentTime;
    
    return timeToExpiry > 0 ? timeToExpiry : 0;
  } catch (error) {
    return null;
  }
};

/**
 * Extract user information from ID token payload
 */
export const getUserInfoFromIDToken = (idToken: string) => {
  try {
    const payload = getJWTPayload(idToken);
    
    return {
      userId: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      givenName: payload.given_name,
      familyName: payload.family_name,
      locale: payload.locale,
      emailVerified: payload.email_verified,
      // Add more fields as needed based on your ID token structure
      ...payload
    };
  } catch (error) {
    console.error('Failed to extract user info from ID token:', error);
    return null;
  }
};

/**
 * Validate JWT format (basic structure check)
 */
export const isValidJWTFormat = (token: string): boolean => {
  if (!token || typeof token !== 'string') {
    return false;
  }
  
  const parts = token.split('.');
  if (parts.length !== 3) {
    return false;
  }
  
  try {
    // Try to decode header and payload
    base64UrlDecode(parts[0]);
    base64UrlDecode(parts[1]);
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  decodeJWT,
  getJWTPayload,
  getJWTHeader,
  isJWTExpired,
  getJWTExpirationDate,
  getJWTTimeToExpiry,
  getUserInfoFromIDToken,
  isValidJWTFormat
};
