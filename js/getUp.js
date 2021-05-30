let btn = document.getElementById("startBtn");
let state = false;
let interval = null;
let timerInterval = null;
let now = new Date().getTime();
let then = moment(now).add(20, "m").toDate();

document.addEventListener("DOMContentLoaded", function () {
  if (!Notification) {
    alert("Desktop notifications not available in your browser. Try Chromium.");
    return;
  }

  if (Notification.permission !== "granted") Notification.requestPermission();
});

btn.addEventListener("click", () => {
  state = !state;
  if (state) {
    btn.textContent = "Stop";
    timerInterval = setInterval(calcTime, 1000);
    interval = setInterval(notify, 5000);
  } else {
    btn.textContent = "Start";
    if (interval != null && timerInterval != null) {
      clearInterval(interval);
      clearInterval(timerInterval);
      document.getElementById("demo").innerHTML = "";
    }
  }
});

notify = function () {
  console.log("notified");
  new Audio("../static/Notif.mp3").play();
  then = moment(now).add(20, "m").toDate();
};

calcTime = () => {
  now = new Date().getTime();
  var distance = then - now;
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
};
