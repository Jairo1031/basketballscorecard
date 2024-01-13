let homeScoreEl = document.getElementById("home__score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScore = 0

let guestScoreEl = document.getElementById("guest__score")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScore = 0




function incrementHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore   
};


function incrementHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore   
};

function incrementHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore   
};


function incrementGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore   
};


function incrementGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore   
};

function incrementGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore   
};

