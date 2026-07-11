const movieInput = document.querySelector(".movie-input");
const warning = document.querySelector(".warning");
const addMovie = document.querySelector(".push");
const removeLast = document.querySelector(".pop");
const addFront = document.querySelector(".unshift");
const  removeFront = document.querySelector(".shift");
const currentMovie = document.querySelector(".current-movie");
const operations = document.querySelector(".operations");

let movies = ["Avengers", "Hulk","Spiderman"];
currentMovie.textContent= movies.join(" | ")

function movieEnd() {
    if (movieInput.value == "") {
        warning.textContent = "Please Enter a movie name";
    } else if (movies.includes(movieInput.value)) {
         warning.textContent = "Movie already exist";
    } else if ( movieInput.value.includes(" ") ){
        warning.textContent = " Cant add a movie with spaces ";
    }  // else if () {} im leaving to logic for movies who has space i cant think of one right now
         else {    
        movies.push(movieInput.value);
        currentMovie.textContent = movies.join(" | ");
        operations.textContent = "Successfully added the "+ (movieInput.value);
        movieInput.value = "";
        warning.textContent = "";
    }
}

function frontAdd() {
    if (movieInput.value == "") {
        warning.textContent = "Please Enter a movie name";
    } else if (movies.includes(movieInput.value)) {
        warning.textContent = "Movie already exist";
    } else  if ( movieInput.value.includes (" ")) {
        warning.textContent = " Cant add a movie with spaces "; // this is not working fine i cant seem to know
    } else  { 
        movies.unshift(movieInput.value);
        operations.textContent = "Successfully added the "+ (movieInput.value);
        currentMovie.textContent = movies.join(" | ");
        movieInput.value = "";
        warning.textContent = "";
    }
}
function lastMovieRemove() {if (movies.length == 0) {
    operations.textContent = "No movie to delete left"
} else {
     let deleted = movies.pop();
    currentMovie.textContent= movies.join(" | ");
    operations.textContent = "Successfully deleted the "+deleted; 
 
}
   
       
}

function frontMovieRemove() {
    if (movies.length == 0) { //im ashamed of myself i looked into older code
        operations.textContent = "No movies to delete left"
    } else {
         let deleted = movies.shift();
      currentMovie.textContent= movies.join(" | ");
    operations.textContent = "Successfully deleted the "+deleted;
    }
     
}


addMovie.addEventListener("click", movieEnd);
addFront.addEventListener("click", frontAdd);
removeLast.addEventListener("click", lastMovieRemove);
removeFront.addEventListener("click", frontMovieRemove);