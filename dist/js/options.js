/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/storageManager.ts":
/*!***************************************!*\
  !*** ./src/helpers/storageManager.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retrieveDataFromStorage = exports.storeDataInStorage = exports.setExtensionData = exports.getExtensionData = exports.DEFAULT_DATA = void 0;
// Define default values for extension data
exports.DEFAULT_DATA = {
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
function getExtensionData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    chrome.storage.local.get('extensionData', function (result) {
                        var data = result && result.extensionData ? result.extensionData : null;
                        resolve(data);
                    });
                })];
        });
    });
}
exports.getExtensionData = getExtensionData;
/**
 * Sets the extension data in the local storage.
 * @param data - The extension data to be stored
 * @returns A promise that resolves when the data is successfully stored
 */
function setExtensionData(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    chrome.storage.local.set({ 'extensionData': data }, function () {
                        resolve();
                    });
                })];
        });
    });
}
exports.setExtensionData = setExtensionData;
/**
 * Store data in Chrome storage
 * @param data - The data to be stored
 * @returns A promise that resolves when the data is successfully stored, or rejects with an error
 */
function storeDataInStorage(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    chrome.storage.local.set({ 'extensionData': data }, function () {
                        var lastError = chrome.runtime.lastError;
                        if (lastError) {
                            reject(lastError);
                        }
                        else {
                            resolve();
                        }
                    });
                })];
        });
    });
}
exports.storeDataInStorage = storeDataInStorage;
/**
 * Retrieve data from Chrome storage
 * @returns Promise<any> A promise that resolves with the retrieved data or rejects with an error
 */
function retrieveDataFromStorage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    chrome.storage.local.get('extensionData', function (result) {
                        var lastError = chrome.runtime.lastError;
                        if (lastError) {
                            reject(lastError);
                        }
                        else {
                            resolve(result['extensionData']);
                        }
                    });
                })];
        });
    });
}
exports.retrieveDataFromStorage = retrieveDataFromStorage;


/***/ }),

/***/ "./src/options/options.ts":
/*!********************************!*\
  !*** ./src/options/options.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var storageManager_1 = __webpack_require__(/*! ../helpers/storageManager */ "./src/helpers/storageManager.ts");
