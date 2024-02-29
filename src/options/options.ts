import { DEFAULT_DATA , getExtensionData, setExtensionData } from '../helpers/storageManager';

document.addEventListener("DOMContentLoaded", function () {

    // Check if extension data is set, if not, set default values
    const settings = { 
        version: null, 
        saveToCache: null, 
        theme: null 
    };

    // Fetch extension data
    // Retrieve extension data and handle the response
    getExtensionData().then(data => {
        if (!data) {
            // Use default data if extension data not found
            console.log("Extension data not found.");
            setExtensionData(DEFAULT_DATA);
            window.location.reload();
            return;
        }

        // Fetch available versions from lib folder
        fetchLibraryVersionsSettings();

        // Fetch extension version settings
        fetchExtensionVersionSettings();

        // Fetch available themes from the extension and apply the selected theme
        fetchThemesSettings(data.theme);

        // Check if initialize on startup is set
        fetchInitializeSettings(data.initializeStartup);

        // Display custom messages as per the extension data
        displayCustomMessages();
    });

    // Get the version select element from the DOM
    const versionSelect = document.getElementById("versionSelect") as HTMLSelectElement;

    // Get the theme select element from the DOM
    const themeSelect = document.getElementById("themeSelect") as HTMLSelectElement;

    // Get the initialize startup checkbox element from the DOM
    const initializeStartup = document.getElementById("initializeStartupCheckbox") as HTMLInputElement;

    // Store the initial values of the version and theme options
    const initialVersionValue = versionSelect.value;
    const initialThemeValue = themeSelect.value;

    // Get the initial value of the initialize on startup checkbox
    const initializeStartupValue = initializeStartup.checked;

    // Add event listeners to detect changes in the options
    versionSelect.addEventListener("change", handleOptionChange);
    themeSelect.addEventListener("change", handleOptionChange);
    initializeStartup.addEventListener("change", handleOptionChange);

    /**
     * Fetches the available themes from the extension and populates the theme dropdown
     * @param {string} activeData - The active theme data
     */
    function fetchThemesSettings(activeData: string) {

        // Get the theme select dropdown element
        const themeSelect = document.getElementById("themeSelect");

        // Find the parent section of the theme select dropdown
        const parentDiv = themeSelect.closest("section");

        // Hide the theme select dropdown
        themeSelect.style.display = "none";

        // Add "Coming Soon" text to the parent section
        addComingSoonText(parentDiv);

        // // Fetch the available themes
        // const themes = ["system","light", "dark"];

        // // If activeData is provided, add it to the beginning of the themes array
        // if ( activeData ) {
        //     themes.unshift(activeData);
        // }

        // // Populate the theme select dropdown with the fetched themes
        // themes.forEach(theme => {
        //     const option = document.createElement("option");
        //     option.value = theme;
        //     option.textContent = theme;
        //     themeSelect.appendChild(option);
        // });
    }

    /**
     * Fetches available versions from the lib folder and populates the version select input.
     */
    async function fetchLibraryVersionsSettings() {	
        // Get the version select input element
        const versionSelect = document.getElementById("versionSelect") as HTMLInputElement;
        // Get the URL of the package.json file for nfsfu234formvalidation
        const extensionPackageJSON = chrome.runtime.getURL('lib/package.json');

        try
        {
            // Fetch the nfsfu234formvalidation package.json file
            const response = await fetch(extensionPackageJSON);

            // If the response is not ok, log an error and return
            if(! response.ok)
            {
                // console.log('Failed to fetch Data');
                return;
            }

            // Parse the package.json file
            const packageJSON = await response.json();

            // Get the version from the package.json file or set it to "-----" if not available
            const version = packageJSON?.version || "-----";

            // Set the value of the version select input to the fetched version
            versionSelect.value = version;

        }
        // Catch and log any errors that occur during the process
        catch (error)
        {
            console.error('Error fetching package.json:', error);
            
        }
    }

    /**
     * Fetches the extension version settings and updates the HTML elements with the version information.
     */
    async function fetchExtensionVersionSettings()
    {
        // Get the URL of the extension's package.json file
        const extensionPackageJSON = chrome.runtime.getURL('package.json');
        
        // Find all HTML elements with class "extensionVersion"
        const extensionLibrariesHTMLElements = document.querySelectorAll(".extensionVersion");

        try
        {
            // Fetch the extension's package.json file
            const response = await fetch(extensionPackageJSON);

            // If the response is not ok, log an error message and return
            if(! response.ok)
            {
                // console.log('Failed to fetch Data');
                return;
            }

            // Parse the package.json file
            const packageJSON = await response.json();

            // Get the version from the package.json file or set it to "-----" if not available
            const version = packageJSON?.version || "-----";
            
            // Update all HTML elements with the version information
            extensionLibrariesHTMLElements.forEach(element => {
                element.innerHTML = version;
            });

        }
        catch (error)
        {
            // Log an error message if fetching the package.json file fails
            console.error('Error fetching package.json:', error);
            
        }
    }
    
    /**
     * Updates the initializeStartupCheckbox based on the value of activeData
     * @param activeData - boolean value to determine the state of the initializeStartupCheckbox
     */
    function fetchInitializeSettings(activeData: boolean) {
        // Get the initializeStartupCheckbox element from the document
        const initializeStartupCheckbox = document.getElementById("initializeStartupCheckbox") as HTMLInputElement;

        // Set the checked state based on the value of activeData
        initializeStartupCheckbox.checked = activeData;
    }

    /**
     * Function to display custom messages in the custom-messages section
     */
    async function displayCustomMessages() {	
        // Get the custom-messages section element
        const customMessagesSection = document.getElementById("custom-messages");
        
        // Add "Coming Soon" text to the custom-messages section
        addComingSoonText(customMessagesSection);
    }
            


    /**
     * Handles option change and shows save button if there are unsaved changes.
     */
    function handleOptionChange() {
        // Get the save button element
        const saveButton = document.getElementById("saveButton");

        // Get the current values of version, theme, and initializeStartup
        const currentVersionValue = versionSelect.value;
        const currentThemeValue = themeSelect.value;
        const currentInitializeStartupValue = initializeStartup.checked;

        // Check if there are unsaved changes
        if (currentVersionValue !== initialVersionValue || 
            currentThemeValue !== initialThemeValue || 
            currentInitializeStartupValue !== initializeStartupValue ) {
            // Show the save button
            saveButton.style.display = "block";

            // Prompt user before leaving the page
            window.onbeforeunload = function () {
                return true;
            };

            // Add click event listener to the save button
            saveButton.addEventListener("click", function () {
                // Create data object with current settings
                const data = {
                    version: currentVersionValue,
                    theme: currentThemeValue,
                    initializeStartup: currentInitializeStartupValue,
                    customMessages: [],
                };
                // Update settings using the data
                updateSettings(data);
            })
        } else {
            // Hide the save button
            saveButton.style.display = "none";
            // Remove the prompt for leaving the page
            window.onbeforeunload = null;
        }
    }

    /**
     * Update the settings with the given data
     * @param {Object} data - The data to update the settings with
     */
    function updateSettings(data : any) {
        // Set the extension data with the provided data
        setExtensionData(data)
            .then(() => {
                // Log the saved settings
                console.log("Settings saved:", data);
                // Remove the beforeunload event listener
                window.onbeforeunload = null;
                // Reload the window
                window.location.reload();
            })
            .catch(error => {
                // Log an error if there is an issue saving the settings
                console.error("Error saving settings:", error);
            });
    }

    /**
     * Adds a "Coming Soon..." text to the specified section element.
     * @param section - The HTMLElement to which the text will be added.
     * @returns True if the text was successfully added, false if the section is null.
     */
    function addComingSoonText(section: HTMLElement | null): boolean {
        // Create the "Coming Soon..." text element
        const comingSoonText = document.createElement("h2");
        comingSoonText.textContent = "⏱️ Coming Soon...";
        comingSoonText.classList.add("coming-soon");
        comingSoonText.style.padding = "1rem";
        comingSoonText.style.textAlign = "center";
        comingSoonText.style.background = "#313131";
        comingSoonText.style.color = "white";

        // If the section is null, remove the text and return false
        if (!section) {
            comingSoonText.remove();
            return false;
        }

        // Add the "Coming Soon..." text to the section and return true
        section.appendChild(comingSoonText);
        return true;
    }


    /**
     * Function to handle scroll and click events
     */
    function handleScrollAndClick() {
        // Get all section elements in the sidebar
        const sidebarSections = document.querySelectorAll('.sidebar ul li');

        // Get the padding or spacing affecting the scroll position
        const paddingOffset = 50; // Adjust this value as needed

        // Get the scroll position adjusted for padding or spacing
        let scrollPosition = document.querySelector('.options-content').scrollTop + paddingOffset;

        // Iterate over each sidebar section
        sidebarSections.forEach(section => {
            // Get the corresponding section in the content area based on its href attribute
            const contentSection = document.querySelector(section.querySelector('a').getAttribute('href')) as HTMLElement | null;

            // Check if the content section exists and if its top position is less than or equal to the scroll position
            if (contentSection && contentSection.offsetTop <= scrollPosition) {
                // Remove 'active' class from all sidebar sections
                sidebarSections.forEach(sec => sec.classList.remove('active'));

                // Add 'active' class to the current sidebar section
                section.classList.add('active');
            }
        });
    }

    /**
     * Updates the year displayed in the specified HTML element
     */
    function printYear() {
        // Get the current year
        const currentYear = new Date().getFullYear();

        // Find the element with id "year"
        const yearContainer = document.getElementById("year") as HTMLSpanElement;

        // Set the innerHTML of the span element to display the current year
        yearContainer.innerHTML = currentYear.toString();
    }

    // Add event listener for scroll event on the .options-content section
    document.querySelector('.options-content').addEventListener('scroll', handleScrollAndClick);

    // Get all section elements in the sidebar
    const sidebarSections = document.querySelectorAll('.sidebar ul li');

    // Add event listener for click event on sidebar sections
    sidebarSections.forEach(section => {
        section.querySelector('a').addEventListener('click', () => {
            // Remove 'active' class from all sidebar sections
            sidebarSections.forEach(sec => sec.classList.remove('active'));

            // Add 'active' class to the clicked sidebar section
            section.classList.add('active');

            // Scroll to the corresponding section in the content area
            const contentSectionId = section.querySelector('a').getAttribute('href').substring(1);
            const contentSection = document.getElementById(contentSectionId);
            if (contentSection) {
                contentSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Call the handleScrollAndClick function initially to set the active section
    handleScrollAndClick();

    // Call the printYear function to print the current year
    printYear();

});


