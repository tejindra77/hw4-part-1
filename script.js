/**
 * script.js
 * Author: Tejindra Khatri
 * Date: June 10, 2024
 * Description: This script manages form validation using the jQuery Validation plugin and dynamically generates a table based on user input. Console logs are used for debugging purposes.
 */

$(document).ready(function() {
    console.log("Document is ready, and script is loading...");

    $("#dataForm").validate({
        rules: {
            dataInput: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            dataInput: {
                required: "Please enter some data to generate the table.",
                minlength: "Your input must be at least 2 characters."
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
            console.log("Error message placed after input field.");
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log("Form is valid and being processed.");
            const inputData = $('#dataInput').val();
            console.log("Received valid input: " + inputData);
            generateTable(inputData);
        }
    });
});

function generateTable(data) {
    console.log("Generating table with input data...");
    var html = '<table border="1"><tr><td>Entered Data</td><td>' + data + '</td></tr></table>';
    $('#dataTable').html(html);
    console.log("Table generated successfully and added to the page.");
}
