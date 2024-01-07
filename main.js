let [seconds, minutes, hours] = [0,0,0];
const displayTime = document.getElementById('display-time');
let timer = null;
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", resetWatch);

function stopwatch() {
  seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;

    if(minutes == 60) {
      minutes = 0;
      hours++
    }
  }
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h +" : "+ m +" : "+ s;
}

function watchStart() {
  if(timer!== null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}
function resetWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0,0,0];
  displayTime.InnerHTML = "00 : 00 : 00"
}