"use strict"

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const main = document.querySelector("main")
const form = document.querySelector("form")
const search = document.querySelector("input")


// Užkrauna populiarius filmus
fetch(APIURL)
.then(res => res.json())
.then(appendMovieData)
.catch(error => console.log(error))

// Užkrauna filmus pagal search raktažodį
form.addEventListener("submit", function(e){
    e.preventDefault()

    // Jeigu input tuščias, nieko negrąžina
    if(!search.value) return
    
    main.innerHTML = ""

    var searchTerm = search.value

    fetch(SEARCHURL + searchTerm)
    .then(res => res.json())
    .then(appendMovieData)
    .catch(error => console.log(error))

    // Išvalo input
    search.value = ""
})

function appendMovieData(data){
    const results = data.results
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
                <p>${x.overview}</p>
        </div>
        `
        main.append(createMovie)
    })
}