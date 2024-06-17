let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
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

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let ms = Math.floor(milliseconds / 10);
  ms < 10 ? "0" + milliseconds : milliseconds;
  //line 24/25 fixed the problem of the extra zero
  //what i originally had: let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function lap() {
  let laps = null;
  let lapNow = `<div id="lap">${hours} : ${minutes} : ${seconds} : ${milliseconds}</div>`;
  laps = document.getElementById("lapRecord").innerHTML + lapNow;
  document.getElementById("lapRecord").innerHTML = laps;
}

function watchStart() {
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
}

//document.getElementById("lapRecord").style.display = "none";

//get rid of extra 0 on milliseconds - within lap

// add zero infront of single digit seconds
