// getting the html
let addScoreHome = document.getElementById("home")
let addScoreGuest  = document.getElementById("guest")

// Initializing the value of scores
let scoreHome = 0
let scoreGuest = 0

// adding 1 to home score
function home1() {
    scoreHome += 1
    addScoreHome.innerText = scoreHome
}

//adding 2 to home score
function home2() {
    scoreHome += 2
    addScoreHome.innerText = scoreHome
}

//adding 3 to home score
function home3() {
    scoreHome += 3
    addScoreHome.innerText = scoreHome
}

// adding 1 to guest score
function guest1() {
    scoreGuest += 1
    addScoreGuest.innerText = scoreGuest
}

// adding 1 to guest score
function guest2() {
    scoreGuest += 2
    addScoreGuest.innerText = scoreGuest
}

// adding 1 to guest score
function guest3() {
    scoreGuest += 3
    addScoreGuest.innerText = scoreGuest
}