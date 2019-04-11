$(document).ready(function () {

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
                var results = response.actors;
                var trFill = $("<tr>")
                trFill.text(results);
                $("#search-results").append(trFill);
            })
    });

    //     function displayMovieFunction() {
    //     };

    //    displayMovieFunction()
    //leave me here!
});