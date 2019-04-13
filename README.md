<<<<<<< HEAD
# project1
Movie App
<<<<<<< HEAD
=======
Movie app
...
API KEYS

fandango/rt

http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=[your_api_key]
api key= "rrhx9vtcs5fpnqkjdcvtt6zu"

2 calls/second
unlimited calls per day


IMDB

unirest.get("movie-database-imdb-alternative.https://rapidapi.p.rapidapi.com/?page=1&r=json&s=Avengers+Endgame")
.header("X-RapidAPI-Host", "movie-database-imdb-alternative.https://rapidapi.p.rapidapi.com")
.header("X-RapidAPI-Key", "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

Netflix

unirest.get("unogs-unogs-v1.https://rapidapi.p.rapidapi.com/aaapi.cgi")
.header("X-RapidAPI-Host", "unogs-unogs-v1.https://rapidapi.p.rapidapi.com")
.header("X-RapidAPI-Key", "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

Amazon Prime

unirest.get("https://streamzui-streamzui-v1.p.rapidapi.com/deleted?country={country}&days={days}&page={page}")
.header("X-RapidAPI-Host", "streamzui-streamzui-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "7ba93ae7bfmsh489625be869c93bp1fc810jsne3c26e878543")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=rrhx9vtcs5fpnqkjdcvtt6zu&q=alien&page_limit=1
>>>>>>> commit
=======
....
>>>>>>> 3ad9374b7783cb99aa187d5a0abb5bc89eeb5153
