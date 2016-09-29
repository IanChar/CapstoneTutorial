
console.log("Script linked!");

var red_num = firebase.database().ref().child('red_num');
var green_num = firebase.database().ref().child('green_num');
var blue_num = firebase.database().ref().child('blue_num');
var last_clickedDB = firebase.database().ref().child('last_clicked');

var red_counter = document.getElementById("red_counter");
var green_counter = document.getElementById("green_counter");
var blue_counter = document.getElementById("blue_counter");
var last_clicked = document.getElementById("last_clicked");


// Listen to the DB and update when there is a change.
red_num.on("value", function(snap) {
    document.getElementById("red_counter").innerHTML = snap.val();
});
green_num.on("value", function(snap) {
    document.getElementById("green_counter").innerHTML = snap.val();
});
blue_num.on("value", function(snap) {
    document.getElementById("blue_counter").innerHTML = snap.val();
});
last_clickedDB.on("value", function(snap) {
    document.getElementById("last_clicked").innerHTML = snap.val();
});

// Set values when buttons are clicked.
function redClicked() {
    red_num.transaction(function(curr) {
        return curr + 1;
    });
    last_clickedDB.set("Red");
}
function greenClicked() {
    green_num.transaction(function(curr) {
        return curr + 1;
    });
    last_clickedDB.set("Green");
}
function blueClicked() {
    blue_num.transaction(function(curr) {
        return curr + 1;
    });
    last_clickedDB.set("Blue");
}
