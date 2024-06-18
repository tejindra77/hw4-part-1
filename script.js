/**
 * Multiplication Table Generator
 * Author: Tejindra Khatri
 * Date: 06/17/2024
 */

$(document).ready(function () {
    // Validation rules and messages using jQuery Validation Plugin
    $("#multiplicationForm").validate({
        // Rules for validation
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
        // Custom error messages
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
        // Error message placement
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
        // Submit handler
        submitHandler: function (form) {
            $("#errorMessages").empty();
            generateTable();
        }
    });

    // Function to generate multiplication table
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