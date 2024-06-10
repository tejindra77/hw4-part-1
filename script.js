/**
 * script.js
 * Author: Tejindra Khatri
 * Date: June 10, 2024
 * Description: This script manages form validation using the jQuery Validation plugin and dynamically generates a table based on user input. Console logs are used for debugging purposes.
 */

$(document).ready(function() {
    console.log("Document is ready.");

    $("#dataForm").validate({
        rules: {
            dataInput: "required"
        },
        messages: {
            dataInput: "Please enter data to generate the table. This field cannot be empty."
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Custom placement of error messages
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log("Form is valid and being processed.");
            generateTable();
        }
    });

    function generateTable() {
        var input = $('#dataInput').val();
        console.log("Generating table with input:", input);
        var html = '<table border="1"><tr><td>' + input + '</td></tr></table>';
        $('#dataTable').html(html);
        console.log("Table generated.");
    }
});
