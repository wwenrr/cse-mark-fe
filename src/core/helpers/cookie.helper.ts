import Cookies from "js-cookie"

export default {
    getCookie: (name: string) => {
        return Cookies.get(name)
    },
    setCookie: (name: string, value: string, options?: {
        expires?: number | Date, 
        path?: string,
        domain?: string,
        secure?: boolean,
        sameSite?: 'strict' | 'lax' | 'none'
    }) => {
        Cookies.set(name, value, options)
    },
    removeCookie: (name: string) => {
        Cookies.remove(name)
    }
}