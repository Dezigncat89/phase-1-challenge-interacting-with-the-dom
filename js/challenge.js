<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Interactive Timer</title>
    </head>
<body>
  <script>
    function myFunction() {
        alert('Hello World!');
    }
    function showTime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
setInterval(showTime, 1000);

let intervalID;
 
function showTime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
 
function stopClock() {
    clearInterval(intervalID);
}
 
var intervalID = setInterval(showTime, 1000);

    </script>
    <button onclick="setTimeout(myFunction, 2000)">Click Me</button>
    <p>The current time on your computer is: <span id="clock"></span></p>
    <p>The current time on your computer is: <span id="clock"></span></p>
    <button onclick="stopClock();">Stop Clock</button>
</body>
</html>
