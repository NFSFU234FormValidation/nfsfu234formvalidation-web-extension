/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeCssLinkTagToHead = exports.removeExtensionScriptTagToBody = exports.removeScriptTagToBody = exports.addCssLinkTagToHead = exports.addExtensionScriptTagToBody = exports.addScriptTagToBody = void 0;
/**
 * Adds a script tag with the specified URL to the <head> of the webpage.
 * @param {string} scriptSrc - The URL of the script to be added
 */
var addScriptTagToBody = function (scriptSrc) {
    return new Promise(function (resolve, reject) {
        // Create a new script element
        var script = document.createElement('script');
        script.id = 'NFSFU234FormValidationLibraryJS';
        // Set the source URL for the script
        script.src = scriptSrc;
        // Event listener for successful loading of the script
        script.onload = function () {
            resolve();
        };
        // Event listener for error while loading the script
        script.onerror = function (error) {
            reject(error);
        };
        // Append the script element to the <head> of the document
        document.body.appendChild(script);
    });
};
exports.addScriptTagToBody = addScriptTagToBody;
/**
 * Removes the script tag with the id 'NFSFU234FormValidationLibraryJS' from the document body.
 * @returns {boolean} - Returns true if the script tag was found and removed, otherwise returns void.
 */
var removeScriptTagToBody = function () {
    var script = document.getElementById('NFSFU234FormValidationLibraryJS');
    if (script) {
        script.remove();
        return true;
    }
};
exports.removeScriptTagToBody = removeScriptTagToBody;
/**
 * Adds a script tag with the specified source URL to the body of the document
 * @param scriptSrc - The URL of the script to be added
 * @returns A promise that resolves when the script is successfully loaded, and rejects if there is an error
 */
var addExtensionScriptTagToBody = function (scriptSrc) {
    return new Promise(function (resolve, reject) {
        // Create a new script element
        var script = document.createElement('script');
        script.id = 'NFSFU234FormValidationExtensionJS';
        // Set the source URL for the script
        script.src = scriptSrc;
        // Event listener for successful loading of the script
        script.onload = function () {
            resolve();
        };
        // Event listener for error while loading the script
        script.onerror = function (error) {
            reject(error);
        };
        // Append the script element to the <body> of the document
        document.body.appendChild(script);
    });
};
exports.addExtensionScriptTagToBody = addExtensionScriptTagToBody;
/**
 * Removes the extension script tag from the body if it exists
 * @returns true if the script tag was found and removed, otherwise undefined
 */
var removeExtensionScriptTagToBody = function () {
    var script = document.getElementById('NFSFU234FormValidationExtensionJS');
    if (script) {
        script.remove();
        return true;
    }
};
exports.removeExtensionScriptTagToBody = removeExtensionScriptTagToBody;
/**
 * Function to add a CSS link tag to the <head> of the webpage
 * @param {string} cssSrc - The URL of the CSS file
 */
var addCssLinkTagToHead = function (cssSrc) {
    // Create a new link element
    var link = document.createElement('link');
    // Set the id attribute of the link
    link.id = 'NFSFU234FormValidationLibraryCSS';
    // Set the relationship of the link to stylesheet
    link.rel = 'stylesheet';
    // Set the href attribute of the link to the provided CSS source
    link.href = cssSrc;
    // Append the link to the <head> of the document 
    document.head.appendChild(link);
};
exports.addCssLinkTagToHead = addCssLinkTagToHead;
/**
 * Removes the CSS link tag with the specified id from the document head
 * @returns {boolean} - true if the link tag was found and removed, false otherwise
 */
var removeCssLinkTagToHead = function () {
    // Find the CSS link tag by its id
    var link = document.getElementById('NFSFU234FormValidationLibraryCSS');
    // Check if the link tag exists
    if (link) {
        // Remove the link tag from the document head
        link.remove();
        return true;
    }
    return false;
};
exports.removeCssLinkTagToHead = removeCssLinkTagToHead;


/***/ }),

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************************!*\
  !*** ./src/content_scripts/content_script.ts ***!
  \***********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Import necessary functions from helper files
