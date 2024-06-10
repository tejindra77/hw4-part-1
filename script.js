/**
 * script.js
 * Author: Tejindra Khatri
 * Date: June 10, 2024
 * Description: This script manages form validation using the jQuery Validation plugin and dynamically generates a table based on user input. Console logs are used for debugging purposes.
 */

$(document).ready(function() {
    $("#dataForm").validate({
        rules: {
            dataInput: {
                required: true,
                minlength: 2  // Assuming at least 2 characters are needed
            }
        },
        messages: {
            dataInput: {
                required: "Please enter some data to generate the table.",
                minlength: "Your input must be at least 2 characters."
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Place error messages right after the input element
        },
        submitHandler: function(form, event) {
            event.preventDefault(); // Prevent default form submission
            generateTable($('#dataInput').val());
        }
    });

    function generateTable(data) {
        var html = '<table border="1"><tr><td>Data:</td><td>' + data + '</td></tr></table>';
        $('#dataTable').html(html);
    }
});
