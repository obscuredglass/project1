$(document).ready(function () {

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
});