/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/custom/custom.ts ***!
  \******************************/
// Delay execution to ensure all elements are loaded
setTimeout(function () {
    // Create a new instance of NFSFU234FormValidation Library
    var nfsfu234FormValidation = new NFSFU234FormValidation();
    // Select all form elements on the page
    var forms = document.querySelectorAll('form');
    // Iterate over each form
    forms.forEach(function (form) {
        // Select the submit button for the form
        var submitBtn = form.querySelector('button[type=submit]') ||
            form.querySelector('button[type=search]') ||
            form.querySelector('input[type=submit]') ||
            form.querySelector('#jsSubmit') ||
            form.querySelector('button') ||
            false;
        // If no submit button is found, exit the loop
        if (!submitBtn) {
            console.log("No Submit Button Found...");
            return false;
        }
        // This will be used to toggle the visibility of an input field with type of password
        nfsfu234FormValidation.togglePasswordVisibility({
            show: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-fill' viewBox='0 0 16 16'><path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'/><path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'/></svg>",
            hide: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-slash-fill' viewBox='0 0 16 16'><path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z'/><path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z'/> </svg>",
        });
        // Add a click event listener to the submit button
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form submission
            // Validate the form using the nfsfu234FormValidation instance
            validateForm(nfsfu234FormValidation, form);
        });
        // Add a submit event listener to the form
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
            // Validate the form using the nfsfu234FormValidation instance
            validateForm(nfsfu234FormValidation, form);
        });
    });
}, 100);
/**
 * Validates the form using the specified form validation library instance.
 * @param nfsfu234FormValidationInstance - Instance of the form validation library.
 * @param form - The HTML form element to be validated.
 */
function validateForm(nfsfu234FormValidationInstance, form) {
    // Find the submit button for the form
    var submitBtn = form.querySelector('button[type=submit]') ||
        form.querySelector('button[type=search]') ||
        form.querySelector('input[type=submit]') ||
        form.querySelector('#jsSubmit') ||
        form.querySelector('button') ||
        false;
    // Show loading message and spinner on the submit button
    nfsfu234FormValidationInstance.loading("<i class=\"fas fa-spinner fa-spin\"></i> Loading...", submitBtn);
    // Validate the form
    if (nfsfu234FormValidationInstance.validate(form)) {
        // If form validation succeeds, submit the form
        submitForm(nfsfu234FormValidationInstance, form);
        // Reset submit button text after form submission
        nfsfu234FormValidationInstance.loading("Login", submitBtn);
    }
    else {
        // If form validation fails, reset submit button text
        nfsfu234FormValidationInstance.loading("Login", submitBtn);
        // Exit the function
        return;
    }
}
/**
 * Submits the form using AJAX if specified, otherwise submits normally.
 * @param nfsfu234FormValidationInstance - Instance of the form validation library.
 * @param form - The HTML form element to be submitted.
 */
