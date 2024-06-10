/**
 * script.js
 * Author: Tejindra Khatri
 * Date: June 10, 2024
 * Description: This script uses the jQuery Validation plugin to validate user input on a dynamic form.
 * It provides immediate feedback with detailed error messages and prevents form submission if validation fails.
 */

$(document).ready(function() {
    $("#dataForm").validate({
        rules: {
            dataInput: "required"
        },
        messages: {
            dataInput: {
                required: "Please enter data to generate the table. This field cannot be empty."
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Place error messages right after the input element
        },
        submitHandler: function(form) {
            generateTable();
            return false; // Prevent default form submission
        }
    });

    function generateTable() {
        var input = $('#dataInput').val();
        $('#dataTable').html('<table><tr><td>' + input + '</td></tr></table>'); // Simple table generation for demonstration
    }
});
