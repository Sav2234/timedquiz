// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = "00:" + seconds;

//         if (--timer < 0) {
//             timer = 0;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var time = 60 / 4, // your time in seconds here
//     display = document.querySelector('#timer_secs');
//     startTimer(time, display);
// };