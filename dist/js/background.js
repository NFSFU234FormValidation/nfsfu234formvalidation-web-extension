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
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Import necessary functions from storageManager helper
var storageManager_1 = __webpack_require__(/*! ../helpers/storageManager */ "./src/helpers/storageManager.ts");
// Check if extension data is set; if not, set default values
(0, storageManager_1.getExtensionData)().then(function (data) {
    if (!data) {
        // Set default data if no data is found
        (0, storageManager_1.setExtensionData)(storageManager_1.DEFAULT_DATA);
        return;
    }
    // Function to fetch forms from the active tab and add event listeners
    function addFormEventListeners() {
        // Query for the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Get the active tab
            var activeTab = tabs[0];
            // Send message to content script to get forms
            chrome.tabs.sendMessage(activeTab.id, { action: "getForms" }, function (response) {
                // Check if forms are received
                if (response && response.length > 0) {
                    // Log forms received
                    console.log("Forms from active tab:", response);
                    // Loop through each form
                    response.forEach(function (form) {
                        // Send message to content script to add event listener for the form
                        chrome.tabs.sendMessage(activeTab.id, { action: "addFormEventListener", formId: form.id });
                    });
                    // Enable form validation by setting a flag in localStorage
                    localStorage.setItem('formValidationEnabled', 'true');
                    // Log that form validation is enabled
                    console.log("Form validation is enabled for the active tab.");
                }
                else {
                    // Log if no forms are found
                    console.log("No forms found in active tab.");
                }
            });
        });
    }
    // Call the function to add form event listeners
    addFormEventListeners();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bHBlcnMvc3RvcmFnZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbmZzZnUyMzRmb3JtdmFsaWRhdGlvbi13ZWItZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHJpZXZlRGF0YUZyb21TdG9yYWdlID0gZXhwb3J0cy5zdG9yZURhdGFJblN0b3JhZ2UgPSBleHBvcnRzLnNldEV4dGVuc2lvbkRhdGEgPSBleHBvcnRzLmdldEV4dGVuc2lvbkRhdGEgPSBleHBvcnRzLkRFRkFVTFRfREFUQSA9IHZvaWQgMDtcbi8vIERlZmluZSBkZWZhdWx0IHZhbHVlcyBmb3IgZXh0ZW5zaW9uIGRhdGFcbmV4cG9ydHMuREVGQVVMVF9EQVRBID0ge1xuICAgIHZlcnNpb246IFwibGF0ZXN0XCIsXG4gICAgdGhlbWU6ICdsaWdodCcsXG4gICAgaW5pdGlhbGl6ZVN0YXJ0dXA6IGZhbHNlLFxuICAgIGN1c3RvbU1lc3NhZ2VzOiBbXSxcbiAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG90aGVyIHByb3BlcnRpZXNcbn07XG4vKipcbiAqIFJldHJpZXZlcyBleHRlbnNpb24gZGF0YSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gKiBAcmV0dXJucyBQcm9taXNlPEV4dGVuc2lvbkRhdGEgfCBudWxsPiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBleHRlbnNpb24gZGF0YSBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5mdW5jdGlvbiBnZXRFeHRlbnNpb25EYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnZXh0ZW5zaW9uRGF0YScsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzdWx0ICYmIHJlc3VsdC5leHRlbnNpb25EYXRhID8gcmVzdWx0LmV4dGVuc2lvbkRhdGEgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0RXh0ZW5zaW9uRGF0YSA9IGdldEV4dGVuc2lvbkRhdGE7XG4vKipcbiAqIFNldHMgdGhlIGV4dGVuc2lvbiBkYXRhIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZXh0ZW5zaW9uIGRhdGEgdG8gYmUgc3RvcmVkXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBkYXRhIGlzIHN1Y2Nlc3NmdWxseSBzdG9yZWRcbiAqL1xuZnVuY3Rpb24gc2V0RXh0ZW5zaW9uRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ2V4dGVuc2lvbkRhdGEnOiBkYXRhIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2V0RXh0ZW5zaW9uRGF0YSA9IHNldEV4dGVuc2lvbkRhdGE7XG4vKipcbiAqIFN0b3JlIGRhdGEgaW4gQ2hyb21lIHN0b3JhZ2VcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gYmUgc3RvcmVkXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBkYXRhIGlzIHN1Y2Nlc3NmdWxseSBzdG9yZWQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICovXG5mdW5jdGlvbiBzdG9yZURhdGFJblN0b3JhZ2UoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ2V4dGVuc2lvbkRhdGEnOiBkYXRhIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0RXJyb3IgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnN0b3JlRGF0YUluU3RvcmFnZSA9IHN0b3JlRGF0YUluU3RvcmFnZTtcbi8qKlxuICogUmV0cmlldmUgZGF0YSBmcm9tIENocm9tZSBzdG9yYWdlXG4gKiBAcmV0dXJucyBQcm9taXNlPGFueT4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmV0cmlldmVkIGRhdGEgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gKi9cbmZ1bmN0aW9uIHJldHJpZXZlRGF0YUZyb21TdG9yYWdlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdleHRlbnNpb25EYXRhJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RFcnJvciA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0WydleHRlbnNpb25EYXRhJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZXRyaWV2ZURhdGFGcm9tU3RvcmFnZSA9IHJldHJpZXZlRGF0YUZyb21TdG9yYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSW1wb3J0IG5lY2Vzc2FyeSBmdW5jdGlvbnMgZnJvbSBzdG9yYWdlTWFuYWdlciBoZWxwZXJcbnZhciBzdG9yYWdlTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RvcmFnZU1hbmFnZXJcIik7XG4vLyBDaGVjayBpZiBleHRlbnNpb24gZGF0YSBpcyBzZXQ7IGlmIG5vdCwgc2V0IGRlZmF1bHQgdmFsdWVzXG4oMCwgc3RvcmFnZU1hbmFnZXJfMS5nZXRFeHRlbnNpb25EYXRhKSgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgZGF0YSBpZiBubyBkYXRhIGlzIGZvdW5kXG4gICAgICAgICgwLCBzdG9yYWdlTWFuYWdlcl8xLnNldEV4dGVuc2lvbkRhdGEpKHN0b3JhZ2VNYW5hZ2VyXzEuREVGQVVMVF9EQVRBKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiB0byBmZXRjaCBmb3JtcyBmcm9tIHRoZSBhY3RpdmUgdGFiIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgZnVuY3Rpb24gYWRkRm9ybUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBRdWVyeSBmb3IgdGhlIGFjdGl2ZSB0YWJcbiAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgYWN0aXZlIHRhYlxuICAgICAgICAgICAgdmFyIGFjdGl2ZVRhYiA9IHRhYnNbMF07XG4gICAgICAgICAgICAvLyBTZW5kIG1lc3NhZ2UgdG8gY29udGVudCBzY3JpcHQgdG8gZ2V0IGZvcm1zXG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShhY3RpdmVUYWIuaWQsIHsgYWN0aW9uOiBcImdldEZvcm1zXCIgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZm9ybXMgYXJlIHJlY2VpdmVkXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGZvcm1zIHJlY2VpdmVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybXMgZnJvbSBhY3RpdmUgdGFiOlwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCBtZXNzYWdlIHRvIGNvbnRlbnQgc2NyaXB0IHRvIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGFjdGl2ZVRhYi5pZCwgeyBhY3Rpb246IFwiYWRkRm9ybUV2ZW50TGlzdGVuZXJcIiwgZm9ybUlkOiBmb3JtLmlkIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZvcm0gdmFsaWRhdGlvbiBieSBzZXR0aW5nIGEgZmxhZyBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm1WYWxpZGF0aW9uRW5hYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyB0aGF0IGZvcm0gdmFsaWRhdGlvbiBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSB2YWxpZGF0aW9uIGlzIGVuYWJsZWQgZm9yIHRoZSBhY3RpdmUgdGFiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyBpZiBubyBmb3JtcyBhcmUgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBmb3JtcyBmb3VuZCBpbiBhY3RpdmUgdGFiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGFkZCBmb3JtIGV2ZW50IGxpc3RlbmVyc1xuICAgIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=