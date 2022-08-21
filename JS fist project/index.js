/* HOME */

let homeNumberEl = document.getElementById("homeNumber")
let homeNumber = 0




function addHomeOne(){
    homeNumber += 1 
    homeNumberEl.textContent = homeNumber
    console.log(homeNumber)
}

function addHomeTwo(){
    homeNumber += 2 
    homeNumberEl.textContent = homeNumber
    console.log(homeNumber)
}

function addHomeThree(){
    homeNumber += 3 
    homeNumberEl.textContent = homeNumber
    console.log(homeNumber)
}

/* GUEST */

let guestNumberEl = document.getElementById("guestNumber")
let guestNumber = 0




function addGuestOne(){
    guestNumber += 1 
    guestNumberEl.textContent = guestNumber
    console.log(guestNumber)
}

function addGuestTwo(){
    guestNumber += 2 
    guestNumberEl.textContent = guestNumber
    console.log(guestNumber)
}

function addGuestThree(){
    guestNumber += 3 
    guestNumberEl.textContent = guestNumber
    console.log(guestNumber)
}

/* RESET BUTTON */

let resetButtonEl = document.getElementById("resetNum")

function resetNumber(){
    homeNumber = 0
    guestNumber = 0
    homeNumberEl.textContent = homeNumber
    guestNumberEl.textContent = guestNumber
    }