document.addEventListener("DOMContentLoaded", function () {
    // Check if extension data is set, if not, set default values
    var settings = {
        version: null,
        saveToCache: null,
        theme: null
    };
    // Fetch extension data
    // Retrieve extension data and handle the response
    (0, storageManager_1.getExtensionData)().then(function (data) {
        if (!data) {
            // Use default data if extension data not found
            console.log("Extension data not found.");
            (0, storageManager_1.setExtensionData)(storageManager_1.DEFAULT_DATA);
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
    var versionSelect = document.getElementById("versionSelect");
    // Get the theme select element from the DOM
    var themeSelect = document.getElementById("themeSelect");
    // Get the initialize startup checkbox element from the DOM
    var initializeStartup = document.getElementById("initializeStartupCheckbox");
    // Store the initial values of the version and theme options
    var initialVersionValue = versionSelect.value;
    var initialThemeValue = themeSelect.value;
    // Get the initial value of the initialize on startup checkbox
    var initializeStartupValue = initializeStartup.checked;
    // Add event listeners to detect changes in the options
    versionSelect.addEventListener("change", handleOptionChange);
    themeSelect.addEventListener("change", handleOptionChange);
    initializeStartup.addEventListener("change", handleOptionChange);
    /**
     * Fetches the available themes from the extension and populates the theme dropdown
     * @param {string} activeData - The active theme data
     */
    function fetchThemesSettings(activeData) {
        // Get the theme select dropdown element
        var themeSelect = document.getElementById("themeSelect");
        // Find the parent section of the theme select dropdown
        var parentDiv = themeSelect.closest("section");
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
    function fetchLibraryVersionsSettings() {
        return __awaiter(this, void 0, void 0, function () {
            var versionSelect, extensionPackageJSON, response, packageJSON, version, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        versionSelect = document.getElementById("versionSelect");
                        extensionPackageJSON = chrome.runtime.getURL('lib/package.json');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(extensionPackageJSON)];
                    case 2:
                        response = _a.sent();
                        // If the response is not ok, log an error and return
                        if (!response.ok) {
                            // console.log('Failed to fetch Data');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        packageJSON = _a.sent();
                        version = (packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.version) || "-----";
                        // Set the value of the version select input to the fetched version
                        versionSelect.value = version;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error fetching package.json:', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Fetches the extension version settings and updates the HTML elements with the version information.
     */
    function fetchExtensionVersionSettings() {
        return __awaiter(this, void 0, void 0, function () {
            var extensionPackageJSON, extensionLibrariesHTMLElements, response, packageJSON, version_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extensionPackageJSON = chrome.runtime.getURL('package.json');
                        extensionLibrariesHTMLElements = document.querySelectorAll(".extensionVersion");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(extensionPackageJSON)];
                    case 2:
                        response = _a.sent();
                        // If the response is not ok, log an error message and return
                        if (!response.ok) {
                            // console.log('Failed to fetch Data');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        packageJSON = _a.sent();
                        version_1 = (packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.version) || "-----";
                        // Update all HTML elements with the version information
                        extensionLibrariesHTMLElements.forEach(function (element) {
                            element.innerHTML = version_1;
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        // Log an error message if fetching the package.json file fails
                        console.error('Error fetching package.json:', error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Updates the initializeStartupCheckbox based on the value of activeData
     * @param activeData - boolean value to determine the state of the initializeStartupCheckbox
     */
    function fetchInitializeSettings(activeData) {
        // Get the initializeStartupCheckbox element from the document
        var initializeStartupCheckbox = document.getElementById("initializeStartupCheckbox");
        // Set the checked state based on the value of activeData
        initializeStartupCheckbox.checked = activeData;
    }
    /**
     * Function to display custom messages in the custom-messages section
     */
    function displayCustomMessages() {
        return __awaiter(this, void 0, void 0, function () {
            var customMessagesSection;
            return __generator(this, function (_a) {
                customMessagesSection = document.getElementById("custom-messages");
                // Add "Coming Soon" text to the custom-messages section
                addComingSoonText(customMessagesSection);
                return [2 /*return*/];
            });
        });
    }
    /**
     * Handles option change and shows save button if there are unsaved changes.
     */
    function handleOptionChange() {
        // Get the save button element
        var saveButton = document.getElementById("saveButton");
        // Get the current values of version, theme, and initializeStartup
        var currentVersionValue = versionSelect.value;
        var currentThemeValue = themeSelect.value;
        var currentInitializeStartupValue = initializeStartup.checked;
        // Check if there are unsaved changes
        if (currentVersionValue !== initialVersionValue ||
            currentThemeValue !== initialThemeValue ||
            currentInitializeStartupValue !== initializeStartupValue) {
            // Show the save button
            saveButton.style.display = "block";
            // Prompt user before leaving the page
            window.onbeforeunload = function () {
                return true;
            };
            // Add click event listener to the save button
            saveButton.addEventListener("click", function () {
                // Create data object with current settings
                var data = {
                    version: currentVersionValue,
                    theme: currentThemeValue,
                    initializeStartup: currentInitializeStartupValue,
                    customMessages: [],
                };
                // Update settings using the data
                updateSettings(data);
            });
        }
        else {
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
    function updateSettings(data) {
        // Set the extension data with the provided data
        (0, storageManager_1.setExtensionData)(data)
            .then(function () {
            // Log the saved settings
            console.log("Settings saved:", data);
            // Remove the beforeunload event listener
            window.onbeforeunload = null;
            // Reload the window
            window.location.reload();
        })
            .catch(function (error) {
            // Log an error if there is an issue saving the settings
            console.error("Error saving settings:", error);
        });
    }
    /**
     * Adds a "Coming Soon..." text to the specified section element.
     * @param section - The HTMLElement to which the text will be added.
     * @returns True if the text was successfully added, false if the section is null.
     */
    function addComingSoonText(section) {
        // Create the "Coming Soon..." text element
        var comingSoonText = document.createElement("h2");
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
        var sidebarSections = document.querySelectorAll('.sidebar ul li');
        // Get the padding or spacing affecting the scroll position
        var paddingOffset = 50; // Adjust this value as needed
        // Get the scroll position adjusted for padding or spacing
        var scrollPosition = document.querySelector('.options-content').scrollTop + paddingOffset;
        // Iterate over each sidebar section
        sidebarSections.forEach(function (section) {
            // Get the corresponding section in the content area based on its href attribute
            var contentSection = document.querySelector(section.querySelector('a').getAttribute('href'));
            // Check if the content section exists and if its top position is less than or equal to the scroll position
            if (contentSection && contentSection.offsetTop <= scrollPosition) {
                // Remove 'active' class from all sidebar sections
                sidebarSections.forEach(function (sec) { return sec.classList.remove('active'); });
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
        var currentYear = new Date().getFullYear();
        // Find the element with id "year"
        var yearContainer = document.getElementById("year");
        // Set the innerHTML of the span element to display the current year
        yearContainer.innerHTML = currentYear.toString();
    }
    // Add event listener for scroll event on the .options-content section
    document.querySelector('.options-content').addEventListener('scroll', handleScrollAndClick);
    // Get all section elements in the sidebar
    var sidebarSections = document.querySelectorAll('.sidebar ul li');
    // Add event listener for click event on sidebar sections
    sidebarSections.forEach(function (section) {
        section.querySelector('a').addEventListener('click', function () {
            // Remove 'active' class from all sidebar sections
            sidebarSections.forEach(function (sec) { return sec.classList.remove('active'); });
            // Add 'active' class to the clicked sidebar section
            section.classList.add('active');
            // Scroll to the corresponding section in the content area
            var contentSectionId = section.querySelector('a').getAttribute('href').substring(1);
            var contentSection = document.getElementById(contentSectionId);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/options/options.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vLi9zcmMvaGVscGVycy9zdG9yYWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vLi9zcmMvb3B0aW9ucy9vcHRpb25zLnRzIiwid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHJpZXZlRGF0YUZyb21TdG9yYWdlID0gZXhwb3J0cy5zdG9yZURhdGFJblN0b3JhZ2UgPSBleHBvcnRzLnNldEV4dGVuc2lvbkRhdGEgPSBleHBvcnRzLmdldEV4dGVuc2lvbkRhdGEgPSBleHBvcnRzLkRFRkFVTFRfREFUQSA9IHZvaWQgMDtcbi8vIERlZmluZSBkZWZhdWx0IHZhbHVlcyBmb3IgZXh0ZW5zaW9uIGRhdGFcbmV4cG9ydHMuREVGQVVMVF9EQVRBID0ge1xuICAgIHZlcnNpb246IFwibGF0ZXN0XCIsXG4gICAgdGhlbWU6ICdsaWdodCcsXG4gICAgaW5pdGlhbGl6ZVN0YXJ0dXA6IGZhbHNlLFxuICAgIGN1c3RvbU1lc3NhZ2VzOiBbXSxcbiAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG90aGVyIHByb3BlcnRpZXNcbn07XG4vKipcbiAqIFJldHJpZXZlcyBleHRlbnNpb24gZGF0YSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gKiBAcmV0dXJucyBQcm9taXNlPEV4dGVuc2lvbkRhdGEgfCBudWxsPiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBleHRlbnNpb24gZGF0YSBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5mdW5jdGlvbiBnZXRFeHRlbnNpb25EYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnZXh0ZW5zaW9uRGF0YScsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzdWx0ICYmIHJlc3VsdC5leHRlbnNpb25EYXRhID8gcmVzdWx0LmV4dGVuc2lvbkRhdGEgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0RXh0ZW5zaW9uRGF0YSA9IGdldEV4dGVuc2lvbkRhdGE7XG4vKipcbiAqIFNldHMgdGhlIGV4dGVuc2lvbiBkYXRhIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZXh0ZW5zaW9uIGRhdGEgdG8gYmUgc3RvcmVkXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBkYXRhIGlzIHN1Y2Nlc3NmdWxseSBzdG9yZWRcbiAqL1xuZnVuY3Rpb24gc2V0RXh0ZW5zaW9uRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ2V4dGVuc2lvbkRhdGEnOiBkYXRhIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2V0RXh0ZW5zaW9uRGF0YSA9IHNldEV4dGVuc2lvbkRhdGE7XG4vKipcbiAqIFN0b3JlIGRhdGEgaW4gQ2hyb21lIHN0b3JhZ2VcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gYmUgc3RvcmVkXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBkYXRhIGlzIHN1Y2Nlc3NmdWxseSBzdG9yZWQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICovXG5mdW5jdGlvbiBzdG9yZURhdGFJblN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ2V4dGVuc2lvbkRhdGEnOiBkYXRhIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0RXJyb3IgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnN0b3JlRGF0YUluU3RvcmFnZSA9IHN0b3JlRGF0YUluU3RvcmFnZTtcbi8qKlxuICogUmV0cmlldmUgZGF0YSBmcm9tIENocm9tZSBzdG9yYWdlXG4gKiBAcmV0dXJucyBQcm9taXNlPGFueT4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmV0cmlldmVkIGRhdGEgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRGF0YUZyb21TdG9yYWdlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdleHRlbnNpb25EYXRhJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RFcnJvciA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0WydleHRlbnNpb25EYXRhJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZXRyaWV2ZURhdGFGcm9tU3RvcmFnZSA9IHJldHJpZXZlRGF0YUZyb21TdG9yYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3RvcmFnZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0b3JhZ2VNYW5hZ2VyXCIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIENoZWNrIGlmIGV4dGVuc2lvbiBkYXRhIGlzIHNldCwgaWYgbm90LCBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIHZlcnNpb246IG51bGwsXG4gICAgICAgIHNhdmVUb0NhY2hlOiBudWxsLFxuICAgICAgICB0aGVtZTogbnVsbFxuICAgIH07XG4gICAgLy8gRmV0Y2ggZXh0ZW5zaW9uIGRhdGFcbiAgICAvLyBSZXRyaWV2ZSBleHRlbnNpb24gZGF0YSBhbmQgaGFuZGxlIHRoZSByZXNwb25zZVxuICAgICgwLCBzdG9yYWdlTWFuYWdlcl8xLmdldEV4dGVuc2lvbkRhdGEpKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIC8vIFVzZSBkZWZhdWx0IGRhdGEgaWYgZXh0ZW5zaW9uIGRhdGEgbm90IGZvdW5kXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4dGVuc2lvbiBkYXRhIG5vdCBmb3VuZC5cIik7XG4gICAgICAgICAgICAoMCwgc3RvcmFnZU1hbmFnZXJfMS5zZXRFeHRlbnNpb25EYXRhKShzdG9yYWdlTWFuYWdlcl8xLkRFRkFVTFRfREFUQSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmV0Y2ggYXZhaWxhYmxlIHZlcnNpb25zIGZyb20gbGliIGZvbGRlclxuICAgICAgICBmZXRjaExpYnJhcnlWZXJzaW9uc1NldHRpbmdzKCk7XG4gICAgICAgIC8vIEZldGNoIGV4dGVuc2lvbiB2ZXJzaW9uIHNldHRpbmdzXG4gICAgICAgIGZldGNoRXh0ZW5zaW9uVmVyc2lvblNldHRpbmdzKCk7XG4gICAgICAgIC8vIEZldGNoIGF2YWlsYWJsZSB0aGVtZXMgZnJvbSB0aGUgZXh0ZW5zaW9uIGFuZCBhcHBseSB0aGUgc2VsZWN0ZWQgdGhlbWVcbiAgICAgICAgZmV0Y2hUaGVtZXNTZXR0aW5ncyhkYXRhLnRoZW1lKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaW5pdGlhbGl6ZSBvbiBzdGFydHVwIGlzIHNldFxuICAgICAgICBmZXRjaEluaXRpYWxpemVTZXR0aW5ncyhkYXRhLmluaXRpYWxpemVTdGFydHVwKTtcbiAgICAgICAgLy8gRGlzcGxheSBjdXN0b20gbWVzc2FnZXMgYXMgcGVyIHRoZSBleHRlbnNpb24gZGF0YVxuICAgICAgICBkaXNwbGF5Q3VzdG9tTWVzc2FnZXMoKTtcbiAgICB9KTtcbiAgICAvLyBHZXQgdGhlIHZlcnNpb24gc2VsZWN0IGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgdmFyIHZlcnNpb25TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnNpb25TZWxlY3RcIik7XG4gICAgLy8gR2V0IHRoZSB0aGVtZSBzZWxlY3QgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICB2YXIgdGhlbWVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lU2VsZWN0XCIpO1xuICAgIC8vIEdldCB0aGUgaW5pdGlhbGl6ZSBzdGFydHVwIGNoZWNrYm94IGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgdmFyIGluaXRpYWxpemVTdGFydHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsaXplU3RhcnR1cENoZWNrYm94XCIpO1xuICAgIC8vIFN0b3JlIHRoZSBpbml0aWFsIHZhbHVlcyBvZiB0aGUgdmVyc2lvbiBhbmQgdGhlbWUgb3B0aW9uc1xuICAgIHZhciBpbml0aWFsVmVyc2lvblZhbHVlID0gdmVyc2lvblNlbGVjdC52YWx1ZTtcbiAgICB2YXIgaW5pdGlhbFRoZW1lVmFsdWUgPSB0aGVtZVNlbGVjdC52YWx1ZTtcbiAgICAvLyBHZXQgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGluaXRpYWxpemUgb24gc3RhcnR1cCBjaGVja2JveFxuICAgIHZhciBpbml0aWFsaXplU3RhcnR1cFZhbHVlID0gaW5pdGlhbGl6ZVN0YXJ0dXAuY2hlY2tlZDtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGRldGVjdCBjaGFuZ2VzIGluIHRoZSBvcHRpb25zXG4gICAgdmVyc2lvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZU9wdGlvbkNoYW5nZSk7XG4gICAgdGhlbWVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVPcHRpb25DaGFuZ2UpO1xuICAgIGluaXRpYWxpemVTdGFydHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlT3B0aW9uQ2hhbmdlKTtcbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIHRoZSBhdmFpbGFibGUgdGhlbWVzIGZyb20gdGhlIGV4dGVuc2lvbiBhbmQgcG9wdWxhdGVzIHRoZSB0aGVtZSBkcm9wZG93blxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3RpdmVEYXRhIC0gVGhlIGFjdGl2ZSB0aGVtZSBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmV0Y2hUaGVtZXNTZXR0aW5ncyhhY3RpdmVEYXRhKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdGhlbWUgc2VsZWN0IGRyb3Bkb3duIGVsZW1lbnRcbiAgICAgICAgdmFyIHRoZW1lU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZVNlbGVjdFwiKTtcbiAgICAgICAgLy8gRmluZCB0aGUgcGFyZW50IHNlY3Rpb24gb2YgdGhlIHRoZW1lIHNlbGVjdCBkcm9wZG93blxuICAgICAgICB2YXIgcGFyZW50RGl2ID0gdGhlbWVTZWxlY3QuY2xvc2VzdChcInNlY3Rpb25cIik7XG4gICAgICAgIC8vIEhpZGUgdGhlIHRoZW1lIHNlbGVjdCBkcm9wZG93blxuICAgICAgICB0aGVtZVNlbGVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIEFkZCBcIkNvbWluZyBTb29uXCIgdGV4dCB0byB0aGUgcGFyZW50IHNlY3Rpb25cbiAgICAgICAgYWRkQ29taW5nU29vblRleHQocGFyZW50RGl2KTtcbiAgICAgICAgLy8gLy8gRmV0Y2ggdGhlIGF2YWlsYWJsZSB0aGVtZXNcbiAgICAgICAgLy8gY29uc3QgdGhlbWVzID0gW1wic3lzdGVtXCIsXCJsaWdodFwiLCBcImRhcmtcIl07XG4gICAgICAgIC8vIC8vIElmIGFjdGl2ZURhdGEgaXMgcHJvdmlkZWQsIGFkZCBpdCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0aGVtZXMgYXJyYXlcbiAgICAgICAgLy8gaWYgKCBhY3RpdmVEYXRhICkge1xuICAgICAgICAvLyAgICAgdGhlbWVzLnVuc2hpZnQoYWN0aXZlRGF0YSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gUG9wdWxhdGUgdGhlIHRoZW1lIHNlbGVjdCBkcm9wZG93biB3aXRoIHRoZSBmZXRjaGVkIHRoZW1lc1xuICAgICAgICAvLyB0aGVtZXMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAvLyAgICAgb3B0aW9uLnZhbHVlID0gdGhlbWU7XG4gICAgICAgIC8vICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0aGVtZTtcbiAgICAgICAgLy8gICAgIHRoZW1lU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGF2YWlsYWJsZSB2ZXJzaW9ucyBmcm9tIHRoZSBsaWIgZm9sZGVyIGFuZCBwb3B1bGF0ZXMgdGhlIHZlcnNpb24gc2VsZWN0IGlucHV0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZldGNoTGlicmFyeVZlcnNpb25zU2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uU2VsZWN0LCBleHRlbnNpb25QYWNrYWdlSlNPTiwgcmVzcG9uc2UsIHBhY2thZ2VKU09OLCB2ZXJzaW9uLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvblNlbGVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvblBhY2thZ2VKU09OID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdsaWIvcGFja2FnZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChleHRlbnNpb25QYWNrYWdlSlNPTildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXNwb25zZSBpcyBub3Qgb2ssIGxvZyBhbiBlcnJvciBhbmQgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZhaWxlZCB0byBmZXRjaCBEYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnZUpTT04gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHBhY2thZ2VKU09OID09PSBudWxsIHx8IHBhY2thZ2VKU09OID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWNrYWdlSlNPTi52ZXJzaW9uKSB8fCBcIi0tLS0tXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSB2ZXJzaW9uIHNlbGVjdCBpbnB1dCB0byB0aGUgZmV0Y2hlZCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uU2VsZWN0LnZhbHVlID0gdmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGFja2FnZS5qc29uOicsIGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgZXh0ZW5zaW9uIHZlcnNpb24gc2V0dGluZ3MgYW5kIHVwZGF0ZXMgdGhlIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgdmVyc2lvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmZXRjaEV4dGVuc2lvblZlcnNpb25TZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4dGVuc2lvblBhY2thZ2VKU09OLCBleHRlbnNpb25MaWJyYXJpZXNIVE1MRWxlbWVudHMsIHJlc3BvbnNlLCBwYWNrYWdlSlNPTiwgdmVyc2lvbl8xLCBlcnJvcl8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uUGFja2FnZUpTT04gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ3BhY2thZ2UuanNvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uTGlicmFyaWVzSFRNTEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHRlbnNpb25WZXJzaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goZXh0ZW5zaW9uUGFja2FnZUpTT04pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2UgaXMgbm90IG9rLCBsb2cgYW4gZXJyb3IgbWVzc2FnZSBhbmQgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZhaWxlZCB0byBmZXRjaCBEYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnZUpTT04gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uXzEgPSAocGFja2FnZUpTT04gPT09IG51bGwgfHwgcGFja2FnZUpTT04gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhY2thZ2VKU09OLnZlcnNpb24pIHx8IFwiLS0tLS1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgSFRNTCBlbGVtZW50cyB3aXRoIHRoZSB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25MaWJyYXJpZXNIVE1MRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmVyc2lvbl8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvZyBhbiBlcnJvciBtZXNzYWdlIGlmIGZldGNoaW5nIHRoZSBwYWNrYWdlLmpzb24gZmlsZSBmYWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGFja2FnZS5qc29uOicsIGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgaW5pdGlhbGl6ZVN0YXJ0dXBDaGVja2JveCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgYWN0aXZlRGF0YVxuICAgICAqIEBwYXJhbSBhY3RpdmVEYXRhIC0gYm9vbGVhbiB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHN0YXRlIG9mIHRoZSBpbml0aWFsaXplU3RhcnR1cENoZWNrYm94XG4gICAgICovXG4gICAgZnVuY3Rpb24gZmV0Y2hJbml0aWFsaXplU2V0dGluZ3MoYWN0aXZlRGF0YSkge1xuICAgICAgICAvLyBHZXQgdGhlIGluaXRpYWxpemVTdGFydHVwQ2hlY2tib3ggZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgICB2YXIgaW5pdGlhbGl6ZVN0YXJ0dXBDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbGl6ZVN0YXJ0dXBDaGVja2JveFwiKTtcbiAgICAgICAgLy8gU2V0IHRoZSBjaGVja2VkIHN0YXRlIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBhY3RpdmVEYXRhXG4gICAgICAgIGluaXRpYWxpemVTdGFydHVwQ2hlY2tib3guY2hlY2tlZCA9IGFjdGl2ZURhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGRpc3BsYXkgY3VzdG9tIG1lc3NhZ2VzIGluIHRoZSBjdXN0b20tbWVzc2FnZXMgc2VjdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlDdXN0b21NZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbU1lc3NhZ2VzU2VjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21NZXNzYWdlc1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbS1tZXNzYWdlc1wiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgXCJDb21pbmcgU29vblwiIHRleHQgdG8gdGhlIGN1c3RvbS1tZXNzYWdlcyBzZWN0aW9uXG4gICAgICAgICAgICAgICAgYWRkQ29taW5nU29vblRleHQoY3VzdG9tTWVzc2FnZXNTZWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgb3B0aW9uIGNoYW5nZSBhbmQgc2hvd3Mgc2F2ZSBidXR0b24gaWYgdGhlcmUgYXJlIHVuc2F2ZWQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVPcHRpb25DaGFuZ2UoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc2F2ZSBidXR0b24gZWxlbWVudFxuICAgICAgICB2YXIgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZUJ1dHRvblwiKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHZhbHVlcyBvZiB2ZXJzaW9uLCB0aGVtZSwgYW5kIGluaXRpYWxpemVTdGFydHVwXG4gICAgICAgIHZhciBjdXJyZW50VmVyc2lvblZhbHVlID0gdmVyc2lvblNlbGVjdC52YWx1ZTtcbiAgICAgICAgdmFyIGN1cnJlbnRUaGVtZVZhbHVlID0gdGhlbWVTZWxlY3QudmFsdWU7XG4gICAgICAgIHZhciBjdXJyZW50SW5pdGlhbGl6ZVN0YXJ0dXBWYWx1ZSA9IGluaXRpYWxpemVTdGFydHVwLmNoZWNrZWQ7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSB1bnNhdmVkIGNoYW5nZXNcbiAgICAgICAgaWYgKGN1cnJlbnRWZXJzaW9uVmFsdWUgIT09IGluaXRpYWxWZXJzaW9uVmFsdWUgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUaGVtZVZhbHVlICE9PSBpbml0aWFsVGhlbWVWYWx1ZSB8fFxuICAgICAgICAgICAgY3VycmVudEluaXRpYWxpemVTdGFydHVwVmFsdWUgIT09IGluaXRpYWxpemVTdGFydHVwVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHNhdmUgYnV0dG9uXG4gICAgICAgICAgICBzYXZlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAvLyBQcm9tcHQgdXNlciBiZWZvcmUgbGVhdmluZyB0aGUgcGFnZVxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgc2F2ZSBidXR0b25cbiAgICAgICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBvYmplY3Qgd2l0aCBjdXJyZW50IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGN1cnJlbnRWZXJzaW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiBjdXJyZW50VGhlbWVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZVN0YXJ0dXA6IGN1cnJlbnRJbml0aWFsaXplU3RhcnR1cFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21NZXNzYWdlczogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2V0dGluZ3MgdXNpbmcgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICB1cGRhdGVTZXR0aW5ncyhkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSGlkZSB0aGUgc2F2ZSBidXR0b25cbiAgICAgICAgICAgIHNhdmVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9tcHQgZm9yIGxlYXZpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzZXR0aW5ncyB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSB0byB1cGRhdGUgdGhlIHNldHRpbmdzIHdpdGhcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVTZXR0aW5ncyhkYXRhKSB7XG4gICAgICAgIC8vIFNldCB0aGUgZXh0ZW5zaW9uIGRhdGEgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAgICAoMCwgc3RvcmFnZU1hbmFnZXJfMS5zZXRFeHRlbnNpb25EYXRhKShkYXRhKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTG9nIHRoZSBzYXZlZCBzZXR0aW5nc1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5ncyBzYXZlZDpcIiwgZGF0YSk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGJlZm9yZXVubG9hZCBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFJlbG9hZCB0aGUgd2luZG93XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBMb2cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgYW4gaXNzdWUgc2F2aW5nIHRoZSBzZXR0aW5nc1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBzZXR0aW5nczpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIFwiQ29taW5nIFNvb24uLi5cIiB0ZXh0IHRvIHRoZSBzcGVjaWZpZWQgc2VjdGlvbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBzZWN0aW9uIC0gVGhlIEhUTUxFbGVtZW50IHRvIHdoaWNoIHRoZSB0ZXh0IHdpbGwgYmUgYWRkZWQuXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdGV4dCB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkLCBmYWxzZSBpZiB0aGUgc2VjdGlvbiBpcyBudWxsLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZENvbWluZ1Nvb25UZXh0KHNlY3Rpb24pIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBcIkNvbWluZyBTb29uLi4uXCIgdGV4dCBlbGVtZW50XG4gICAgICAgIHZhciBjb21pbmdTb29uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgY29taW5nU29vblRleHQudGV4dENvbnRlbnQgPSBcIuKPse+4jyBDb21pbmcgU29vbi4uLlwiO1xuICAgICAgICBjb21pbmdTb29uVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29taW5nLXNvb25cIik7XG4gICAgICAgIGNvbWluZ1Nvb25UZXh0LnN0eWxlLnBhZGRpbmcgPSBcIjFyZW1cIjtcbiAgICAgICAgY29taW5nU29vblRleHQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY29taW5nU29vblRleHQuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzMxMzEzMVwiO1xuICAgICAgICBjb21pbmdTb29uVGV4dC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgLy8gSWYgdGhlIHNlY3Rpb24gaXMgbnVsbCwgcmVtb3ZlIHRoZSB0ZXh0IGFuZCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKCFzZWN0aW9uKSB7XG4gICAgICAgICAgICBjb21pbmdTb29uVGV4dC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdGhlIFwiQ29taW5nIFNvb24uLi5cIiB0ZXh0IHRvIHRoZSBzZWN0aW9uIGFuZCByZXR1cm4gdHJ1ZVxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbWluZ1Nvb25UZXh0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBzY3JvbGwgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbEFuZENsaWNrKCkge1xuICAgICAgICAvLyBHZXQgYWxsIHNlY3Rpb24gZWxlbWVudHMgaW4gdGhlIHNpZGViYXJcbiAgICAgICAgdmFyIHNpZGViYXJTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyIHVsIGxpJyk7XG4gICAgICAgIC8vIEdldCB0aGUgcGFkZGluZyBvciBzcGFjaW5nIGFmZmVjdGluZyB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBwYWRkaW5nT2Zmc2V0ID0gNTA7IC8vIEFkanVzdCB0aGlzIHZhbHVlIGFzIG5lZWRlZFxuICAgICAgICAvLyBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhZGp1c3RlZCBmb3IgcGFkZGluZyBvciBzcGFjaW5nXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRlbnQnKS5zY3JvbGxUb3AgKyBwYWRkaW5nT2Zmc2V0O1xuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBzaWRlYmFyIHNlY3Rpb25cbiAgICAgICAgc2lkZWJhclNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29ycmVzcG9uZGluZyBzZWN0aW9uIGluIHRoZSBjb250ZW50IGFyZWEgYmFzZWQgb24gaXRzIGhyZWYgYXR0cmlidXRlXG4gICAgICAgICAgICB2YXIgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb24ucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb250ZW50IHNlY3Rpb24gZXhpc3RzIGFuZCBpZiBpdHMgdG9wIHBvc2l0aW9uIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAoY29udGVudFNlY3Rpb24gJiYgY29udGVudFNlY3Rpb24ub2Zmc2V0VG9wIDw9IHNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlICdhY3RpdmUnIGNsYXNzIGZyb20gYWxsIHNpZGViYXIgc2VjdGlvbnNcbiAgICAgICAgICAgICAgICBzaWRlYmFyU2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjKSB7IHJldHVybiBzZWMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH0pO1xuICAgICAgICAgICAgICAgIC8vIEFkZCAnYWN0aXZlJyBjbGFzcyB0byB0aGUgY3VycmVudCBzaWRlYmFyIHNlY3Rpb25cbiAgICAgICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgeWVhciBkaXNwbGF5ZWQgaW4gdGhlIHNwZWNpZmllZCBIVE1MIGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmludFllYXIoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCB5ZWFyXG4gICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgLy8gRmluZCB0aGUgZWxlbWVudCB3aXRoIGlkIFwieWVhclwiXG4gICAgICAgIHZhciB5ZWFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyXCIpO1xuICAgICAgICAvLyBTZXQgdGhlIGlubmVySFRNTCBvZiB0aGUgc3BhbiBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgeWVhclxuICAgICAgICB5ZWFyQ29udGFpbmVyLmlubmVySFRNTCA9IGN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50IG9uIHRoZSAub3B0aW9ucy1jb250ZW50IHNlY3Rpb25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsQW5kQ2xpY2spO1xuICAgIC8vIEdldCBhbGwgc2VjdGlvbiBlbGVtZW50cyBpbiB0aGUgc2lkZWJhclxuICAgIHZhciBzaWRlYmFyU2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhciB1bCBsaScpO1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgY2xpY2sgZXZlbnQgb24gc2lkZWJhciBzZWN0aW9uc1xuICAgIHNpZGViYXJTZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgIHNlY3Rpb24ucXVlcnlTZWxlY3RvcignYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlICdhY3RpdmUnIGNsYXNzIGZyb20gYWxsIHNpZGViYXIgc2VjdGlvbnNcbiAgICAgICAgICAgIHNpZGViYXJTZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWMpIHsgcmV0dXJuIHNlYy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgfSk7XG4gICAgICAgICAgICAvLyBBZGQgJ2FjdGl2ZScgY2xhc3MgdG8gdGhlIGNsaWNrZWQgc2lkZWJhciBzZWN0aW9uXG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBjb3JyZXNwb25kaW5nIHNlY3Rpb24gaW4gdGhlIGNvbnRlbnQgYXJlYVxuICAgICAgICAgICAgdmFyIGNvbnRlbnRTZWN0aW9uSWQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB2YXIgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50U2VjdGlvbklkKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50U2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBDYWxsIHRoZSBoYW5kbGVTY3JvbGxBbmRDbGljayBmdW5jdGlvbiBpbml0aWFsbHkgdG8gc2V0IHRoZSBhY3RpdmUgc2VjdGlvblxuICAgIGhhbmRsZVNjcm9sbEFuZENsaWNrKCk7XG4gICAgLy8gQ2FsbCB0aGUgcHJpbnRZZWFyIGZ1bmN0aW9uIHRvIHByaW50IHRoZSBjdXJyZW50IHllYXJcbiAgICBwcmludFllYXIoKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL29wdGlvbnMvb3B0aW9ucy50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==