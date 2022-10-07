(function() {
  'use strict';

  // YOUR CODE HERE

let stopButton = document.querySelector("#stopButton");    //Buttons
let slowButton = document.querySelector("#slowButton");
let goButton = document.querySelector("#goButton");

let stopLight = document.querySelector("#stopLight");      //Lights
let slowLight = document.querySelector("#slowLight");
let goLight = document.querySelector("#goLight");

let stopOn = false;                                        //On or Off
let slowOn = false;
let goOn = false;

let controls = document.querySelector("#controls");           //Button listener
controls.addEventListener("click", function (e) {
    if(e.target.id === stopButton.id){
      if(!stopOn){
        stopLight.className += " stop";
        stopOn = true;
        console.log("Stop light is on");
      }else{
        stopLight.className = "bulb";
        stopOn = false;
        console.log("Stop light is off");
      }
    }else if(e.target.id === slowButton.id){
      if(!slowOn){
        slowLight.className += " slow";
        slowOn = true;
        console.log("Slow light is on");
      }else{
        slowLight.className = "bulb";
        slowOn = false;
        console.log("Slow light is off");
      }
    }else if(e.target.id === goButton.id){
      if(!goOn){
        goLight.className += " go";
        goOn = true;
        console.log("Go light is on");
      }else{
        goLight.className = "bulb";
        goOn = false;
        console.log("Go light is off");
      }
    }
});

stopButton.addEventListener("mouseenter", function (e) {      //mouse enter listeners
    console.log("The mouse entered the stop button!");
});

slowButton.addEventListener("mouseenter", function (e) {
  console.log("The mouse entered the slow button!");
});

goButton.addEventListener("mouseenter", function (e) {
  console.log("The mouse entered the go button!");
});

stopButton.addEventListener("mouseleave", function (e) {    //mouse leave listeners
  console.log("The mouse left the stop button!");
});

slowButton.addEventListener("mouseleave", function (e) {
  console.log("The mouse left the slow button!");
});

goButton.addEventListener("mouseleave", function (e) {
  console.log("The mouse left the go button!");
});

})();
