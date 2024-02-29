declare namespace chrome {
    /**
     * Namespace for runtime-related functions and interfaces
     */
    namespace runtime {
        /**
         * Get the URL based on the provided path
         * @param path - The path for which to get the URL
         * @returns The URL corresponding to the path
         */
        function getURL(path: string): string;

        /**
         * Send a message to other parts of the extension
         * @param message - The message to send
         * @param responseCallback - Optional callback function to handle the response
         */
        function sendMessage(message: any, responseCallback?: (response: any) => void): void;

        /**
         * Interface for the sender of a message
         */
        interface MessageSender {
            id?: string;
            tab?: chrome.tabs.Tab;
            frameId?: number;
            url?: string;
            tlsChannelId?: string;
        }

        /**
         * Listener for incoming messages
         */
        const onMessage: {
            addListener(callback: (message: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => void): void;
        };

        /**
         * Details of the extension installation
         */
        interface InstalledDetails {
            reason: "install" | "update" | "chrome_update" | "shared_module_update";
            previousVersion?: string;
            id?: string;
            temporary?: boolean;
            /**
             * The version of the extension since Chrome 25
             */
            version?: string;
        }

        /**
         * Listener for extension installation
         */
        const onInstalled: {
            addListener(callback: (details: InstalledDetails) => void): void;
        };
    }

    namespace storage {
        /**
         * Represents a storage area that provides synchronous access to the storage data.
         */
        interface StorageArea {
            /**
             * Retrieves the values of one or more items from the storage.
             * @param keys - A single key to get, list of keys to get, or null to get the entire contents of storage.
             * @param callback - Function to be called with the storage items, or on failure.
             */
            get: (keys: string | string[] | null, callback: (result: { [key: string]: any }) => void) => void;
            /**
             * Sets multiple items.
             * @param items - An object which gives each key/value pair to update storage with.
             * @param callback - Optional. Callback on success, or on failure.
             */
            set: (items: { [key: string]: any }, callback?: () => void) => void;
            /**
             * Removes one or more items from storage.
             * @param keys - A single key or an array of keys for items to remove from storage.
             * @param callback - Optional. Callback on success, or on failure.
             */
            remove: (keys: string | string[], callback?: () => void) => void; // Add the remove method
            // Add other methods you need from the chrome.storage namespace
        }

        const sync: StorageArea;
        const local: StorageArea;
        const managed: StorageArea;
        // Add other storage areas as needed
    }

    namespace tabs {
        interface Tab {
            id?: number;
            index?: number;
            windowId?: number;
            openerTabId?: number;
            highlighted?: boolean;
            active?: boolean;
            pinned?: boolean;
            audible?: boolean;
            mutedInfo?: MutedInfo;
            url?: string;
            title?: string;
            favIconUrl?: string;
            status?: string;
            incognito?: boolean;
            width?: number;
            height?: number;
            sessionId?: string;
            cookieStoreId?: string;
        }

        interface MutedInfo {
            muted: boolean;
            reason?: string;
            extensionId?: string;
        }

        interface QueryInfo {
            active?: boolean;
            currentWindow?: boolean;
            windowId?: number;
            highlighted?: boolean;
            lastFocusedWindow?: boolean;
            status?: string;
            title?: string;
            url?: string | string[];
            windowType?: string;
            index?: number;
            pinned?: boolean;
            audible?: boolean;
            muted?: boolean;
            cookieStoreId?: string;
            query?: object;
        }

        interface CreateProperties {
            active?: boolean;
            index?: number;
            openerTabId?: number;
            pinned?: boolean;
            url?: string;
            windowId?: number;
        }

        interface UpdateProperties {
            active?: boolean;
            highlighted?: boolean;
            muted?: boolean;
            pinned?: boolean;
            url?: string;
        }

        interface MessageSender {
            tab?: Tab;
            frameId?: number;
            url?: string;
            tlsChannelId?: string;
        }
    
        function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;

        function query(queryInfo: chrome.tabs.QueryInfo, callback: (result: chrome.tabs.Tab[]) => void): void;
        function create(createProperties: chrome.tabs.CreateProperties, callback?: (tab: chrome.tabs.Tab) => void): void;
        function update(tabId: number, updateProperties: chrome.tabs.UpdateProperties, callback?: (tab: chrome.tabs.Tab) => void): void;
        function remove(tabIds: number | number[], callback?: () => void): void;
        // Add other functions you need from the chrome.tabs namespace
    }

    // Add other namespaces and functions as needed
}
