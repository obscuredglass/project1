$(document).ready(function () {

  // var rapidAPI = "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543";
  //genreSearch holds formatted version of genre0
  //recString holds converted value for genre for omdb value of genre stores in genreSearch

  var genreSearch = ""
  var genre0
  var recString = ""
  var tmdbKey = "7bc99c9ee75ec56de6b188d9007199dc"

//on click button to search movie via api cal'
  $("#search-button").on("click", function (event) {
    event.preventDefault()
    var movie = $("#user-input").val();

    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=d62e414d";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      //grab the information and set it to variables
      .then(function (response) {
        console.log(queryURL);
        console.log(response);
        var title = response.Title;
        var actors = response.Actors;
        var director = response.Director;
        var genre = response.Genre;
        var metascore = response.Metascore;
        var rating = response.Rated;
        var imdb = response.Ratings[0].Value;
        var rt = response.Ratings[1].Value;
        var img = response.Poster;
        //takes the response and goes down the object to genre, takes only the first string entry prior to the first ",""
        genre0 = response.Genre.split(", ")[0];
        console.log(genre0)
        console.log(genreSearch);

        //set each one to tags and save them in variables
        var titleH = $("<h1>").text(title);
        var genreP = $("<h2>").text("Genre: " + genre);
        var ratingP = $("<p>").text("Rated: " + rating);
        var actorsP = $("<p>").text("Starring: " + actors);
        var directorP = $("<p>").text("Directed by: " + director);
        var metaP = $("<p>").text("Metascore: " + metascore);
        var imdbP = $("<p>").text("iMDB score: " + imdb);
        var rtP = $("<p>").text("Rotten Tomatoes Score: " + rt);
        var imgApp = $("<img>").attr("src", img);
        //append to the page
        $("#movie-display").append(
          titleH,
          genreP,
          imgApp,
          ratingP,
          actorsP,
          directorP,
          genreP,
          metaP,
          imdbP,
          rtP,
        );

        //image
        //title
        //var rt
        //x3

        //var genre up top+

        // /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc
        //  https://api.themoviedb.org/3/movie/550?api_key=7bc99c9ee75ec56de6b188d9007199dc
        //once we got it goin, nix the button and make it fluid movement
        //take top three results and append to card on right for recommendations
        //on click function for each recommendation on image
        //further query for omdb to produce the results in movie image
        //rinse and repeat
      });

  });
  //call api for tmdb to search descending rating of genre with button click
  $("#rec-button").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")

    //save data from genre0 in a variable as lower case
    genreSearch = genre0.toLowerCase();
    console.log(genreSearch);

    //conditional statement to convert the genre from omdb's format to tmdb's format for genres
    if (genreSearch === "action") {
      recString = "28";
    } else if (genreSearch === "animated") {
      recString = "16";
    } else if (genreSearch === "documentary") {
      recString= "99";
    } else if (genreSearch === "drama") {
      recString = "18";
    } else if (genreSearch === "family") {
      recString = "10751";
    } else if (genreSearch === "fantasy") {
      recString = "14";
    } else if (genreSearch === "history") {
      recString = "36";
    } else if (genreSearch === "comedy") {
      recString = "35";
    } else if (genreSearch === "war") {
      recString = "10752"
    } else if (genreSearch === "horror"){
      recString = "27";
    } else if (genreSearch === "crime") {
      recString = "80";
    } else if (genreSearch === "music") {
      recString = "10402";  
    } else if (genreSearch === "mystery") {
      recString = "9648";
    } else if (genreSearch === "romance") {
      recString = "10749";
    } else if (genreSearch === "sci fi") {
      recString = "878";
    } else if (genreSearch === "tv movie") {
      recString = "10770";
    } else if (genreSearch === "thriller") {
      recString = "53";
    } else if (genreSearch === "western") {
      recString = "37";
    } else if (genreSearch === "adventure") {
      recString = "12";}
    

    console.log(recString);
  });


  //leave me here!
});