const lapRecordDiv = document.getElementById("laps");
// ^ the above is the construct I was mentioning. Now you only ever need to use lapRecordDiv below

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let [h, m, s, ms] = [0, 0, 0, 0];
const displayTime = document.getElementById("displayTime");
// ^ good - but you're never reassigning it so it can be const
let timer = null;

function stopwatch() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  h = hours < 10 ? "0" + hours : hours;
  m = minutes < 10 ? "0" + minutes : minutes;
  s = seconds < 10 ? "0" + seconds : seconds;
  ms = Math.floor(milliseconds / 10);

  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function lap() {
  let lapNow = `<div>${h} : ${m} : ${s} : ${ms}</div>`;
  lapRecordDiv.innerHTML += lapNow;
}

function watchStart() {
  console.log("clicked");
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = "00:00:00:00";
  lapRecordDiv.innerHTML = "";
}
