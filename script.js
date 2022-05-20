"use strict"

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const main = document.querySelector("main")

fetch(APIURL)
.then(res => res.json())
.then(data => {
    const results = data.results
    console.log(results)
    results.map(x => {
        var createMovie = document.createElement("div")
        createMovie.classList.add("movie")
        createMovie.innerHTML =
        `
        <img src="${IMGPATH + x.poster_path}" alt="${x.original_title}">
        <div class="movie-info">
            <h3>${x.original_title}</h3>
            <span class="green">${x.vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
            super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to
            discover what it truly means to be Spider-Man.
            Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
            super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to
            discover what it truly means to be Spider-Man.
            Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
            super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to
            discover what it truly means to be Spider-Man.</p>
        </div>
        `
        main.append(createMovie)
    })

    console.log(results[0].backdrop_path)
})
.catch(error => console.log(error))