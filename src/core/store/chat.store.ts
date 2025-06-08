import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getkeyList, getMsgFromKey, addToUserList, addToBotList } from '@/core/helpers/chat-api.helper';
import { v4 } from 'uuid';


// Types
interface Message {
    id: string;
    timestamp: number;
    content?: string;
    type: string;
    data?: object;
}

interface KeyListItem {
    id: string;
    timestamp: number;
    description: string;
    active: boolean;
    key: string;
}

interface ChatState {
    // State
    messages: Message[];
    keyList: KeyListItem[];
    activeKeyId: string | null;
    filteredMessages: Message[];

    // Actions
    getMessages: () => Message[];
    setActiveKeyId: (activeKeyId: string | null) => void;
    clearMessages: () => void;
    getKeyList: () => KeyListItem[];
    getKeyById: (id: string) => string;
    updateDescription: (id: string, newDescription: string) => void;
    addChatMessage: (
        userChat: { timestamp: number; content: string; type: string },
        isMock?: boolean
    ) => void;
}

export const useChatStore = create<ChatState>()(
    persist((set, get) => ({
        messages: [],
        keyList: [],
        activeKeyId: null,
        filteredMessages: [],

        getMessages() {
            if (get().activeKeyId === null) {
                return get().messages;
            }

            return get().filteredMessages;
        },

        setActiveKeyId: (activeKeyId: string | null) => {
            const keyItem = get().keyList.find((item) => item.id === activeKeyId);
            const keyName = keyItem?.key || '';
            const filteredMessagesList = getMsgFromKey(keyName, get().messages);

            set({ activeKeyId: activeKeyId });
            set({ filteredMessages: filteredMessagesList });
        },

        addChatMessage: async (
            userChat: { timestamp: number, content: string, type: string },
            isMock: boolean = false,
        ) => {
            const newUserMessage = { ...userChat, id: v4() };
            // const newBotMessage = { ...botChat, id: v4() };

            console.log('Adding user message:', newUserMessage);

            let newList = addToUserList(get().messages, newUserMessage);
            set({ messages: newList });
            const firstFilteredMessage = get().filteredMessages[0];
            const firstWord = firstFilteredMessage && firstFilteredMessage.content
                ? firstFilteredMessage.content.split(' ')[0]
                : '';
            set({ filteredMessages: getMsgFromKey(firstWord, newList) });
            set({ keyList: getkeyList(newList) });

            if (isMock) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const newBotMessage = {
                    id: v4(),
                    type: 'bot',
                    timestamp: userChat.timestamp + 1000 * 60, // 1 minute later
                    data: {
                        message: `Mock response for "${userChat.content}"`,
                        additionalInfo: 'This is a mock response'
                    }
                };
                newList = addToBotList(newList, newBotMessage);
            }

            set({ messages: newList });
            set({ filteredMessages: getMsgFromKey(userChat.content.split(' ')[0], newList) });
            set({ keyList: getkeyList(newList) });
        },

        clearMessages: () => {
            set({ messages: [], keyList: [], activeKeyId: null, filteredMessages: [] });
        }, getKeyList: () => {
            if (get().keyList.length === 0 && get().messages.length > 0) {
                console.log('Fetching keyList from messages');
                set({ keyList: getkeyList(get().messages) });
            }

            return get().keyList;
        },

        getKeyById: (id: string) => {
            console.log(`Fetching key for ID: ${id}`);
            console.log('Current keyList:', get().keyList);

            return get().keyList.find((item: KeyListItem) => item.id === id)?.key || '';
        },

        updateDescription: (id: string, newDescription: string) => {
            const updatedKeyList = get().keyList.map((item) => {
                if (item.id === id) {
                    return { ...item, description: newDescription };
                }
                return item;
            });

            set({ keyList: updatedKeyList });
        }
    }),
        {
            name: 'chat-storage',
            partialize: (state) => ({
                messages: state.messages,
                keyList: state.keyList,
                activeKeyId: state.activeKeyId,
                filteredMessages: state.filteredMessages,
            }),
        }
    )
);