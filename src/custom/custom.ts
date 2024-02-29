
// Delay execution to ensure all elements are loaded
setTimeout(() => {
    
    // Create a new instance of NFSFU234FormValidation Library
    const nfsfu234FormValidation = new NFSFU234FormValidation();

    // Select all form elements on the page
    const forms = document.querySelectorAll('form');

    // Iterate over each form
    forms.forEach((form) => {
        
        // Select the submit button for the form
        const submitBtn = form.querySelector('button[type=submit]') || 
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
        nfsfu234FormValidation.togglePasswordVisibility( 
            {
                show: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-fill' viewBox='0 0 16 16'><path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'/><path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'/></svg>",
                hide: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-slash-fill' viewBox='0 0 16 16'><path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z'/><path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z'/> </svg>",
            }
        );

        // Add a click event listener to the submit button
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Validate the form using the nfsfu234FormValidation instance
            validateForm(nfsfu234FormValidation, form);
        });

        // Add a submit event listener to the form
        form.addEventListener('submit', (event) => {
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
function validateForm(nfsfu234FormValidationInstance: any, form: HTMLElement) {
    // Find the submit button for the form
    const submitBtn = form.querySelector('button[type=submit]') || 
                      form.querySelector('button[type=search]') || 
                      form.querySelector('input[type=submit]') || 
                      form.querySelector('#jsSubmit') || 
                      form.querySelector('button') || 
                      false;

    // Show loading message and spinner on the submit button
    nfsfu234FormValidationInstance.loading(`<i class="fas fa-spinner fa-spin"></i> Loading...`, submitBtn);

    // Validate the form
    if (nfsfu234FormValidationInstance.validate(form)) {
        // If form validation succeeds, submit the form
        submitForm(nfsfu234FormValidationInstance, form);
        // Reset submit button text after form submission
        nfsfu234FormValidationInstance.loading(`Login`, submitBtn);
    } else {
        // If form validation fails, reset submit button text
        nfsfu234FormValidationInstance.loading(`Login`, submitBtn);
        // Exit the function
        return;
    }
}



/**
 * Submits the form using AJAX if specified, otherwise submits normally.
 * @param nfsfu234FormValidationInstance - Instance of the form validation library.
 * @param form - The HTML form element to be submitted.
 */
function submitForm(nfsfu234FormValidationInstance: any, form: HTMLElement) {
    // Select the submit button for the form
    const submitBtn = form.querySelector('button[type=submit]') || 
                      form.querySelector('button[type=search]') || 
                      form.querySelector('input[type=submit]') || 
                      form.querySelector('#jsSubmit') || 
                      form.querySelector('button') || 
                      false;

    // Check if the form is configured for AJAX submission
    if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') !== '' && form.getAttribute('action') !== '#') {
        // Extract form details
        const url = form.getAttribute('action');
        const formDetails = nfsfu234FormValidationInstance.getFormDetails(form);

        // Set AJAX request options
        const ajaxOptions = {
            url: url,
            RequestMethod: "POST",
            RequestHeader: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                'X-CSRF-TOKEN': "8fe6bdea3bdda71efad66070231c62c4c3cf19535342e260e33d7c84b03a03e4",
            },
            RequestBody: {
                formDetails
            }
        };

        let errorDetails: object;

        // Send AJAX request
        nfsfu234FormValidationInstance.ajax(ajaxOptions)
            .then((response: any) => {
                // Success: Server response received in JSON format
                console.log('Request successful', response);

                // Determine success or failure based on response status
                if (response.status >= 200 && response.status <= 299) {
                    errorDetails = {
                        type: 'modal',
                        message: response.message,
                        duration: 4000,
                        element: form,
                        success: true,
                    }

                    // Reset form after a specified duration
                    setTimeout(() => {
                        nfsfu234FormValidationInstance.reset(form);
                    }, errorDetails.duration);
                } else {
                    errorDetails = {
                        type: 'modal',
                        message: response.message ?? 'Request was successful. But an error occurred. Check your browser console for more information.',
                        duration: 4000,
                        element: form,
                        success: false,
                    }
                }

                // Display error message and reset submit button
                nfsfu234FormValidationInstance.displayError(errorDetails);
                nfsfu234FormValidationInstance.loading(`Login`, submitBtn);

            })
            .catch((error: Error) => {
                // Error: AJAX request failed or rejected
                console.error('Request failed', error);
                console.error(error.message);

                errorDetails = {
                    type: 'modal',
                    message: error.message,
                    duration: 4000,
                    element: form,
                    success: false,
                }

                // Display error message and reset submit button
                nfsfu234FormValidationInstance.displayError(errorDetails);
                nfsfu234FormValidationInstance.loading(`Login`, submitBtn);
            });

        return;
        
    } else if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') === '#') {
        // If action is set to '#', it's not a valid URL
        alert("`#` is not a valid URL.");
        return;
        
    } else if (form.getAttribute('isAjax') === "true" && form.getAttribute('action') === '') {
        // If action is empty, display an alert
        alert("Your action field is empty.");
        return;
        
    } else {
        // If not configured for AJAX, submit the form normally
        const form2: HTMLFormElement = form; 
        form2.submit();
    }
}
