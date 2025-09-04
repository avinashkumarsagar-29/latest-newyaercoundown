// const daysE1 =document.getElementById("day")
// const hoursE1 =document.getElementById("hours")
// const minutesE1 =document.getElementById("minutes")
// const secondsE1 =document.getElementById("seconds")

// const newYearTime =new Date("jan 1,2026 00:00:00").getTime()

// updateCountdown();
// function updateCountdown(){
//     const now= new Date().getTime();
//     const gap = newYearTime - now;

//     const seconds = 1000;
//     const minutes = seconds * 60;
//     const hours = minutes * 60;
//     const days = hours * 24;

//     const d= Math.floor(gap / days);
//     const h= Math.floor((gap % days) / hours);
//     const m =Math.floor((gap% hours)/minutes);
//     const s =Math.floor((gap% minutes)/seconds);

//     daysE1.innerText = d;

// }

const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  daysE1.innerText = d;
  hoursE1.innerText = h;
  minutesE1.innerText = m;
  secondsE1.innerText = s;
}

setInterval(updateCountdown, 1000);

