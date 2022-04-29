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

// Get all id's
const moviesbtn = document.getElementById('moviesbtn');
const addMoviebtn = document.getElementById('addMoviebtn');
const contactBtn = document.getElementById('contactBtn');
const containerMovies = document.getElementById('container');
const movies = document.getElementById('movies');
const addNew = document.getElementById('addmovie');
const contact = document.getElementById('contact');
const name = document.getElementById('name');
const director = document.getElementById('director');
const addBtn = document.getElementById('btn');
let datamovies = JSON.parse(localStorage.getItem('movie')) || [];

class Movio {
  constructor(name, director) {
    this.datamovies = [name, director];
    this.name = name;
    this.director = director;
  }

  deleteMovie = (index) => {
    datamovies.splice(index, 1);
    localStorage.setItem('movie', JSON.stringify(datamovies));
  }

  addMovie = (movio) => {
    datamovies.push(movio);
    localStorage.setItem('movie', JSON.stringify(datamovies));
  }
}

const printList = () => {
  const movio = new Movio();
  movies.innerHTML = null;
  if (localStorage.getItem('movie')) {
    datamovies = JSON.parse(localStorage.getItem('movie')) || [];
  }
  for (let i = 0; i < datamovies.length; i += 1) {
    const movieStorage = document.createElement('div');
    const movieInfo = document.createElement('p');
    const deletebtn = document.createElement('button');
    movieInfo.textContent = `"${datamovies[i].name}" by ${datamovies[i].director}`;
    deletebtn.textContent = 'Remove Entry';
    movies.appendChild(movieStorage);
    movieStorage.append(movieInfo, deletebtn);
    movieStorage.className = 'movieStorage';
    deletebtn.addEventListener('click', () => {
      movieStorage.remove();
      movio.deleteMovie(i);
    });
  }
};

printList();

addBtn.addEventListener('click', () => {
  const movio = new Movio(name.value, director.value);
  movio.addMovie(movio);
});

moviesbtn.addEventListener('click', () => {
  containerMovies.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  printList();
});

addMoviebtn.addEventListener('click', () => {
  containerMovies.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  containerMovies.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});