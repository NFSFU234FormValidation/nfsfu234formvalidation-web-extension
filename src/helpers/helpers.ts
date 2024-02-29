
/**
 * Adds a script tag with the specified URL to the <head> of the webpage.
 * @param {string} scriptSrc - The URL of the script to be added
 */
const addScriptTagToBody = (scriptSrc): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        // Create a new script element
        const script = document.createElement('script');
        script.id = 'NFSFU234FormValidationLibraryJS';
        // Set the source URL for the script
        script.src = scriptSrc;

        // Event listener for successful loading of the script
        script.onload = () => {
            resolve();
        };

        // Event listener for error while loading the script
        script.onerror = (error) => {
            reject(error);
        };

        // Append the script element to the <head> of the document
        document.body.appendChild(script);
    });
};

/**
 * Removes the script tag with the id 'NFSFU234FormValidationLibraryJS' from the document body.
 * @returns {boolean} - Returns true if the script tag was found and removed, otherwise returns void.
 */
const removeScriptTagToBody = (): boolean | void => {
    const script = document.getElementById('NFSFU234FormValidationLibraryJS');
    if (script) {
        script.remove();
        return true;
    }
};

/**
 * Adds a script tag with the specified source URL to the body of the document
 * @param scriptSrc - The URL of the script to be added
 * @returns A promise that resolves when the script is successfully loaded, and rejects if there is an error
 */
const addExtensionScriptTagToBody = (scriptSrc: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        // Create a new script element
        const script = document.createElement('script');
        script.id = 'NFSFU234FormValidationExtensionJS';
        // Set the source URL for the script
        script.src = scriptSrc;

        // Event listener for successful loading of the script
        script.onload = () => {
            resolve();
        };

        // Event listener for error while loading the script
        script.onerror = (error) => {
            reject(error);
        };

        // Append the script element to the <body> of the document
        document.body.appendChild(script);
    });
};

/**
 * Removes the extension script tag from the body if it exists
 * @returns true if the script tag was found and removed, otherwise undefined
 */
const removeExtensionScriptTagToBody = (): boolean | void => {
    const script = document.getElementById('NFSFU234FormValidationExtensionJS');
    if(script) {
        script.remove();
        return true;
    }
};


/**
 * Function to add a CSS link tag to the <head> of the webpage
 * @param {string} cssSrc - The URL of the CSS file
 */
const addCssLinkTagToHead = (cssSrc: string): void => {
    // Create a new link element
    const link = document.createElement('link');

    // Set the id attribute of the link
    link.id = 'NFSFU234FormValidationLibraryCSS';

    // Set the relationship of the link to stylesheet
    link.rel = 'stylesheet';

    // Set the href attribute of the link to the provided CSS source
    link.href = cssSrc;

    // Append the link to the <head> of the document 
    document.head.appendChild(link);
}

/**
 * Removes the CSS link tag with the specified id from the document head
 * @returns {boolean} - true if the link tag was found and removed, false otherwise
 */
const removeCssLinkTagToHead = (): boolean => {
    // Find the CSS link tag by its id
    const link = document.getElementById('NFSFU234FormValidationLibraryCSS');
    // Check if the link tag exists
    if (link) {
        // Remove the link tag from the document head
        link.remove();
        return true;
    }
    return false;
}



// Export the following functions for adding and removing script and CSS tags to/from the DOM
export {
    addScriptTagToBody,               // Function to add a script tag to the body of the document
    addExtensionScriptTagToBody,      // Function to add an extension script tag to the body of the document
    addCssLinkTagToHead,              // Function to add a CSS link tag to the head of the document
    removeScriptTagToBody,            // Function to remove a script tag from the body of the document
    removeExtensionScriptTagToBody,   // Function to remove an extension script tag from the body of the document
    removeCssLinkTagToHead            // Function to remove a CSS link tag from the head of the document
}
