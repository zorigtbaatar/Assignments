/* 
 *Name: Zorigtbaatar Chuluundorj
 *Email: zorigtbaatar_chuluundorj@student.uml.edu
 *Undergraduate at Umass Lowell, currently taking GUI 1
 *Date: October, 20 2015
 *Assignment 6: This Javascript file is used to dynamically create a table
 *and update it. The table will be filled with values obtained from multyplying
 *inputs of an html form. This javascript function is used by Assignment6.html
 */


"use strict";

/*This function validates the input entered into form with id inputNumbers
 *and calls functions to update the table with id multiplicationTable
 *with values obtained from multypling the input numbers.
 *
 *returns: This function always returns false
 **/
var validate = function () {
    var tableId = "multiplicationTable", /* id of the table to be updated */
            formId = "inputNumbers", /* id of the form containing input values*/
            form = document.getElementById(formId),
            counter,
            lengthOfArray,
            tableNumbers = [];

    /*This function copies the inputs of the form into an array of numbers called tableNumbers*/
    for (counter = 0, lengthOfArray = form.length; counter < lengthOfArray; counter++) {
        tableNumbers[counter] = Number(form.elements[counter].value);
    }

    /*Testing if the user entered 4 inputs*/
    if (tableNumbers[0] === "" || tableNumbers[1] === ""
            || tableNumbers[2] === "" || tableNumbers[3] === "") {
        alert("The number of inputs is not 4!");
        return false;
    }

    /*Checking whether the first column input is more than the last column input*/
    if (tableNumbers[0] > tableNumbers[1]) {
        alert("The last column input is less than the first column input!");
        return false;
    }

    /*Checking whether the first row input is more than the last row input*/
    if (tableNumbers[2] > tableNumbers[3]) {
        alert("The last row input is less than the first row input!");
        return false;
    }

    /*The inputs of the form passed all the validation tests and will be printed in a multiplication table*/
    /*Clear the Table of previous value*/
    clearTable(tableId);
    /*Print multiplication table*/
    createTable(tableNumbers, tableId);
    return false;
};

/*This function erases all the elements of a table*
 * 
 * tableId: is the id of the table that needs to be erased
 * returns: this function does not return any values.
 */
var clearTable = function (tableId) {
    var table = document.getElementById(tableId);
    for (; table.rows.length > 0; ) {
        table.deleteRow(0);
    }
};

/*This function creates a multiplacation table using the inputs entered in the form
 *
 *tableNumbers: The inputs of the form are four numbers and they are in tableNumbers which is an
 *array of numbers
 *tableId: Provides the Id of the table where the multiplied values will go
 *returns: This function does not return anything
 */
var createTable = function (tableNumbers, tableId) {
    var firstColumn = tableNumbers[0],
            lastColumn = tableNumbers[1],
            firstRow = tableNumbers[2],
            lastRow = tableNumbers[3],
            rowCounter,
            columnCounter,
            currentRow,
            newTableElement,
            table = document.getElementById(tableId);

    /*Initiliazing top left corner element*/
    currentRow = table.insertRow(0);
    newTableElement = currentRow.insertCell(0);
    newTableElement.innerHTML = 0;


    /*Initiliazing the first row elements*/
    for (columnCounter = 1, firstColumn = tableNumbers[0]; firstColumn <= lastColumn; firstColumn++, columnCounter++) {
        newTableElement = currentRow.insertCell(columnCounter);
        newTableElement.innerHTML = firstColumn;
    }
    /*Initiliazing the first column elements*/
    for (rowCounter = 1, firstRow = tableNumbers[2]; firstRow <= lastRow; firstRow++, rowCounter++) {
        currentRow = table.insertRow(rowCounter);
        newTableElement = currentRow.insertCell(0);
        newTableElement.innerHTML = firstRow;
        /*Filling out the body of the table*/
        for (columnCounter = 1, firstColumn = tableNumbers[0]; firstColumn <= lastColumn; firstColumn++, columnCounter++) {
            newTableElement = currentRow.insertCell(columnCounter);
            newTableElement.innerHTML = (firstRow * firstColumn);
        }
    }
};