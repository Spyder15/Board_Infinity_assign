window.onload = function() {
    var clockDiv = document.getElementById("clockDiv");
    var dateDiv = document.getElementById("dateDiv");
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");

    var intervalId; 

  
    function updateClock() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        var dateString = date.toDateString();

        clockDiv.innerHTML = timeString;
        dateDiv.innerHTML = dateString;
    }

  
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

  
    startButton.onclick = function() {
        intervalId = setInterval(updateClock, 1000);
    };


    stopButton.onclick = function() {
        clearInterval(intervalId);
    };
};
