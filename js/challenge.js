<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Interactive Timer</title>
    </head>
<body>
 // Creates a Manipulative Timer
  "use strict";

  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;

  let count;

  document.form_main.start.onclick = () => plus();
  document.form_main.start.onclick = () => minus();
  document.form_main.pause.onclick = () => pause();
  document.form_main.reset.onclick = () => reset();

function plus() {
  pause();
  count = setInterval(() => { timer(); }, 10);
}

function minus() {
  pause();
  count = setInterval(() => { timer(); }, -10);
}

function pause() {
  clearInterval(count);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnTime(hour);
  document.getElementById('minute').innerText = returnTime(minute);
  document.getElementById('second').innerText = returnTime(second);
  document.getElementById('millisecond').innerText = returnTime(millisecond);
}

function returnTime(input) {
  return input > 10 ? input : `0${input}`
}

//Creates a Comment Form
  <div id="container">
        <form action="comment-form.html" method="post" id="comment-form">
            <h1>Leave a Comment.</h1>
            <small></small>
            <input type="text" placeholder="Comments">
            <small></small>
            <input type="submit" value="Submit">
        </form>
    </div>
  //Creates a Like Counter Button
  $(".heart button").on("click", function() {
  let $count3 = $(this).parent().find('.count3');
  $count3.html($count3.html() * 1 + 1);
});

</body>
</html>
