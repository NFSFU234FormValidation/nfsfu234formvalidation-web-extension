// Define the interface for extension data
interface ExtensionData {
    version: string;
    theme: string;
    initializeStartup: boolean;
    customMessages : object
    // Add more properties as needed
}

// Define default values for extension data
export const DEFAULT_DATA: ExtensionData = {
    version: "latest",
    theme: 'light',
    initializeStartup: false,
    customMessages: [],
    // Set default values for other properties
};


/**
 * Retrieves extension data from the local storage
 * @returns Promise<ExtensionData | null> A promise that resolves with the extension data or null if not found
 */
export async function getExtensionData(): Promise<ExtensionData | null> {
    return new Promise((resolve) => {
        chrome.storage.local.get('extensionData', (result) => {
            const data: ExtensionData | null = result && result.extensionData ? result.extensionData : null;
            resolve(data);
        });
    });
}


/**
 * Sets the extension data in the local storage.
 * @param data - The extension data to be stored
 * @returns A promise that resolves when the data is successfully stored
 */
export async function setExtensionData(data: ExtensionData): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.set({ 'extensionData': data }, () => {
            resolve();
        });
    });
}

/**
 * Store data in Chrome storage
 * @param data - The data to be stored
 * @returns A promise that resolves when the data is successfully stored, or rejects with an error
 */
export async function storeDataInStorage(data: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        chrome.storage.local.set({ 'extensionData': data }, () => {
            const lastError = (chrome.runtime as any).lastError;
            if (lastError) {
                reject(lastError);
            } else {
                resolve();
            }
        });
    });
}

/**
 * Retrieve data from Chrome storage
 * @returns Promise<any> A promise that resolves with the retrieved data or rejects with an error
 */
export async function retrieveDataFromStorage(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        chrome.storage.local.get('extensionData', (result) => {
            const lastError = (chrome.runtime as any).lastError;
            if (lastError) {
                reject(lastError);
            } else {
                resolve(result['extensionData']);
            }
        });
    });
}


