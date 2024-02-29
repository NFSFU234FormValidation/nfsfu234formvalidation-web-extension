// Import necessary functions from helper files
import { addCssLinkTagToHead, addExtensionScriptTagToBody, addScriptTagToBody, removeCssLinkTagToHead, removeExtensionScriptTagToBody, removeScriptTagToBody } from "../helpers/helpers";
import { DEFAULT_DATA, getExtensionData, setExtensionData } from "../helpers/storageManager";

// Retrieve extension data and perform necessary actions
getExtensionData().then(data => {
    if (!data) {
        // If no data found, set default data
        setExtensionData(DEFAULT_DATA);
    }

    // Check if initialization at startup is enabled
    if (data.initializeStartup === true) {
        // Get all forms on the webpage
        const forms = document.querySelectorAll('form') ?? document.querySelectorAll("#jsForm");

        // Check if forms exist
        if (forms.length < 1) {
            console.log('No forms or input fields found on the webpage.');
            return;
        }

        // Add CSS and JS files for form validation
        const NFSFU234FormValidationCSSURL = chrome.runtime.getURL('lib/nfsfu234FormValidation.min.css');
        addCssLinkTagToHead(NFSFU234FormValidationCSSURL);

        const NFSFU234FormValidationJsURL = chrome.runtime.getURL('lib/nfsfu234FormValidation.js');
        addScriptTagToBody(NFSFU234FormValidationJsURL);

        // Add extension script tag to body
        const extensionURL = chrome.runtime.getURL('js/custom_script.js');
        addExtensionScriptTagToBody(extensionURL);
    } else {
        // If initialization at startup is not enabled, do nothing
        const forms = document.querySelectorAll('form') ?? document.querySelectorAll("#jsForm");
        if (forms.length < 1) {
            console.log('No forms or input fields found on the webpage.');
            return;
        }
    }
});

// Listen for messages from the popup to add event listeners to forms
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getForms") {
        // Collect all forms in the document and send them back as a response to the popup
        const forms = Array.from(document.querySelectorAll("form"));
        const formsArray = forms.map(form => {
            return {
                id: form.id,
                name: form.name,
                action: form.action,
                method: form.method,
            };
        });
        sendResponse(formsArray);
    } else if (message.action === "addFormEventListener") {
        // Add event listener to form submission and submit button click
        let form = document.getElementById(message.formId);
        if (form) {
            // Add CSS, JS files, and extension script tag
            addCssLinkTagToHead(chrome.runtime.getURL('lib/nfsfu234FormValidation.min.css'));
            addScriptTagToBody(chrome.runtime.getURL('lib/nfsfu234FormValidation.js'));
            addExtensionScriptTagToBody(chrome.runtime.getURL('js/custom_script.js'));

            // Add event listener for form submission
            form.addEventListener("submit", (e)=>{
                e.preventDefault(); // Prevent default form submission
                handleFormSubmit(); // Handle form submission
            });

            // Add event listener for submit button click
            const submitButton = form.querySelector("button[type='submit']");
            if (submitButton) {
                submitButton.addEventListener("click", handleFormButtonClick);
            }
            // Send success response
            sendResponse({ success: true });
        } else {
            // Send error response if form not found
            let responseMessage = "Ensure your form has a HTML attribute of id and the value is not set to empty string or #";
            console.log(responseMessage);
            alert(responseMessage);
            sendResponse({ success: false, message: "Form not found" });
        }
    } else if (message.action === "removeFormEventListeners") {
        // Remove form event listeners and related tags
        const forms = document.querySelectorAll("form");
        forms.forEach((form) => {
            removeCssLinkTagToHead();
            removeScriptTagToBody();
            removeExtensionScriptTagToBody();
            addExtensionScriptTagToBody(chrome.runtime.getURL('js/custom_script2.js'));
            form.removeEventListener("submit", handleFormSubmit);
            const submitButton = form.querySelector("button[type='submit']");
            if (submitButton) {
                submitButton.removeEventListener("click", handleFormButtonClick);
            }
        });
    }
});

// Handle form submission
function handleFormSubmit() {
    // Add your logic to handle form submission here
}

// Handle submit button click
function handleFormButtonClick(event) {
    // Add your logic to handle submit button click here
}