var helpers_1 = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");
var storageManager_1 = __webpack_require__(/*! ../helpers/storageManager */ "./src/helpers/storageManager.ts");
// Retrieve extension data and perform necessary actions
(0, storageManager_1.getExtensionData)().then(function (data) {
    var _a, _b;
    if (!data) {
        // If no data found, set default data
        (0, storageManager_1.setExtensionData)(storageManager_1.DEFAULT_DATA);
    }
    // Check if initialization at startup is enabled
    if (data.initializeStartup === true) {
        // Get all forms on the webpage
        var forms = (_a = document.querySelectorAll('form')) !== null && _a !== void 0 ? _a : document.querySelectorAll("#jsForm");
        // Check if forms exist
        if (forms.length < 1) {
            console.log('No forms or input fields found on the webpage.');
            return;
        }
        // Add CSS and JS files for form validation
        var NFSFU234FormValidationCSSURL = chrome.runtime.getURL('lib/nfsfu234FormValidation.min.css');
        (0, helpers_1.addCssLinkTagToHead)(NFSFU234FormValidationCSSURL);
        var NFSFU234FormValidationJsURL = chrome.runtime.getURL('lib/nfsfu234FormValidation.js');
        (0, helpers_1.addScriptTagToBody)(NFSFU234FormValidationJsURL);
        // Add extension script tag to body
        var extensionURL = chrome.runtime.getURL('js/custom_script.js');
        (0, helpers_1.addExtensionScriptTagToBody)(extensionURL);
    }
    else {
        // If initialization at startup is not enabled, do nothing
        var forms = (_b = document.querySelectorAll('form')) !== null && _b !== void 0 ? _b : document.querySelectorAll("#jsForm");
        if (forms.length < 1) {
            console.log('No forms or input fields found on the webpage.');
            return;
        }
    }
});
// Listen for messages from the popup to add event listeners to forms
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getForms") {
        // Collect all forms in the document and send them back as a response to the popup
        var forms = Array.from(document.querySelectorAll("form"));
        var formsArray = forms.map(function (form) {
            return {
                id: form.id,
                name: form.name,
                action: form.action,
                method: form.method,
            };
        });
        sendResponse(formsArray);
    }
    else if (message.action === "addFormEventListener") {
        // Add event listener to form submission and submit button click
        var form = document.getElementById(message.formId);
        if (form) {
            // Add CSS, JS files, and extension script tag
            (0, helpers_1.addCssLinkTagToHead)(chrome.runtime.getURL('lib/nfsfu234FormValidation.min.css'));
            (0, helpers_1.addScriptTagToBody)(chrome.runtime.getURL('lib/nfsfu234FormValidation.js'));
            (0, helpers_1.addExtensionScriptTagToBody)(chrome.runtime.getURL('js/custom_script.js'));
            // Add event listener for form submission
            form.addEventListener("submit", function (e) {
                e.preventDefault(); // Prevent default form submission
                handleFormSubmit(); // Handle form submission
            });
            // Add event listener for submit button click
            var submitButton = form.querySelector("button[type='submit']");
            if (submitButton) {
                submitButton.addEventListener("click", handleFormButtonClick);
            }
            // Send success response
            sendResponse({ success: true });
        }
        else {
            // Send error response if form not found
            var responseMessage = "Ensure your form has a HTML attribute of id and the value is not set to empty string or #";
            console.log(responseMessage);
            alert(responseMessage);
            sendResponse({ success: false, message: "Form not found" });
        }
    }
    else if (message.action === "removeFormEventListeners") {
        // Remove form event listeners and related tags
        var forms = document.querySelectorAll("form");
        forms.forEach(function (form) {
            (0, helpers_1.removeCssLinkTagToHead)();
            (0, helpers_1.removeScriptTagToBody)();
            (0, helpers_1.removeExtensionScriptTagToBody)();
            (0, helpers_1.addExtensionScriptTagToBody)(chrome.runtime.getURL('js/custom_script2.js'));
            form.removeEventListener("submit", handleFormSubmit);
            var submitButton = form.querySelector("button[type='submit']");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZzZnUyMzRmb3JtdmFsaWRhdGlvbi13ZWItZXh0ZW5zaW9uLy4vc3JjL2hlbHBlcnMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vLi9zcmMvaGVscGVycy9zdG9yYWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmZzZnUyMzRmb3JtdmFsaWRhdGlvbi13ZWItZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9jb250ZW50X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlQ3NzTGlua1RhZ1RvSGVhZCA9IGV4cG9ydHMucmVtb3ZlRXh0ZW5zaW9uU2NyaXB0VGFnVG9Cb2R5ID0gZXhwb3J0cy5yZW1vdmVTY3JpcHRUYWdUb0JvZHkgPSBleHBvcnRzLmFkZENzc0xpbmtUYWdUb0hlYWQgPSBleHBvcnRzLmFkZEV4dGVuc2lvblNjcmlwdFRhZ1RvQm9keSA9IGV4cG9ydHMuYWRkU2NyaXB0VGFnVG9Cb2R5ID0gdm9pZCAwO1xuLyoqXG4gKiBBZGRzIGEgc2NyaXB0IHRhZyB3aXRoIHRoZSBzcGVjaWZpZWQgVVJMIHRvIHRoZSA8aGVhZD4gb2YgdGhlIHdlYnBhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2NyaXB0U3JjIC0gVGhlIFVSTCBvZiB0aGUgc2NyaXB0IHRvIGJlIGFkZGVkXG4gKi9cbnZhciBhZGRTY3JpcHRUYWdUb0JvZHkgPSBmdW5jdGlvbiAoc2NyaXB0U3JjKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHNjcmlwdCBlbGVtZW50XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ05GU0ZVMjM0Rm9ybVZhbGlkYXRpb25MaWJyYXJ5SlMnO1xuICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSBVUkwgZm9yIHRoZSBzY3JpcHRcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNjcmlwdFNyYztcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHN1Y2Nlc3NmdWwgbG9hZGluZyBvZiB0aGUgc2NyaXB0XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGVsZW1lbnQgdG8gdGhlIDxoZWFkPiBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYWRkU2NyaXB0VGFnVG9Cb2R5ID0gYWRkU2NyaXB0VGFnVG9Cb2R5O1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBzY3JpcHQgdGFnIHdpdGggdGhlIGlkICdORlNGVTIzNEZvcm1WYWxpZGF0aW9uTGlicmFyeUpTJyBmcm9tIHRoZSBkb2N1bWVudCBib2R5LlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBzY3JpcHQgdGFnIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZCwgb3RoZXJ3aXNlIHJldHVybnMgdm9pZC5cbiAqL1xudmFyIHJlbW92ZVNjcmlwdFRhZ1RvQm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05GU0ZVMjM0Rm9ybVZhbGlkYXRpb25MaWJyYXJ5SlMnKTtcbiAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbmV4cG9ydHMucmVtb3ZlU2NyaXB0VGFnVG9Cb2R5ID0gcmVtb3ZlU2NyaXB0VGFnVG9Cb2R5O1xuLyoqXG4gKiBBZGRzIGEgc2NyaXB0IHRhZyB3aXRoIHRoZSBzcGVjaWZpZWQgc291cmNlIFVSTCB0byB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSBzY3JpcHRTcmMgLSBUaGUgVVJMIG9mIHRoZSBzY3JpcHQgdG8gYmUgYWRkZWRcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLCBhbmQgcmVqZWN0cyBpZiB0aGVyZSBpcyBhbiBlcnJvclxuICovXG52YXIgYWRkRXh0ZW5zaW9uU2NyaXB0VGFnVG9Cb2R5ID0gZnVuY3Rpb24gKHNjcmlwdFNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzY3JpcHQgZWxlbWVudFxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5pZCA9ICdORlNGVTIzNEZvcm1WYWxpZGF0aW9uRXh0ZW5zaW9uSlMnO1xuICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSBVUkwgZm9yIHRoZSBzY3JpcHRcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNjcmlwdFNyYztcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHN1Y2Nlc3NmdWwgbG9hZGluZyBvZiB0aGUgc2NyaXB0XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBzY3JpcHRcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IGVsZW1lbnQgdG8gdGhlIDxib2R5PiBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYWRkRXh0ZW5zaW9uU2NyaXB0VGFnVG9Cb2R5ID0gYWRkRXh0ZW5zaW9uU2NyaXB0VGFnVG9Cb2R5O1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBleHRlbnNpb24gc2NyaXB0IHRhZyBmcm9tIHRoZSBib2R5IGlmIGl0IGV4aXN0c1xuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2NyaXB0IHRhZyB3YXMgZm91bmQgYW5kIHJlbW92ZWQsIG90aGVyd2lzZSB1bmRlZmluZWRcbiAqL1xudmFyIHJlbW92ZUV4dGVuc2lvblNjcmlwdFRhZ1RvQm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05GU0ZVMjM0Rm9ybVZhbGlkYXRpb25FeHRlbnNpb25KUycpO1xuICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuZXhwb3J0cy5yZW1vdmVFeHRlbnNpb25TY3JpcHRUYWdUb0JvZHkgPSByZW1vdmVFeHRlbnNpb25TY3JpcHRUYWdUb0JvZHk7XG4vKipcbiAqIEZ1bmN0aW9uIHRvIGFkZCBhIENTUyBsaW5rIHRhZyB0byB0aGUgPGhlYWQ+IG9mIHRoZSB3ZWJwYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY3NzU3JjIC0gVGhlIFVSTCBvZiB0aGUgQ1NTIGZpbGVcbiAqL1xudmFyIGFkZENzc0xpbmtUYWdUb0hlYWQgPSBmdW5jdGlvbiAoY3NzU3JjKSB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGxpbmsgZWxlbWVudFxuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIC8vIFNldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSBsaW5rXG4gICAgbGluay5pZCA9ICdORlNGVTIzNEZvcm1WYWxpZGF0aW9uTGlicmFyeUNTUyc7XG4gICAgLy8gU2V0IHRoZSByZWxhdGlvbnNoaXAgb2YgdGhlIGxpbmsgdG8gc3R5bGVzaGVldFxuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIC8vIFNldCB0aGUgaHJlZiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmsgdG8gdGhlIHByb3ZpZGVkIENTUyBzb3VyY2VcbiAgICBsaW5rLmhyZWYgPSBjc3NTcmM7XG4gICAgLy8gQXBwZW5kIHRoZSBsaW5rIHRvIHRoZSA8aGVhZD4gb2YgdGhlIGRvY3VtZW50IFxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG59O1xuZXhwb3J0cy5hZGRDc3NMaW5rVGFnVG9IZWFkID0gYWRkQ3NzTGlua1RhZ1RvSGVhZDtcbi8qKlxuICogUmVtb3ZlcyB0aGUgQ1NTIGxpbmsgdGFnIHdpdGggdGhlIHNwZWNpZmllZCBpZCBmcm9tIHRoZSBkb2N1bWVudCBoZWFkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBsaW5rIHRhZyB3YXMgZm91bmQgYW5kIHJlbW92ZWQsIGZhbHNlIG90aGVyd2lzZVxuICovXG52YXIgcmVtb3ZlQ3NzTGlua1RhZ1RvSGVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaW5kIHRoZSBDU1MgbGluayB0YWcgYnkgaXRzIGlkXG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTkZTRlUyMzRGb3JtVmFsaWRhdGlvbkxpYnJhcnlDU1MnKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgbGluayB0YWcgZXhpc3RzXG4gICAgaWYgKGxpbmspIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsaW5rIHRhZyBmcm9tIHRoZSBkb2N1bWVudCBoZWFkXG4gICAgICAgIGxpbmsucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0cy5yZW1vdmVDc3NMaW5rVGFnVG9IZWFkID0gcmVtb3ZlQ3NzTGlua1RhZ1RvSGVhZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXRyaWV2ZURhdGFGcm9tU3RvcmFnZSA9IGV4cG9ydHMuc3RvcmVEYXRhSW5TdG9yYWdlID0gZXhwb3J0cy5zZXRFeHRlbnNpb25EYXRhID0gZXhwb3J0cy5nZXRFeHRlbnNpb25EYXRhID0gZXhwb3J0cy5ERUZBVUxUX0RBVEEgPSB2b2lkIDA7XG4vLyBEZWZpbmUgZGVmYXVsdCB2YWx1ZXMgZm9yIGV4dGVuc2lvbiBkYXRhXG5leHBvcnRzLkRFRkFVTFRfREFUQSA9IHtcbiAgICB2ZXJzaW9uOiBcImxhdGVzdFwiLFxuICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgIGluaXRpYWxpemVTdGFydHVwOiBmYWxzZSxcbiAgICBjdXN0b21NZXNzYWdlczogW10sXG4gICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIGZvciBvdGhlciBwcm9wZXJ0aWVzXG59O1xuLyoqXG4gKiBSZXRyaWV2ZXMgZXh0ZW5zaW9uIGRhdGEgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICogQHJldHVybnMgUHJvbWlzZTxFeHRlbnNpb25EYXRhIHwgbnVsbD4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZXh0ZW5zaW9uIGRhdGEgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAqL1xuZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uRGF0YSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2V4dGVuc2lvbkRhdGEnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3VsdCAmJiByZXN1bHQuZXh0ZW5zaW9uRGF0YSA/IHJlc3VsdC5leHRlbnNpb25EYXRhIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldEV4dGVuc2lvbkRhdGEgPSBnZXRFeHRlbnNpb25EYXRhO1xuLyoqXG4gKiBTZXRzIHRoZSBleHRlbnNpb24gZGF0YSBpbiB0aGUgbG9jYWwgc3RvcmFnZS5cbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGV4dGVuc2lvbiBkYXRhIHRvIGJlIHN0b3JlZFxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZGF0YSBpcyBzdWNjZXNzZnVsbHkgc3RvcmVkXG4gKi9cbmZ1bmN0aW9uIHNldEV4dGVuc2lvbkRhdGEoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICdleHRlbnNpb25EYXRhJzogZGF0YSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnNldEV4dGVuc2lvbkRhdGEgPSBzZXRFeHRlbnNpb25EYXRhO1xuLyoqXG4gKiBTdG9yZSBkYXRhIGluIENocm9tZSBzdG9yYWdlXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIGJlIHN0b3JlZFxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZGF0YSBpcyBzdWNjZXNzZnVsbHkgc3RvcmVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAqL1xuZnVuY3Rpb24gc3RvcmVEYXRhSW5TdG9yYWdlKGRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICdleHRlbnNpb25EYXRhJzogZGF0YSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEVycm9yID0gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zdG9yZURhdGFJblN0b3JhZ2UgPSBzdG9yZURhdGFJblN0b3JhZ2U7XG4vKipcbiAqIFJldHJpZXZlIGRhdGEgZnJvbSBDaHJvbWUgc3RvcmFnZVxuICogQHJldHVybnMgUHJvbWlzZTxhbnk+IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJldHJpZXZlZCBkYXRhIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICovXG5mdW5jdGlvbiByZXRyaWV2ZURhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnZXh0ZW5zaW9uRGF0YScsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0RXJyb3IgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdFsnZXh0ZW5zaW9uRGF0YSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmV0cmlldmVEYXRhRnJvbVN0b3JhZ2UgPSByZXRyaWV2ZURhdGFGcm9tU3RvcmFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIEltcG9ydCBuZWNlc3NhcnkgZnVuY3Rpb25zIGZyb20gaGVscGVyIGZpbGVzXG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvaGVscGVyc1wiKTtcbnZhciBzdG9yYWdlTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RvcmFnZU1hbmFnZXJcIik7XG4vLyBSZXRyaWV2ZSBleHRlbnNpb24gZGF0YSBhbmQgcGVyZm9ybSBuZWNlc3NhcnkgYWN0aW9uc1xuKDAsIHN0b3JhZ2VNYW5hZ2VyXzEuZ2V0RXh0ZW5zaW9uRGF0YSkoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgLy8gSWYgbm8gZGF0YSBmb3VuZCwgc2V0IGRlZmF1bHQgZGF0YVxuICAgICAgICAoMCwgc3RvcmFnZU1hbmFnZXJfMS5zZXRFeHRlbnNpb25EYXRhKShzdG9yYWdlTWFuYWdlcl8xLkRFRkFVTFRfREFUQSk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGluaXRpYWxpemF0aW9uIGF0IHN0YXJ0dXAgaXMgZW5hYmxlZFxuICAgIGlmIChkYXRhLmluaXRpYWxpemVTdGFydHVwID09PSB0cnVlKSB7XG4gICAgICAgIC8vIEdldCBhbGwgZm9ybXMgb24gdGhlIHdlYnBhZ2VcbiAgICAgICAgdmFyIGZvcm1zID0gKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2pzRm9ybVwiKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZm9ybXMgZXhpc3RcbiAgICAgICAgaWYgKGZvcm1zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmb3JtcyBvciBpbnB1dCBmaWVsZHMgZm91bmQgb24gdGhlIHdlYnBhZ2UuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIENTUyBhbmQgSlMgZmlsZXMgZm9yIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICB2YXIgTkZTRlUyMzRGb3JtVmFsaWRhdGlvbkNTU1VSTCA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnbGliL25mc2Z1MjM0Rm9ybVZhbGlkYXRpb24ubWluLmNzcycpO1xuICAgICAgICAoMCwgaGVscGVyc18xLmFkZENzc0xpbmtUYWdUb0hlYWQpKE5GU0ZVMjM0Rm9ybVZhbGlkYXRpb25DU1NVUkwpO1xuICAgICAgICB2YXIgTkZTRlUyMzRGb3JtVmFsaWRhdGlvbkpzVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdsaWIvbmZzZnUyMzRGb3JtVmFsaWRhdGlvbi5qcycpO1xuICAgICAgICAoMCwgaGVscGVyc18xLmFkZFNjcmlwdFRhZ1RvQm9keSkoTkZTRlUyMzRGb3JtVmFsaWRhdGlvbkpzVVJMKTtcbiAgICAgICAgLy8gQWRkIGV4dGVuc2lvbiBzY3JpcHQgdGFnIHRvIGJvZHlcbiAgICAgICAgdmFyIGV4dGVuc2lvblVSTCA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnanMvY3VzdG9tX3NjcmlwdC5qcycpO1xuICAgICAgICAoMCwgaGVscGVyc18xLmFkZEV4dGVuc2lvblNjcmlwdFRhZ1RvQm9keSkoZXh0ZW5zaW9uVVJMKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIGluaXRpYWxpemF0aW9uIGF0IHN0YXJ0dXAgaXMgbm90IGVuYWJsZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgdmFyIGZvcm1zID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2pzRm9ybVwiKTtcbiAgICAgICAgaWYgKGZvcm1zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmb3JtcyBvciBpbnB1dCBmaWVsZHMgZm91bmQgb24gdGhlIHdlYnBhZ2UuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIExpc3RlbiBmb3IgbWVzc2FnZXMgZnJvbSB0aGUgcG9wdXAgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byBmb3Jtc1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJnZXRGb3Jtc1wiKSB7XG4gICAgICAgIC8vIENvbGxlY3QgYWxsIGZvcm1zIGluIHRoZSBkb2N1bWVudCBhbmQgc2VuZCB0aGVtIGJhY2sgYXMgYSByZXNwb25zZSB0byB0aGUgcG9wdXBcbiAgICAgICAgdmFyIGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybVwiKSk7XG4gICAgICAgIHZhciBmb3Jtc0FycmF5ID0gZm9ybXMubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBmb3JtLmlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IGZvcm0uYWN0aW9uLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKGZvcm1zQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJhZGRGb3JtRXZlbnRMaXN0ZW5lclwiKSB7XG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBmb3JtIHN1Ym1pc3Npb24gYW5kIHN1Ym1pdCBidXR0b24gY2xpY2tcbiAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlLmZvcm1JZCk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICAvLyBBZGQgQ1NTLCBKUyBmaWxlcywgYW5kIGV4dGVuc2lvbiBzY3JpcHQgdGFnXG4gICAgICAgICAgICAoMCwgaGVscGVyc18xLmFkZENzc0xpbmtUYWdUb0hlYWQpKGNocm9tZS5ydW50aW1lLmdldFVSTCgnbGliL25mc2Z1MjM0Rm9ybVZhbGlkYXRpb24ubWluLmNzcycpKTtcbiAgICAgICAgICAgICgwLCBoZWxwZXJzXzEuYWRkU2NyaXB0VGFnVG9Cb2R5KShjaHJvbWUucnVudGltZS5nZXRVUkwoJ2xpYi9uZnNmdTIzNEZvcm1WYWxpZGF0aW9uLmpzJykpO1xuICAgICAgICAgICAgKDAsIGhlbHBlcnNfMS5hZGRFeHRlbnNpb25TY3JpcHRUYWdUb0JvZHkpKGNocm9tZS5ydW50aW1lLmdldFVSTCgnanMvY3VzdG9tX3NjcmlwdC5qcycpKTtcbiAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICAgICBoYW5kbGVGb3JtU3VibWl0KCk7IC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBzdWJtaXQgYnV0dG9uIGNsaWNrXG4gICAgICAgICAgICB2YXIgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xuICAgICAgICAgICAgaWYgKHN1Ym1pdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9ybUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlbmQgc3VjY2VzcyByZXNwb25zZVxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNlbmQgZXJyb3IgcmVzcG9uc2UgaWYgZm9ybSBub3QgZm91bmRcbiAgICAgICAgICAgIHZhciByZXNwb25zZU1lc3NhZ2UgPSBcIkVuc3VyZSB5b3VyIGZvcm0gaGFzIGEgSFRNTCBhdHRyaWJ1dGUgb2YgaWQgYW5kIHRoZSB2YWx1ZSBpcyBub3Qgc2V0IHRvIGVtcHR5IHN0cmluZyBvciAjXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZU1lc3NhZ2UpO1xuICAgICAgICAgICAgYWxlcnQocmVzcG9uc2VNZXNzYWdlKTtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZvcm0gbm90IGZvdW5kXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwicmVtb3ZlRm9ybUV2ZW50TGlzdGVuZXJzXCIpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGZvcm0gZXZlbnQgbGlzdGVuZXJzIGFuZCByZWxhdGVkIHRhZ3NcbiAgICAgICAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm1cIik7XG4gICAgICAgIGZvcm1zLmZvckVhY2goZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgICAgICgwLCBoZWxwZXJzXzEucmVtb3ZlQ3NzTGlua1RhZ1RvSGVhZCkoKTtcbiAgICAgICAgICAgICgwLCBoZWxwZXJzXzEucmVtb3ZlU2NyaXB0VGFnVG9Cb2R5KSgpO1xuICAgICAgICAgICAgKDAsIGhlbHBlcnNfMS5yZW1vdmVFeHRlbnNpb25TY3JpcHRUYWdUb0JvZHkpKCk7XG4gICAgICAgICAgICAoMCwgaGVscGVyc18xLmFkZEV4dGVuc2lvblNjcmlwdFRhZ1RvQm9keSkoY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdqcy9jdXN0b21fc2NyaXB0Mi5qcycpKTtcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbiAgICAgICAgICAgIHZhciBzdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb3JtQnV0dG9uQ2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoKSB7XG4gICAgLy8gQWRkIHlvdXIgbG9naWMgdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvbiBoZXJlXG59XG4vLyBIYW5kbGUgc3VibWl0IGJ1dHRvbiBjbGlja1xuZnVuY3Rpb24gaGFuZGxlRm9ybUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgLy8gQWRkIHlvdXIgbG9naWMgdG8gaGFuZGxlIHN1Ym1pdCBidXR0b24gY2xpY2sgaGVyZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9