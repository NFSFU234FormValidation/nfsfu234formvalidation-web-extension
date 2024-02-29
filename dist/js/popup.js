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

/***/ "./src/popup/popup.ts":
/*!****************************!*\
  !*** ./src/popup/popup.ts ***!
  \****************************/
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
/**
 * Function to fetch forms from the active tab and add event listeners
 * @param {HTMLElement} formValidationIsNotActiveDiv - The div for when form validation is not active
 * @param {HTMLElement} formValidationIsActiveDiv - The div for when form validation is active
 */
function addFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv) {
    // Log initiation
    console.log("initiated");
    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Get the active tab
        var activeTab = tabs[0];
        // Send message to get forms from the active tab
        chrome.tabs.sendMessage(activeTab.id, { action: "getForms" }, function (response) {
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
                response.forEach(function (form) {
                    // Send a message to the content script of the active tab to add form event listener
                    chrome.tabs.sendMessage(activeTab.id, { action: "addFormEventListener", formId: form.id });
                    // Listen for messages from the content script
                    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
                        console.log(message);
                        // If form validation is enabled
                        if (message.status === true) {
                            // Set local storage to indicate that form validation is enabled
                            localStorage.setItem('formValidationEnabled', 'true');
                            console.log("Form validation is enabled for the active tab.");
                            // Hide the div for when form validation is not active and show the div for when form validation is active
                            formValidationIsNotActiveDiv.classList.add('display-none');
                            formValidationIsActiveDiv.classList.remove('display-none');
                        }
                    });
                });
            }
            else {
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
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "removeFormEventListeners" });
        // Update the display of form validation div elements
        formValidationIsNotActiveDiv.classList.remove('display-none');
        formValidationIsActiveDiv.classList.add('display-none');
        // Remove temporary storage value indicating form validation is enabled
        localStorage.removeItem('formValidationEnabled');
    });
}
// Get extension data and initialize startup status
(0, storageManager_1.getExtensionData)().then(function (data) { return __awaiter(void 0, void 0, void 0, function () {
    // Define the event listener functions
    function enableFormValidation() {
        addFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv);
    }
    function disableFormValidation() {
        removeFormEventListeners(formValidationIsNotActiveDiv, formValidationIsActiveDiv);
    }
    var packageJSONURL, extensionPackageJSON, response, packageJSON, version, error_1, response, packageJSON, version, error_2, initializeStartupStatus, formValidationIsActiveDiv, formValidationIsNotActiveDiv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageJSONURL = chrome.runtime.getURL('lib/package.json');
                extensionPackageJSON = chrome.runtime.getURL('package.json');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(packageJSONURL)];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    console.log('Failed to fetch Data');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, response.json()];
            case 3:
                packageJSON = _a.sent();
                version = (packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.version) || "-----";
                console.log(version);
                // Set the version in the HTML element with id "version"
                document.getElementById("version").innerHTML = version;
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error('Error fetching package.json:', error_1);
                return [3 /*break*/, 5];
            case 5:
                _a.trys.push([5, 8, , 9]);
                return [4 /*yield*/, fetch(extensionPackageJSON)];
            case 6:
                response = _a.sent();
                if (!response.ok) {
                    console.log('Failed to fetch Data');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, response.json()];
            case 7:
                packageJSON = _a.sent();
                version = (packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.version) || "-----";
                console.log(version);
                // Set the version in the HTML element with id "appVersion"
                document.getElementById("appVersion").innerHTML = version;
                return [3 /*break*/, 9];
            case 8:
                error_2 = _a.sent();
                console.error('Error fetching package.json:', error_2);
                return [3 /*break*/, 9];
            case 9:
                initializeStartupStatus = (data === null || data === void 0 ? void 0 : data.initializeStartup) || localStorage.getItem('formValidationEnabled') === 'true' || false;
                formValidationIsActiveDiv = document.querySelector("#disable");
                formValidationIsNotActiveDiv = document.querySelector("#enabled");
                // Set up event listeners based on form validation status
                if (!initializeStartupStatus) {
                    formValidationIsNotActiveDiv.classList.remove('display-none');
                    formValidationIsNotActiveDiv.addEventListener('click', enableFormValidation);
                    formValidationIsActiveDiv.addEventListener('click', disableFormValidation);
                }
                else {
                    formValidationIsActiveDiv.classList.remove('display-none');
                    formValidationIsNotActiveDiv.addEventListener('click', enableFormValidation);
                    formValidationIsActiveDiv.addEventListener('click', disableFormValidation);
                }
                return [2 /*return*/];
        }
    });
}); });
// Listen for the beforeunload event
window.addEventListener('beforeunload', function () {
    // Remove the formValidationEnabled value from localStorage
    localStorage.removeItem('formValidationEnabled');
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/popup/popup.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O1VDM0xEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vLi9zcmMvaGVscGVycy9zdG9yYWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9uZnNmdTIzNGZvcm12YWxpZGF0aW9uLXdlYi1leHRlbnNpb24vLi9zcmMvcG9wdXAvcG9wdXAudHMiLCJ3ZWJwYWNrOi8vbmZzZnUyMzRmb3JtdmFsaWRhdGlvbi13ZWItZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmZzZnUyMzRmb3JtdmFsaWRhdGlvbi13ZWItZXh0ZW5zaW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0cmlldmVEYXRhRnJvbVN0b3JhZ2UgPSBleHBvcnRzLnN0b3JlRGF0YUluU3RvcmFnZSA9IGV4cG9ydHMuc2V0RXh0ZW5zaW9uRGF0YSA9IGV4cG9ydHMuZ2V0RXh0ZW5zaW9uRGF0YSA9IGV4cG9ydHMuREVGQVVMVF9EQVRBID0gdm9pZCAwO1xuLy8gRGVmaW5lIGRlZmF1bHQgdmFsdWVzIGZvciBleHRlbnNpb24gZGF0YVxuZXhwb3J0cy5ERUZBVUxUX0RBVEEgPSB7XG4gICAgdmVyc2lvbjogXCJsYXRlc3RcIixcbiAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICBpbml0aWFsaXplU3RhcnR1cDogZmFsc2UsXG4gICAgY3VzdG9tTWVzc2FnZXM6IFtdLFxuICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyBmb3Igb3RoZXIgcHJvcGVydGllc1xufTtcbi8qKlxuICogUmV0cmlldmVzIGV4dGVuc2lvbiBkYXRhIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAqIEByZXR1cm5zIFByb21pc2U8RXh0ZW5zaW9uRGF0YSB8IG51bGw+IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV4dGVuc2lvbiBkYXRhIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGdldEV4dGVuc2lvbkRhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdleHRlbnNpb25EYXRhJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXN1bHQgJiYgcmVzdWx0LmV4dGVuc2lvbkRhdGEgPyByZXN1bHQuZXh0ZW5zaW9uRGF0YSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRFeHRlbnNpb25EYXRhID0gZ2V0RXh0ZW5zaW9uRGF0YTtcbi8qKlxuICogU2V0cyB0aGUgZXh0ZW5zaW9uIGRhdGEgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBleHRlbnNpb24gZGF0YSB0byBiZSBzdG9yZWRcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGRhdGEgaXMgc3VjY2Vzc2Z1bGx5IHN0b3JlZFxuICovXG5mdW5jdGlvbiBzZXRFeHRlbnNpb25EYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyAnZXh0ZW5zaW9uRGF0YSc6IGRhdGEgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zZXRFeHRlbnNpb25EYXRhID0gc2V0RXh0ZW5zaW9uRGF0YTtcbi8qKlxuICogU3RvcmUgZGF0YSBpbiBDaHJvbWUgc3RvcmFnZVxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byBiZSBzdG9yZWRcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGRhdGEgaXMgc3VjY2Vzc2Z1bGx5IHN0b3JlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gKi9cbmZ1bmN0aW9uIHN0b3JlRGF0YUluU3RvcmFnZShkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyAnZXh0ZW5zaW9uRGF0YSc6IGRhdGEgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RFcnJvciA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcmVEYXRhSW5TdG9yYWdlID0gc3RvcmVEYXRhSW5TdG9yYWdlO1xuLyoqXG4gKiBSZXRyaWV2ZSBkYXRhIGZyb20gQ2hyb21lIHN0b3JhZ2VcbiAqIEByZXR1cm5zIFByb21pc2U8YW55PiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXRyaWV2ZWQgZGF0YSBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAqL1xuZnVuY3Rpb24gcmV0cmlldmVEYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2V4dGVuc2lvbkRhdGEnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEVycm9yID0gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRbJ2V4dGVuc2lvbkRhdGEnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJldHJpZXZlRGF0YUZyb21TdG9yYWdlID0gcmV0cmlldmVEYXRhRnJvbVN0b3JhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzdG9yYWdlTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RvcmFnZU1hbmFnZXJcIik7XG4vKipcbiAqIEZ1bmN0aW9uIHRvIGZldGNoIGZvcm1zIGZyb20gdGhlIGFjdGl2ZSB0YWIgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1WYWxpZGF0aW9uSXNOb3RBY3RpdmVEaXYgLSBUaGUgZGl2IGZvciB3aGVuIGZvcm0gdmFsaWRhdGlvbiBpcyBub3QgYWN0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2IC0gVGhlIGRpdiBmb3Igd2hlbiBmb3JtIHZhbGlkYXRpb24gaXMgYWN0aXZlXG4gKi9cbmZ1bmN0aW9uIGFkZEZvcm1FdmVudExpc3RlbmVycyhmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2LCBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2KSB7XG4gICAgLy8gTG9nIGluaXRpYXRpb25cbiAgICBjb25zb2xlLmxvZyhcImluaXRpYXRlZFwiKTtcbiAgICAvLyBRdWVyeSB0aGUgYWN0aXZlIHRhYlxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vIEdldCB0aGUgYWN0aXZlIHRhYlxuICAgICAgICB2YXIgYWN0aXZlVGFiID0gdGFic1swXTtcbiAgICAgICAgLy8gU2VuZCBtZXNzYWdlIHRvIGdldCBmb3JtcyBmcm9tIHRoZSBhY3RpdmUgdGFiXG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGFjdGl2ZVRhYi5pZCwgeyBhY3Rpb246IFwiZ2V0Rm9ybXNcIiB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vIElmIGZvcm1zIGFyZSByZWNlaXZlZFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBmb3JtcyByZWNlaXZlZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybXMgZnJvbSBhY3RpdmUgdGFiOlwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIHZhbGlkYXRpb24gaXMgZW5hYmxlZCBmb3IgdGhlIGFjdGl2ZSB0YWIuXCIpO1xuICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGRpdiBmb3Igd2hlbiBmb3JtIHZhbGlkYXRpb24gaXMgbm90IGFjdGl2ZSBhbmQgc2hvdyB0aGUgZGl2IGZvciB3aGVuIGZvcm0gdmFsaWRhdGlvbiBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgIGZvcm1WYWxpZGF0aW9uSXNBY3RpdmVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGxvY2FsIHN0b3JhZ2UgdG8gaW5kaWNhdGUgdGhhdCBmb3JtIHZhbGlkYXRpb24gaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb3JtVmFsaWRhdGlvbkVuYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGZvcm0gcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjb250ZW50IHNjcmlwdCBvZiB0aGUgYWN0aXZlIHRhYiB0byBhZGQgZm9ybSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhY3RpdmVUYWIuaWQsIHsgYWN0aW9uOiBcImFkZEZvcm1FdmVudExpc3RlbmVyXCIsIGZvcm1JZDogZm9ybS5pZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGZvcm0gdmFsaWRhdGlvbiBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgbG9jYWwgc3RvcmFnZSB0byBpbmRpY2F0ZSB0aGF0IGZvcm0gdmFsaWRhdGlvbiBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm1WYWxpZGF0aW9uRW5hYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIHZhbGlkYXRpb24gaXMgZW5hYmxlZCBmb3IgdGhlIGFjdGl2ZSB0YWIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGRpdiBmb3Igd2hlbiBmb3JtIHZhbGlkYXRpb24gaXMgbm90IGFjdGl2ZSBhbmQgc2hvdyB0aGUgZGl2IGZvciB3aGVuIGZvcm0gdmFsaWRhdGlvbiBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWxpZGF0aW9uSXNBY3RpdmVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBmb3JtcyBmb3VuZCBpbiBhY3RpdmUgdGFiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJlbW92ZSBmb3JtIGV2ZW50IGxpc3RlbmVyc1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1WYWxpZGF0aW9uSXNOb3RBY3RpdmVEaXYgLSBUaGUgZGl2IGVsZW1lbnQgZm9yIGZvcm0gdmFsaWRhdGlvbiB3aGVuIGl0IGlzIG5vdCBhY3RpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1WYWxpZGF0aW9uSXNBY3RpdmVEaXYgLSBUaGUgZGl2IGVsZW1lbnQgZm9yIGZvcm0gdmFsaWRhdGlvbiB3aGVuIGl0IGlzIGFjdGl2ZVxuICovXG5mdW5jdGlvbiByZW1vdmVGb3JtRXZlbnRMaXN0ZW5lcnMoZm9ybVZhbGlkYXRpb25Jc05vdEFjdGl2ZURpdiwgZm9ybVZhbGlkYXRpb25Jc0FjdGl2ZURpdikge1xuICAgIC8vIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBjb250ZW50IHNjcmlwdCB0byByZW1vdmUgZm9ybSBldmVudCBsaXN0ZW5lcnNcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICB2YXIgYWN0aXZlVGFiID0gdGFic1swXTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoYWN0aXZlVGFiLmlkLCB7IGFjdGlvbjogXCJyZW1vdmVGb3JtRXZlbnRMaXN0ZW5lcnNcIiB9KTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5IG9mIGZvcm0gdmFsaWRhdGlvbiBkaXYgZWxlbWVudHNcbiAgICAgICAgZm9ybVZhbGlkYXRpb25Jc05vdEFjdGl2ZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgZm9ybVZhbGlkYXRpb25Jc0FjdGl2ZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRlbXBvcmFyeSBzdG9yYWdlIHZhbHVlIGluZGljYXRpbmcgZm9ybSB2YWxpZGF0aW9uIGlzIGVuYWJsZWRcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2Zvcm1WYWxpZGF0aW9uRW5hYmxlZCcpO1xuICAgIH0pO1xufVxuLy8gR2V0IGV4dGVuc2lvbiBkYXRhIGFuZCBpbml0aWFsaXplIHN0YXJ0dXAgc3RhdHVzXG4oMCwgc3RvcmFnZU1hbmFnZXJfMS5nZXRFeHRlbnNpb25EYXRhKSgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGVmaW5lIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBlbmFibGVGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgYWRkRm9ybUV2ZW50TGlzdGVuZXJzKGZvcm1WYWxpZGF0aW9uSXNOb3RBY3RpdmVEaXYsIGZvcm1WYWxpZGF0aW9uSXNBY3RpdmVEaXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlRm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHJlbW92ZUZvcm1FdmVudExpc3RlbmVycyhmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2LCBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2KTtcbiAgICB9XG4gICAgdmFyIHBhY2thZ2VKU09OVVJMLCBleHRlbnNpb25QYWNrYWdlSlNPTiwgcmVzcG9uc2UsIHBhY2thZ2VKU09OLCB2ZXJzaW9uLCBlcnJvcl8xLCByZXNwb25zZSwgcGFja2FnZUpTT04sIHZlcnNpb24sIGVycm9yXzIsIGluaXRpYWxpemVTdGFydHVwU3RhdHVzLCBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2LCBmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHBhY2thZ2VKU09OVVJMID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdsaWIvcGFja2FnZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uUGFja2FnZUpTT04gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ3BhY2thZ2UuanNvbicpO1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHBhY2thZ2VKU09OVVJMKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGZldGNoIERhdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHBhY2thZ2VKU09OID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHZlcnNpb24gPSAocGFja2FnZUpTT04gPT09IG51bGwgfHwgcGFja2FnZUpTT04gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhY2thZ2VKU09OLnZlcnNpb24pIHx8IFwiLS0tLS1cIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2ZXJzaW9uKTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZlcnNpb24gaW4gdGhlIEhUTUwgZWxlbWVudCB3aXRoIGlkIFwidmVyc2lvblwiXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uXCIpLmlubmVySFRNTCA9IHZlcnNpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwYWNrYWdlLmpzb246JywgZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFs1LCA4LCAsIDldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChleHRlbnNpb25QYWNrYWdlSlNPTildO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBmZXRjaCBEYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBwYWNrYWdlSlNPTiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHBhY2thZ2VKU09OID09PSBudWxsIHx8IHBhY2thZ2VKU09OID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWNrYWdlSlNPTi52ZXJzaW9uKSB8fCBcIi0tLS0tXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmVyc2lvbik7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2ZXJzaW9uIGluIHRoZSBIVE1MIGVsZW1lbnQgd2l0aCBpZCBcImFwcFZlcnNpb25cIlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwVmVyc2lvblwiKS5pbm5lckhUTUwgPSB2ZXJzaW9uO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGFja2FnZS5qc29uOicsIGVycm9yXzIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVTdGFydHVwU3RhdHVzID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5pbml0aWFsaXplU3RhcnR1cCkgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1WYWxpZGF0aW9uRW5hYmxlZCcpID09PSAndHJ1ZScgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9ybVZhbGlkYXRpb25Jc0FjdGl2ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmFibGVkXCIpO1xuICAgICAgICAgICAgICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgYmFzZWQgb24gZm9ybSB2YWxpZGF0aW9uIHN0YXR1c1xuICAgICAgICAgICAgICAgIGlmICghaW5pdGlhbGl6ZVN0YXJ0dXBTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbGlkYXRpb25Jc05vdEFjdGl2ZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbGlkYXRpb25Jc05vdEFjdGl2ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUZvcm1WYWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbGlkYXRpb25Jc0FjdGl2ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc2FibGVGb3JtVmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzTm90QWN0aXZlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlRm9ybVZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsaWRhdGlvbklzQWN0aXZlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzYWJsZUZvcm1WYWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4vLyBMaXN0ZW4gZm9yIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBmb3JtVmFsaWRhdGlvbkVuYWJsZWQgdmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybVZhbGlkYXRpb25FbmFibGVkJyk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wb3B1cC9wb3B1cC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==