function submitForm(nfsfu234FormValidationInstance, form) {
    // Select the submit button for the form
    var submitBtn = form.querySelector('button[type=submit]') ||
        form.querySelector('button[type=search]') ||
        form.querySelector('input[type=submit]') ||
        form.querySelector('#jsSubmit') ||
        form.querySelector('button') ||
        false;
    // Check if the form is configured for AJAX submission
    if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') !== '' && form.getAttribute('action') !== '#') {
        // Extract form details
        var url = form.getAttribute('action');
        var formDetails = nfsfu234FormValidationInstance.getFormDetails(form);
        // Set AJAX request options
        var ajaxOptions = {
            url: url,
            RequestMethod: "POST",
            RequestHeader: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                'X-CSRF-TOKEN': "8fe6bdea3bdda71efad66070231c62c4c3cf19535342e260e33d7c84b03a03e4",
            },
            RequestBody: {
                formDetails: formDetails
            }
        };
        var errorDetails_1;
        // Send AJAX request
        nfsfu234FormValidationInstance.ajax(ajaxOptions)
            .then(function (response) {
            var _a;
            // Success: Server response received in JSON format
            console.log('Request successful', response);
            // Determine success or failure based on response status
            if (response.status >= 200 && response.status <= 299) {
                errorDetails_1 = {
                    type: 'modal',
                    message: response.message,
                    duration: 4000,
                    element: form,
                    success: true,
                };
                // Reset form after a specified duration
                setTimeout(function () {
                    nfsfu234FormValidationInstance.reset(form);
                }, errorDetails_1.duration);
            }
            else {
                errorDetails_1 = {
                    type: 'modal',
                    message: (_a = response.message) !== null && _a !== void 0 ? _a : 'Request was successful. But an error occurred. Check your browser console for more information.',
                    duration: 4000,
                    element: form,
                    success: false,
                };
            }
            // Display error message and reset submit button
            nfsfu234FormValidationInstance.displayError(errorDetails_1);
            nfsfu234FormValidationInstance.loading("Login", submitBtn);
        })
            .catch(function (error) {
            // Error: AJAX request failed or rejected
            console.error('Request failed', error);
            console.error(error.message);
            errorDetails_1 = {
                type: 'modal',
                message: error.message,
                duration: 4000,
                element: form,
                success: false,
            };
            // Display error message and reset submit button
            nfsfu234FormValidationInstance.displayError(errorDetails_1);
            nfsfu234FormValidationInstance.loading("Login", submitBtn);
        });
        return;
    }
    else if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') === '#') {
        // If action is set to '#', it's not a valid URL
        alert("`#` is not a valid URL.");
        return;
    }
    else if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') === '') {
        // If action is empty, display an alert
        alert("Your action field is empty.");
        return;
    }
    else {
        // If not configured for AJAX, submit the form normally
        var form2 = form;
        form2.submit();
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY3VzdG9tX3NjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25mc2Z1MjM0Zm9ybXZhbGlkYXRpb24td2ViLWV4dGVuc2lvbi8uL3NyYy9jdXN0b20vY3VzdG9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERlbGF5IGV4ZWN1dGlvbiB0byBlbnN1cmUgYWxsIGVsZW1lbnRzIGFyZSBsb2FkZWRcbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBORlNGVTIzNEZvcm1WYWxpZGF0aW9uIExpYnJhcnlcbiAgICB2YXIgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbiA9IG5ldyBORlNGVTIzNEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgLy8gU2VsZWN0IGFsbCBmb3JtIGVsZW1lbnRzIG9uIHRoZSBwYWdlXG4gICAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIGZvcm1cbiAgICBmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIGZvcm1cbiAgICAgICAgdmFyIHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpIHx8XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXNlYXJjaF0nKSB8fFxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXN1Ym1pdF0nKSB8fFxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjanNTdWJtaXQnKSB8fFxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSB8fFxuICAgICAgICAgICAgZmFsc2U7XG4gICAgICAgIC8vIElmIG5vIHN1Ym1pdCBidXR0b24gaXMgZm91bmQsIGV4aXQgdGhlIGxvb3BcbiAgICAgICAgaWYgKCFzdWJtaXRCdG4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gU3VibWl0IEJ1dHRvbiBGb3VuZC4uLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgdXNlZCB0byB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgYW4gaW5wdXQgZmllbGQgd2l0aCB0eXBlIG9mIHBhc3N3b3JkXG4gICAgICAgIG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb24udG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KHtcbiAgICAgICAgICAgIHNob3c6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nY3VycmVudENvbG9yJyBjbGFzcz0nYmkgYmktZXllLWZpbGwnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZD0nTTEwLjUgOGEyLjUgMi41IDAgMSAxLTUgMCAyLjUgMi41IDAgMCAxIDUgMHonLz48cGF0aCBkPSdNMCA4czMtNS41IDgtNS41UzE2IDggMTYgOHMtMyA1LjUtOCA1LjVTMCA4IDAgOHptOCAzLjVhMy41IDMuNSAwIDEgMCAwLTcgMy41IDMuNSAwIDAgMCAwIDd6Jy8+PC9zdmc+XCIsXG4gICAgICAgICAgICBoaWRlOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9J2N1cnJlbnRDb2xvcicgY2xhc3M9J2JpIGJpLWV5ZS1zbGFzaC1maWxsJyB2aWV3Qm94PScwIDAgMTYgMTYnPjxwYXRoIGQ9J20xMC43OSAxMi45MTItMS42MTQtMS42MTVhMy41IDMuNSAwIDAgMS00LjQ3NC00LjQ3NGwtMi4wNi0yLjA2Qy45MzggNi4yNzggMCA4IDAgOHMzIDUuNSA4IDUuNWE3LjAyOSA3LjAyOSAwIDAgMCAyLjc5LS41ODh6TTUuMjEgMy4wODhBNy4wMjggNy4wMjggMCAwIDEgOCAyLjVjNSAwIDggNS41IDggNS41cy0uOTM5IDEuNzIxLTIuNjQxIDMuMjM4bC0yLjA2Mi0yLjA2MmEzLjUgMy41IDAgMCAwLTQuNDc0LTQuNDc0TDUuMjEgMy4wODl6Jy8+PHBhdGggZD0nTTUuNTI1IDcuNjQ2YTIuNSAyLjUgMCAwIDAgMi44MjkgMi44MjlsLTIuODMtMi44Mjl6bTQuOTUuNzA4LTIuODI5LTIuODNhMi41IDIuNSAwIDAgMSAyLjgyOSAyLjgyOXptMy4xNzEgNi0xMi0xMiAuNzA4LS43MDggMTIgMTItLjcwOC43MDh6Jy8+IDwvc3ZnPlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgZm9ybSB1c2luZyB0aGUgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbiBpbnN0YW5jZVxuICAgICAgICAgICAgdmFsaWRhdGVGb3JtKG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb24sIGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIGEgc3VibWl0IGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBmb3JtXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgZm9ybSB1c2luZyB0aGUgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbiBpbnN0YW5jZVxuICAgICAgICAgICAgdmFsaWRhdGVGb3JtKG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb24sIGZvcm0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0sIDEwMCk7XG4vKipcbiAqIFZhbGlkYXRlcyB0aGUgZm9ybSB1c2luZyB0aGUgc3BlY2lmaWVkIGZvcm0gdmFsaWRhdGlvbiBsaWJyYXJ5IGluc3RhbmNlLlxuICogQHBhcmFtIG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb25JbnN0YW5jZSAtIEluc3RhbmNlIG9mIHRoZSBmb3JtIHZhbGlkYXRpb24gbGlicmFyeS5cbiAqIEBwYXJhbSBmb3JtIC0gVGhlIEhUTUwgZm9ybSBlbGVtZW50IHRvIGJlIHZhbGlkYXRlZC5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb25JbnN0YW5jZSwgZm9ybSkge1xuICAgIC8vIEZpbmQgdGhlIHN1Ym1pdCBidXR0b24gZm9yIHRoZSBmb3JtXG4gICAgdmFyIHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpIHx8XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c2VhcmNoXScpIHx8XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zdWJtaXRdJykgfHxcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjanNTdWJtaXQnKSB8fFxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpIHx8XG4gICAgICAgIGZhbHNlO1xuICAgIC8vIFNob3cgbG9hZGluZyBtZXNzYWdlIGFuZCBzcGlubmVyIG9uIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLmxvYWRpbmcoXCI8aSBjbGFzcz1cXFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblxcXCI+PC9pPiBMb2FkaW5nLi4uXCIsIHN1Ym1pdEJ0bik7XG4gICAgLy8gVmFsaWRhdGUgdGhlIGZvcm1cbiAgICBpZiAobmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLnZhbGlkYXRlKGZvcm0pKSB7XG4gICAgICAgIC8vIElmIGZvcm0gdmFsaWRhdGlvbiBzdWNjZWVkcywgc3VibWl0IHRoZSBmb3JtXG4gICAgICAgIHN1Ym1pdEZvcm0obmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLCBmb3JtKTtcbiAgICAgICAgLy8gUmVzZXQgc3VibWl0IGJ1dHRvbiB0ZXh0IGFmdGVyIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBuZnNmdTIzNEZvcm1WYWxpZGF0aW9uSW5zdGFuY2UubG9hZGluZyhcIkxvZ2luXCIsIHN1Ym1pdEJ0bik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBmb3JtIHZhbGlkYXRpb24gZmFpbHMsIHJlc2V0IHN1Ym1pdCBidXR0b24gdGV4dFxuICAgICAgICBuZnNmdTIzNEZvcm1WYWxpZGF0aW9uSW5zdGFuY2UubG9hZGluZyhcIkxvZ2luXCIsIHN1Ym1pdEJ0bik7XG4gICAgICAgIC8vIEV4aXQgdGhlIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG4vKipcbiAqIFN1Ym1pdHMgdGhlIGZvcm0gdXNpbmcgQUpBWCBpZiBzcGVjaWZpZWQsIG90aGVyd2lzZSBzdWJtaXRzIG5vcm1hbGx5LlxuICogQHBhcmFtIG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb25JbnN0YW5jZSAtIEluc3RhbmNlIG9mIHRoZSBmb3JtIHZhbGlkYXRpb24gbGlicmFyeS5cbiAqIEBwYXJhbSBmb3JtIC0gVGhlIEhUTUwgZm9ybSBlbGVtZW50IHRvIGJlIHN1Ym1pdHRlZC5cbiAqL1xuZnVuY3Rpb24gc3VibWl0Rm9ybShuZnNmdTIzNEZvcm1WYWxpZGF0aW9uSW5zdGFuY2UsIGZvcm0pIHtcbiAgICAvLyBTZWxlY3QgdGhlIHN1Ym1pdCBidXR0b24gZm9yIHRoZSBmb3JtXG4gICAgdmFyIHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpIHx8XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c2VhcmNoXScpIHx8XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zdWJtaXRdJykgfHxcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjanNTdWJtaXQnKSB8fFxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpIHx8XG4gICAgICAgIGZhbHNlO1xuICAgIC8vIENoZWNrIGlmIHRoZSBmb3JtIGlzIGNvbmZpZ3VyZWQgZm9yIEFKQVggc3VibWlzc2lvblxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnaXNBamF4JykgPT09IFwidHJ1ZVwiICYmIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSAhPT0gJycgJiYgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICE9PSAnIycpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBmb3JtIGRldGFpbHNcbiAgICAgICAgdmFyIHVybCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgICAgICAgdmFyIGZvcm1EZXRhaWxzID0gbmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLmdldEZvcm1EZXRhaWxzKGZvcm0pO1xuICAgICAgICAvLyBTZXQgQUpBWCByZXF1ZXN0IG9wdGlvbnNcbiAgICAgICAgdmFyIGFqYXhPcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBSZXF1ZXN0TWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIFJlcXVlc3RIZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBcIjhmZTZiZGVhM2JkZGE3MWVmYWQ2NjA3MDIzMWM2MmM0YzNjZjE5NTM1MzQyZTI2MGUzM2Q3Yzg0YjAzYTAzZTRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZXF1ZXN0Qm9keToge1xuICAgICAgICAgICAgICAgIGZvcm1EZXRhaWxzOiBmb3JtRGV0YWlsc1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZXJyb3JEZXRhaWxzXzE7XG4gICAgICAgIC8vIFNlbmQgQUpBWCByZXF1ZXN0XG4gICAgICAgIG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb25JbnN0YW5jZS5hamF4KGFqYXhPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAvLyBTdWNjZXNzOiBTZXJ2ZXIgcmVzcG9uc2UgcmVjZWl2ZWQgaW4gSlNPTiBmb3JtYXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnLCByZXNwb25zZSk7XG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgc3VjY2VzcyBvciBmYWlsdXJlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1c1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDw9IDI5OSkge1xuICAgICAgICAgICAgICAgIGVycm9yRGV0YWlsc18xID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9kYWwnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGZvcm0gYWZ0ZXIgYSBzcGVjaWZpZWQgZHVyYXRpb25cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLnJlc2V0KGZvcm0pO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yRGV0YWlsc18xLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yRGV0YWlsc18xID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9kYWwnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAoX2EgPSByZXNwb25zZS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnUmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bC4gQnV0IGFuIGVycm9yIG9jY3VycmVkLiBDaGVjayB5b3VyIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3IgbWVzc2FnZSBhbmQgcmVzZXQgc3VibWl0IGJ1dHRvblxuICAgICAgICAgICAgbmZzZnUyMzRGb3JtVmFsaWRhdGlvbkluc3RhbmNlLmRpc3BsYXlFcnJvcihlcnJvckRldGFpbHNfMSk7XG4gICAgICAgICAgICBuZnNmdTIzNEZvcm1WYWxpZGF0aW9uSW5zdGFuY2UubG9hZGluZyhcIkxvZ2luXCIsIHN1Ym1pdEJ0bik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBFcnJvcjogQUpBWCByZXF1ZXN0IGZhaWxlZCBvciByZWplY3RlZFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgZXJyb3JEZXRhaWxzXzEgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21vZGFsJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAwLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGZvcm0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlIGFuZCByZXNldCBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICBuZnNmdTIzNEZvcm1WYWxpZGF0aW9uSW5zdGFuY2UuZGlzcGxheUVycm9yKGVycm9yRGV0YWlsc18xKTtcbiAgICAgICAgICAgIG5mc2Z1MjM0Rm9ybVZhbGlkYXRpb25JbnN0YW5jZS5sb2FkaW5nKFwiTG9naW5cIiwgc3VibWl0QnRuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2lzQWpheCcpID09PSBcInRydWVcIiAmJiBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgPT09ICcjJykge1xuICAgICAgICAvLyBJZiBhY3Rpb24gaXMgc2V0IHRvICcjJywgaXQncyBub3QgYSB2YWxpZCBVUkxcbiAgICAgICAgYWxlcnQoXCJgI2AgaXMgbm90IGEgdmFsaWQgVVJMLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnaXNBamF4JykgPT09IFwidHJ1ZVwiICYmIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSA9PT0gJycpIHtcbiAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGVtcHR5LCBkaXNwbGF5IGFuIGFsZXJ0XG4gICAgICAgIGFsZXJ0KFwiWW91ciBhY3Rpb24gZmllbGQgaXMgZW1wdHkuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBub3QgY29uZmlndXJlZCBmb3IgQUpBWCwgc3VibWl0IHRoZSBmb3JtIG5vcm1hbGx5XG4gICAgICAgIHZhciBmb3JtMiA9IGZvcm07XG4gICAgICAgIGZvcm0yLnN1Ym1pdCgpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==