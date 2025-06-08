const getkeyList = (list:Array<{ id: string, timestamp: number, content?: string, type: string, data?: object }>) => {
    const set = new Set();
    const copyList = [...list];

    if (copyList.length === 0) {
        return [];
    }

    const filteredMessages = copyList
        .reverse()
        .filter(message => {
            if (message.type === 'bot') {
                return false;
            }

            const key = message.content?.split(' ')[0];

            if (set.has(key)) {
                return false;
            }
            set.add(key);

            return true;
        })
        .map(message => ({
            id: message.id,
            timestamp: message.timestamp,
            key: message.content?.split(' ')[0] ?? 'unknown',
            description: '',          
            active: false,          
        }));

    return filteredMessages;
}

const getMsgFromKey = (key:string, list:Array<{ id: string, timestamp: number, content?: string, type: string, data?: object }>) => {
    const output:Array<{ id: string, timestamp: number, content?: string, type: string, data?: object }> = [];

    list.forEach((message, index) => {
        if (message.type !== 'user' || !message.content) {
            return;
        }

        const keyMsg = message.content?.split(' ')[0];
        if (message.type === 'user' && keyMsg === key) {
            console.log(`bot message: `, list[index + 1]);
            console.log(`index: `, index);
            console.log(`message: `, message);
            

            output.push(message);
            output.push(list[index + 1]);
        }
    });

    console.log(`output = `, output);

    return output;
}

const addToUserList = (list:Array<{
    id: string, timestamp: number, content?: string, type: string }>,
    userChat: { id: string, timestamp: number, content: string, type: string }
) => {
    list.push(userChat);
    return list;
}

const addToBotList = (list:Array<{
    id: string, timestamp: number, content?: string, type: string, data?: object }>,    
    botChat: { id: string, timestamp: number, type: string, data: object }
) => {
    list.push(botChat);
    return list;
}

const getKeyById = (list:Array<{ id: string, timestamp: number, content: string, type: string, data?: object }>, id:string) => {
    return list.find(message => message.id === id);
}

export {
    getkeyList,
    getMsgFromKey,
    getKeyById,
    addToUserList,
    addToBotList
};

