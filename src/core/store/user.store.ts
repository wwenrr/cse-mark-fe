import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    lastCacheTime: Date;
    user: {
        name: string;
        email: string;
        picture: string;
    } | null;
    setUser: (user: UserState['user']) => void;
    getUser: () => UserState['user'];
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            lastCacheTime: new Date(),
            setUser: (user) => set({ 
                user,
                lastCacheTime: new Date()
            }),
            getUser: (): UserState['user'] => {
                const state: UserState = useUserStore.getState();
                return state.user;
            }
        }),
        {
            name: 'user-storage', 
            partialize: (state) => ({
                user: state.user,
                lastCacheTime: state.lastCacheTime
            })
        }
    )
);