"use strict";

window.alert("Welcome to Purr Care!");                                      //an alert

function updateDate() {                                        
    var currentDate = new Date();                                           //current date and time
    var dateTimeElement = document.getElementById('date_time');
    dateTimeElement.textContent = currentDate.toLocaleString();             //Convert a number to a text
};

function leftTime() {                                                       //countdown function
    var today = new Date();                                                //current date and time
    var due = new Date('August 7, 2024 07:25:00'); 
    
    var difference = due.getTime() - today.getTime();
    
    var daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));                                //Math method
    var hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));          //Math method
    var minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));                  //Math method
    var secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);                              //Math method

    var timeLeftstring = daysLeft + " d: " + hoursLeft + " h: " + minutesLeft + " m: " + secondsLeft + " s ";
    
    var leftTimeElement = document.getElementById('left_time');
    if (leftTimeElement) {
            leftTimeElement.textContent = timeLeftstring .toString();                               //Convert a number to a text
        }
    };

    window.onload = function showLeftTime() {
        updateDate();
        setInterval(updateDate, 1000);                                                           //a specified interval
        leftTime();
        setInterval(leftTime, 1000);                                                             //a specified interval
    };


    



