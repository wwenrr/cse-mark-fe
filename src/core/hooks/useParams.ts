import { useParams as useRouterParams, useSearchParams, useLocation } from 'react-router-dom'
import { useMemo } from 'react'

/**
 * Custom hook để lấy dữ liệu từ URL parameters và query parameters
 * 
 * @example
 * // URL: /user/123?tab=profile&active=true
 * const { params, query, getParam, getQuery, getAllParams } = useParams()
 * 
 * console.log(params.id) // "123"
 * console.log(query.tab) // "profile"
 * console.log(getQuery('active', false)) // true (converted to boolean)
 * console.log(getAllParams()) // { id: "123", tab: "profile", active: "true" }
 */
export const useParams = () => {
  const routerParams = useRouterParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  // Convert URLSearchParams to plain object
  const queryParams = useMemo(() => {
    const params: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      params[key] = value
    })
    return params
  }, [searchParams])

  // Get specific URL parameter
  const getParam = <T = string>(key: string, defaultValue?: T): T | string | undefined => {
    const value = routerParams[key]
    if (value === undefined) {
      return defaultValue
    }
    return value
  }

  // Get specific query parameter with type conversion
  const getQuery = <T = string>(
    key: string, 
    defaultValue?: T
  ): T | string | undefined => {
    const value = searchParams.get(key)
    
    if (value === null) {
      return defaultValue
    }

    // Type conversion based on default value type
    if (typeof defaultValue === 'boolean') {
      return (value.toLowerCase() === 'true' || value === '1') as T
    }
    
    if (typeof defaultValue === 'number') {
      const num = Number(value)
      return isNaN(num) ? defaultValue : num as T
    }

    return value as T
  }
  // Get all parameters (both URL params and query params)
  const getAllParams = (): Record<string, string> => {
    const result: Record<string, string> = {}
    
    // Add route params (filter out undefined values)
    Object.entries(routerParams).forEach(([key, value]) => {
      if (value !== undefined) {
        result[key] = value
      }
    })
    
    // Add query params
    Object.entries(queryParams).forEach(([key, value]) => {
      result[key] = value
    })
    
    return result
  }

  // Check if specific parameter exists
  const hasParam = (key: string): boolean => {
    return key in routerParams
  }

  // Check if specific query parameter exists
  const hasQuery = (key: string): boolean => {
    return searchParams.has(key)
  }

  // Get multiple query parameters at once
  const getQueries = <T extends Record<string, any>>(
    keys: (keyof T)[],
    defaults?: Partial<T>
  ): Partial<T> => {
    const result: Partial<T> = {}
    
    keys.forEach(key => {
      const keyStr = String(key)
      const defaultValue = defaults?.[key]
      result[key] = getQuery(keyStr, defaultValue) as T[keyof T]
    })
    
    return result
  }

  return {
    // Raw objects
    params: routerParams,
    query: queryParams,
    
    // Utility functions
    getParam,
    getQuery,
    getQueries,
    getAllParams,
    hasParam,
    hasQuery,
    
    // Additional utilities
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    
    // Convenience getters
    get isHomePage() {
      return location.pathname === '/' || location.pathname === '/home'
    },
    
    get isChatPage() {
      return location.pathname.startsWith('/chat')
    }
  }
}

// Export default for easier importing
export default useParams