import AsyncStorage from '@react-native-async-storage/async-storage';

const LINK_STORAGE_KEY = 'links-rocketseat';

export type linkStorage = {
    id: string;
    name: string;
    url: string;
    category: string;
};

async function get(): Promise<linkStorage[]> {
    const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);
    const response = storage ? JSON.parse(storage) : [];
    return response as linkStorage[];
}

async function save(NewLink: linkStorage): Promise<void> {
    try {
        const storage = await get();
        const updated = JSON.stringify([...storage, NewLink]);

        await AsyncStorage.setItem(LINK_STORAGE_KEY, updated);
    } catch (error) {
        throw error;
    }
}

export const LinkStorage = {get, save};
