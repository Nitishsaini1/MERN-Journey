const movieName = document.querySelector(".movie-name");
const rating = document.querySelector(".rating");
const movieYear = document.querySelector(".year-movie");
const movieWatch = document.querySelector(".movie-watch");
const warning = document.querySelector(".warning");
const addMovie = document.querySelector(".add-movie");
const displayMovie = document.querySelector(".display-movie");

let movies = [];

function folderMovie() {
  let movie = {
    title: movieName.value,
    rating: Math.floor(rating.value),
    year: movieYear.value,
    watch: movieWatch.checked,
    //i dont know how but soon movies will add here
  };
 if (movieName.value.trim() == "") {
    warning.textContent =
      "Please Enter the movie name."; 
    movieName.value = "";
  } else  if (movieName.value == "") {
    warning.textContent = "Please enter a name.";
    // warning.textContent = "";
  } else if (rating.value == "") {
    warning.textContent = "Please enter the rating";
  } else if (rating.value <= 0 || rating.value > 10) {
    warning.textContent = "Please enter the rating from 0 to 10";
  } else if (movieYear.value == "") {
    warning.textContent = "Please enter the rating";
  } else if (movieYear.value <= 1950 || movieYear.value > 2026) {
    warning.textContent = "Please enter the year between 1950 to 2026 ";
  } else {
    // console.log("Hello");
    // displayMovie.textContent = movie;
    movies.push(movie);

    displayMovie.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>" + (i + 1) + "." + movies[i].title;
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>" + movies[i].rating;
      displayMovie.innerHTML = 
        displayMovie.innerHTML + "<br>" + movies[i].year;
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>" + movies[i].watch;
    }

    movieName.value = "";
    rating.value = "";
    movieYear.value = "";
    warning.textContent = "";
    watch.checked = true;
    // movie =""
    // i don't how will this get reset
  }
}
addMovie.addEventListener("click", folderMovie);

// movie
//  │
//  └────────────┐
//               │
//               ▼
//            📁 Object
//               ▲
//               │
// movies[0] ────┘

// movie
//  │
//  └──────────────┐
//                 │
//                 ▼
//              📁 Object
//              │
//              ├── title ───► "Interstellar"
//              └── rating ───► 9.5
//                 ▲
//                 │
// movies[0] ──────┘

//***********************

// let movie = {
//     title: "Interstellar",
//     rating: 9.5
// };

// console.log(movie.title);

//it reads the object
//it store the variable and the object in it
//and define the title and rating and their value to it
//then it read console and then it will now print the interstellar , before it will do this go to movie variable find title and return it value to print nothing more the memory will not change

// let movie = {
//     title: "Interstellar",
//     rating: 9.5
// };

// console.log(movie.rating);

//it store the variable and object in it then store the title and rating inside them
//then it read console from there it evaluate the movie.rating as for that it go inside the movie variable go to rating and return the rating to conosle for print
//no memory it only reads thats why

// let movie = {
//     title: "Interstellar",
//     rating: 9.5
// };

// movie.rating = 10;

// console.log(movie.rating);

//it store varibale and object in it then it store title and rating inside them
//then it read movie.rating = 10; now it go to movie and inside it rating it raplace 9.5 with 10
//then it console and then evaluate the movie.rating and then read the value stored in themovie variable and returm the rating value
//before movie
//           |--title:interstaller
//           |--rating:9.5
//durin when evaluatong movie.rating = 10; it will now replace 9.5 with 10
//after
//      movie
//           |--title:interstaller
//           |--rating:10
//
