/**
 * script.js
 * Author: Tejindra Khatri
 * Date: June 10, 2024
 * Description: This script manages form validation using the jQuery Validation plugin and dynamically generates a table based on user input. Console logs are used for debugging purposes.
 */

$(document).ready(function () {
    $("#multiplicationForm").validate({
        rules: {
            startHorizontal: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endHorizontal: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            startVertical: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endVertical: {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        messages: {
            startHorizontal: {
                required: "Please enter a starting horizontal number.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            endHorizontal: {
                required: "Please enter an ending horizontal number.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            startVertical: {
                required: "Please enter a starting vertical number.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            },
            endVertical: {
                required: "Please enter an ending vertical number.",
                number: "Please enter a valid number.",
                range: "Please enter a number between -50 and 50."
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
        submitHandler: function (form) {
            // Clear any existing error messages
            $("#errorMessages").empty();

            // Generate the multiplication table
            generateTable();
        }
    });

    function generateTable() {
        const startHorizontal = parseInt($("#startHorizontal").val());
        const endHorizontal = parseInt($("#endHorizontal").val());
        const startVertical = parseInt($("#startVertical").val());
        const endVertical = parseInt($("#endVertical").val());

        let tableHtml = '<table border="1">';
        tableHtml += '<tr><th></th>';

        for (let j = startHorizontal; j <= endHorizontal; j++) {
            tableHtml += `<th>${j}</th>`;
        }
        tableHtml += '</tr>';

        for (let i = startVertical; i <= endVertical; i++) {
            tableHtml += `<tr><th>${i}</th>`;
            for (let j = startHorizontal; j <= endHorizontal; j++) {
                tableHtml += `<td>${i * j}</td>`;
            }
            tableHtml += '</tr>';
        }

        tableHtml += '</table>';
        $("#tableContainer").html(tableHtml);
    }
});
