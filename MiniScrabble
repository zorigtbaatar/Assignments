/* 
 *Name: Zorigtbaatar Chuluundorj
 *Email: zorigtbaatar_chuluundorj@student.uml.edu
 *Undergraduate at Umass Lowell, currently taking GUI 1
 *Date: December, 9 2015
 *Assignment 9: This file is contains functions for a mini scrabble game
 *and is used by MiniScrabble.html
 */


"use strict";



//This if the number of tiles in each given round
//This is a constant number
//The number of letters does not have to be equal to the number of tiles
var NUMBEROFTILES = 7;

/*The following information was provided by Ramon Meza*/
/*The var letters will be used when the game is in progress*/
var letters = [];
letters[1] = {"letter": "A", "pieces": 9, "points": 1};
letters[2] = {"letter": "B", "pieces": 2, "points": 3};
letters[3] = {"letter": "C", "pieces": 2, "points": 3};
letters[4] = {"letter": "D", "pieces": 4, "points": 2};
letters[5] = {"letter": "E", "pieces": 12, "points": 1};
letters[6] = {"letter": "F", "pieces": 2, "points": 4};
letters[7] = {"letter": "G", "pieces": 3, "points": 2};
letters[8] = {"letter": "H", "pieces": 2, "points": 4};
letters[9] = {"letter": "I", "pieces": 9, "points": 1};
letters[10] = {"letter": "J", "pieces": 1, "points": 8};
letters[11] = {"letter": "K", "pieces": 1, "points": 5};
letters[12] = {"letter": "L", "pieces": 4, "points": 1};
letters[13] = {"letter": "M", "pieces": 2, "points": 3};
letters[14] = {"letter": "N", "pieces": 6, "points": 1};
letters[15] = {"letter": "O", "pieces": 8, "points": 1};
letters[16] = {"letter": "P", "pieces": 2, "points": 3};
letters[17] = {"letter": "Q", "pieces": 1, "points": 10};
letters[18] = {"letter": "R", "pieces": 6, "points": 1};
letters[19] = {"letter": "S", "pieces": 4, "points": 1};
letters[20] = {"letter": "T", "pieces": 6, "points": 1};
letters[21] = {"letter": "U", "pieces": 4, "points": 1};
letters[22] = {"letter": "V", "pieces": 2, "points": 4};
letters[23] = {"letter": "W", "pieces": 2, "points": 4};
letters[24] = {"letter": "X", "pieces": 1, "points": 8};
letters[25] = {"letter": "Y", "pieces": 2, "points": 4};
letters[26] = {"letter": "Z", "pieces": 1, "points": 10};
/*var originalletters will be used to reset the value of letters*/
/*when the game is reset*/
var originalletters = letters;

$(document).ready(function () {
    InitiliazeGame();
});

/*initiliaze the game*/
var InitiliazeGame = function () {
    InitiliazeTiles(NUMBEROFTILES, "gametiles");
    InitiliazeLetters(NUMBEROFTILES, "rack");
};

/*This function takes care of the draggable and droppable elements of the game*/
$(function () {
    $(".letter").draggable({
        snapMode: "inner",
        revert: "invalid"

    });
    $(".freetile").droppable({
        //accept: $(this).hasClass("tile"),
        
        /*This function takes care of drop animation*/
        drop: function (event, ui) {
            /*removes the class freetile ui-droppable and adds occupiedtile*/
            $(this).removeClass("freetile");
            $(this).removeClass("ui-droppable");
            $(this).addClass("occupiedtile");
            
            /*Drops letters at the center of free tiles*/
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this),
                using: function (pos) {
                    $(this).animate(pos, 200, "linear");
                }
            });
            
        }
    });
});

/*Creates the free tiles where the letter can be placed in*/
var InitiliazeTiles = function (tiles, listid) {
    var listtoadd = document.getElementById(listid);
    var newtile;
    for (; tiles > 0; tiles--) {
        newtile = "<span class = 'tile freetile' >"
                + "</span>";
        $(listtoadd).append(newtile);
    }
};

/*Creates the letters for the current session*/
var InitiliazeLetters = function (tiles, listid) {
    var chosenletter;
    var newletter;
    var listtoadd = document.getElementById(listid);
    for (; tiles > 0; tiles--) {

        chosenletter = whichletter();

        newletter = "<span class = 'letter' >"
                + letters[chosenletter]["letter"]
                + "<sub>" + letters[chosenletter]["points"] + "</sub>"
                + "</span>";
        $(listtoadd).append(newletter);
    }
};

var whichletter = function () {
    return Math.floor((Math.random() * 26) + 1);
};
