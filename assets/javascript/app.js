$(document).ready(function () {

<<<<<<< HEAD
    var rapidAPI = "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543";

    $("#search-button").on("click", function (event) {
        event.preventDefault()
        var movie = $("#user-input").val();

        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=d62e414d";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
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

                var titleH = $("<h1>").text(title);
                var genreP = $("<h2>").text("Genre: " + genre);
                var ratingP = $("<p>").text("Rated: " + rating);
                var actorsP = $("<p>").text("Starring: " + actors);
                var directorP = $("<p>").text("Directed by: " + director);
                var metaP = $("<p>").text("Metascore: " + metascore);
                var imdbP = $("<p>").text("iMDB score: " + imdb);
                var rtP = $("<p>").text("Rotten Tomatoes Score: " + rt);
                var imgApp = $("<img>").attr("src", img);

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

                // userInput.val("");








                // console.log(actors)
                // trFill.text(actors);
                // $("#search-results").append(trFill);
                // $('#search-results > tbody:last-child').append('<tr>...</tr><tr>...</tr>');
            })
    });

    //     function displayMovieFunction() {
    //     };

    //    displayMovieFunction()
    //leave me here!
=======
  var rapidAPI = "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543";

  function displayMovieFunction() {
    $("#search-button").on("click", function (event) {
      event.preventDefault()
      var movie = $("#user-input").attr("data-name");

      var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=d62e414d";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function (response) {
          console.log(queryURL);
          console.log(response);

          var results = response.data;
          var $rtTr = $("<tr>")
          $rtTr.text(results);
          $("#search-results").append($rtTr);
        })
    });
  };


  //leave me here!
>>>>>>> commit
});