let homeScore = 0
let guestScore = 0
let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")

function add1PointHome() {
    homeScore += 1
    homeDisplay.textContent = homeScore
}
function add2PointHome() {
    homeScore += 2
    homeDisplay.textContent = homeScore
}
function add3PointHome() {
    homeScore += 3
    homeDisplay.textContent = homeScore
}

function add1PointGuest() {
    guestScore += 1
    guestDisplay.textContent = guestScore
}
function add2PointGuest() {
    guestScore += 2
    guestDisplay.textContent = guestScore
}
function add3PointGuest() {
    guestScore += 3
    guestDisplay.textContent = guestScore
}