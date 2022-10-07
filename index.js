(function() {
  'use strict';

  // YOUR CODE HERE

let stopButton = document.querySelector("#stopButton");
let slowButton = document.querySelector("#slowButton");
let goButton = document.querySelector("#goButton");

let stopLight = document.querySelector("#stopLight");
let slowLight = document.querySelector("#slowLight");
let goLight = document.querySelector("#goLight");

let stopOn = false;
let slowOn = false;
let goOn = false;

let controls = document.querySelector("#controls");
controls.addEventListener("click", function (e) {
    if(e.target.id === stopButton.id){
      console.log("Stop");
      if(!stopOn){
        stopLight.className += " stop";
        stopOn = true;
      }else{
        stopLight.className = "bulb";
        stopOn = false;
      }
    }else if(e.target.id === slowButton.id){
      console.log("Slow");
      if(!slowOn){
        slowLight.className += " slow";
        slowOn = true;
      }else{
        slowLight.className = "bulb";
        slowOn = false;
      }
    }else if(e.target.id === goButton.id){
      console.log("Go");
      if(!goOn){
        goLight.className += " go";
        goOn = true;
      }else{
        goLight.className = "bulb";
        goOn = false;
      }
    }
});

stopButton.addEventListener("mouseenter", function (e) {
    console.log("The mouse entered the stop button!");
});

slowButton.addEventListener("mouseenter", function (e) {
  console.log("The mouse entered the slow button!");
});

goButton.addEventListener("mouseenter", function (e) {
  console.log("The mouse entered the go button!");
});

stopButton.addEventListener("mouseleave", function (e) {
  console.log("The mouse left the stop button!");
});

slowButton.addEventListener("mouseleave", function (e) {
  console.log("The mouse left the slow button!");
});

goButton.addEventListener("mouseleave", function (e) {
  console.log("The mouse left the go button!");
});






























})();
