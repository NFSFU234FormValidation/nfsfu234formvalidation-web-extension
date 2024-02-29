// Import necessary functions from storageManager helper
import { getExtensionData, setExtensionData, DEFAULT_DATA } from '../helpers/storageManager';

// Check if extension data is set; if not, set default values
getExtensionData().then(data => {
    if (!data) {
        // Set default data if no data is found
        setExtensionData(DEFAULT_DATA);
        return;
    }

    // Function to fetch forms from the active tab and add event listeners
    function addFormEventListeners() {
        // Query for the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // Get the active tab
            const activeTab = tabs[0];
            // Send message to content script to get forms
            chrome.tabs.sendMessage(activeTab.id, { action: "getForms" }, (response) => {
                // Check if forms are received
                if (response && response.length > 0) {
                    // Log forms received
                    console.log("Forms from active tab:", response);
                    // Loop through each form
                    response.forEach((form) => {
                        // Send message to content script to add event listener for the form
                        chrome.tabs.sendMessage(activeTab.id, { action: "addFormEventListener", formId: form.id });
                    });
                    
                    // Enable form validation by setting a flag in localStorage
                    localStorage.setItem('formValidationEnabled', 'true');
                    
                    // Log that form validation is enabled
                    console.log("Form validation is enabled for the active tab.");
                    
                } else {
                    // Log if no forms are found
                    console.log("No forms found in active tab.");
                }
            });
        });
    }
    
    // Call the function to add form event listeners
    addFormEventListeners();
});
