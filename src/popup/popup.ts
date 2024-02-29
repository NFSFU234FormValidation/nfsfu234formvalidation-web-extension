
import { getExtensionData } from "../helpers/storageManager";

/**
 * Function to fetch forms from the active tab and add event listeners
 * @param {HTMLElement} formValidationIsNotActiveDiv - The div for when form validation is not active
 * @param {HTMLElement} formValidationIsActiveDiv - The div for when form validation is active
 */
function addFormEventListeners(formValidationIsNotActiveDiv : HTMLElement, formValidationIsActiveDiv: HTMLElement) {
    // Log initiation
    console.log("initiated");
    
    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Get the active tab
        const activeTab = tabs[0];
        // Send message to get forms from the active tab
        chrome.tabs.sendMessage(activeTab.id, { action: "getForms" }, (response) => {
            // If forms are received
            if (response) {
                // Log the forms received
                console.log("Forms from active tab:", response);
                console.log("Form validation is enabled for the active tab.");
                // Hide the div for when form validation is not active and show the div for when form validation is active
                formValidationIsNotActiveDiv.classList.add('display-none');
                formValidationIsActiveDiv.classList.remove('display-none');
                // Set local storage to indicate that form validation is enabled
                localStorage.setItem('formValidationEnabled', 'true');

                // For each form received
                response.forEach((form: any) => {
                    // Send a message to the content script of the active tab to add form event listener
                    chrome.tabs.sendMessage(activeTab.id, { action: "addFormEventListener", formId: form.id });

                    // Listen for messages from the content script
                    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                        console.log(message);
                        // If form validation is enabled
                        if ( message.status === true )
                        {
                            // Set local storage to indicate that form validation is enabled
                            localStorage.setItem('formValidationEnabled', 'true');
                            console.log("Form validation is enabled for the active tab.");
                            // Hide the div for when form validation is not active and show the div for when form validation is active
                            formValidationIsNotActiveDiv.classList.add('display-none');
                            formValidationIsActiveDiv.classList.remove('display-none');
                        }
                    });
                });
            } else {
                console.log("No forms found in active tab.");
            }
        });
    });
}

/**
 * Function to remove form event listeners
 * 
 * @param {HTMLElement} formValidationIsNotActiveDiv - The div element for form validation when it is not active
 * @param {HTMLElement} formValidationIsActiveDiv - The div element for form validation when it is active
 */
function removeFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv) {
    // Send a message to the content script to remove form event listeners
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "removeFormEventListeners" });

        // Update the display of form validation div elements
        formValidationIsNotActiveDiv.classList.remove('display-none');
        formValidationIsActiveDiv.classList.add('display-none');
        
        // Remove temporary storage value indicating form validation is enabled
        localStorage.removeItem('formValidationEnabled');
    });
}


// Get extension data and initialize startup status
getExtensionData().then(async data => {

    // Fetch the package.json file from the extension
    const packageJSONURL = chrome.runtime.getURL('lib/package.json');
    const extensionPackageJSON = chrome.runtime.getURL('package.json');

    try
    {
        // Fetch the package.json file from the specified URL
        const response = await fetch(packageJSONURL);

        if(! response.ok)
        {
            console.log('Failed to fetch Data');
            return;
        }

        // Parse the fetched package.json file
        const packageJSON = await response.json();

        // Get the version from the parsed package.json file, or use "latest" as default
        const version = packageJSON?.version || "-----";
        console.log(version);
        
        // Set the version in the HTML element with id "version"
        document.getElementById("version").innerHTML = version;

    }
    catch (error)
    {
        console.error('Error fetching package.json:', error);
        
    }

    try
    {
        // Fetch the package.json file from the extension
        const response = await fetch(extensionPackageJSON);

        if(! response.ok)
        {
            console.log('Failed to fetch Data');
            return;
        }

        // Parse the fetched package.json file
        const packageJSON = await response.json();

        // Get the version from the parsed package.json file, or use "latest" as default
        const version = packageJSON?.version || "-----";
        console.log(version);
        
        // Set the version in the HTML element with id "appVersion"
        document.getElementById("appVersion").innerHTML = version;

    }
    catch (error)
    {
        console.error('Error fetching package.json:', error);
        
    }

    // Check if formValidationEnabled is set in localStorage
    const initializeStartupStatus = data?.initializeStartup || localStorage.getItem('formValidationEnabled') === 'true' || false;

    // Get the HTML elements for form validation status
    const formValidationIsActiveDiv = document.querySelector("#disable") as HTMLElement;
    const formValidationIsNotActiveDiv = document.querySelector("#enabled") as HTMLElement;

    // Define the event listener functions
    function enableFormValidation() {
        addFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv);
    }

    function disableFormValidation() {
        removeFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv);
    }

    // Set up event listeners based on form validation status
    if (!initializeStartupStatus) {
        formValidationIsNotActiveDiv.classList.remove('display-none');
        formValidationIsNotActiveDiv.addEventListener('click', enableFormValidation);
        formValidationIsActiveDiv.addEventListener('click', disableFormValidation);
    } else {
        formValidationIsActiveDiv.classList.remove('display-none');
        formValidationIsNotActiveDiv.addEventListener('click', enableFormValidation);
        formValidationIsActiveDiv.addEventListener('click', disableFormValidation);
    }
});


// Listen for the beforeunload event
window.addEventListener('beforeunload', () => {
    // Remove the formValidationEnabled value from localStorage
    localStorage.removeItem('formValidationEnabled');
});