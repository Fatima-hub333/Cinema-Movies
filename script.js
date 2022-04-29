// This code below was recovered from https://programacion.net/
function checkTime(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  
  function startTime() {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const ap = (hr < 12) ? '<span>AM</span>' : '<span>PM</span>';
    hr = (hr === 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('clock').innerHTML = `${hr}:${min}:${sec} ${ap}`;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const curWeekDay = days[today.getDay()];
    const curDay = today.getDate();
    const curMonth = months[today.getMonth()];
    const curYear = today.getFullYear();
    const date = `${curWeekDay}, ${curDay} ${curMonth} ${curYear}`;
    document.getElementById('date').innerHTML = date;
    setTimeout(() => { startTime(); }, 1000);
  }
  // This code above was recovered from https://programacion.net/
  window.onload = startTime();