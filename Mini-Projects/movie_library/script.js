const movieName = document.querySelector(".movie-name");
const movieRating = document.querySelector(".movie-rating");
const movieYear = document.querySelector(".movie-year");
const movieWatch = document.querySelector(".movie-watch");
const warning = document.querySelector(".warning");
const submitBtn = document.querySelector(".add-movie");
const displayMovie = document.querySelector(".display-movie");

let movies = [];

function addMovie() {
     let watchedText = movieWatch.checked;
  let movie = {
    title: movieName.value,
    rating: movieRating.value,
    year: movieYear.value,
    watch: movieWatch.checked,
  };


  if (movieName.value.trim() == "") {
    console.log("check 1");
    warning.textContent = "Please enter the name";
  } else if (movieRating.value < 0 || movieRating.value > 10) {
    console.log("Check 2");

    warning.textContent = "Please enter the rating";
  } else if (movieYear.value < 1950 || movieYear.value > 2026) {
    warning.textContent = "Please enter the year";
  } else {
    
    if (movieWatch.checked == true) {
    // console.log("yes");
    watchedText = "Yes" //i cant think how will i show something ,if the input is checkbox//or should i write movieWatch.checked = "Yes"
    } else {    
    watchedText = "No"}

    movies.push(movie);
    displayMovie.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>" + (i + 1) + " . " + movies[i].title;
      displayMovie.innerHTML =
        displayMovie.innerHTML +"<br>"+ "Rating : "+ movies[i].rating;
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>"+ "Year: "+movies[i].year;
      displayMovie.innerHTML =
        displayMovie.innerHTML + "<br>"+ " Movie Watch : "  +movies[i].watch;
    }
    movieName.value = "";
    movieRating.value = "";
    movieYear.value = "";
    movieWatch.checked = false;
    warning.textContent = "";
  }
}

submitBtn.addEventListener("click", addMovie);


//             displayMovie.innerHTML = displayMovie.innerHTML + "<br>" + (i + 1) + " . " + movies[i].title;
//  when i =o;            ""          =    ""  + <br> + (0+1) . interstaller  ==> 1.interstaller
// when i=1;           interstaller   =  interstaller + <br> + + inception  ==>  1.interstaller
                                                                             //  inception 

                                                                             

//pork peach chili bronzeclad pine jug sugarcanesorghum