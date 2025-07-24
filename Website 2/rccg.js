///// Countdown Section /////
const targetDate = new Date("December 1, 2025 12:00:00").getTime();

const countdown = document.getElementById("countdown");
const countdownInterval = setInterval(() => {

const now = new Date().getTime();
const distance = targetDate - now;

if (distance < 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = "The Holy Ghost Congress has started!";
    return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


///// Guessing Game Section /////

let randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);
let attempts = 0;
let maxAttempts = 5;
let btn = document.getElementById("enterBtn");
let result = document.getElementById("resultBox");

btn.addEventListener("click", function (){
    let userGuess = (document.getElementById("guessInput").value);
    if (userGuess == randomNumber) {
        result.innerHTML = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts + 1} attempts.`;
        result.style.color = "blue";
        btn.disabled = true;
    }

    else if (userGuess < randomNumber) {
        result.innerHTML = `Your guess of ${userGuess} is too low. Try again!`;
        result.style.color = "white";
    }       

    else if (userGuess > randomNumber) {
        result.innerHTML = `Your guess of ${userGuess} is too high. Try again!`;
        result.style.color = "white";
    }
});

let pressEnter = document.getElementById("guessInput");
pressEnter.addEventListener("click", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});

guessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {    
        btn.click();
    }
});
btn.addEventListener("click", function () {
    attempts++;
    if (attempts >= maxAttempts) {
        result.innerHTML = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
        result.style.color = "white";
        btn.disabled = true;
    }
});
document.getElementById("guessInput").addEventListener("input", function () {
    result.innerHTML = ""; // Clear the result box when user types
});


///////slider section//////

var images = [image1, image2, image3, image4, image5];
var imageIndex = 0;

function changeImage() {
    document.images["url"].src = images[imageIndex];
    if  (imageIndex < images.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    } 
}

setInterval(changeImage, 3000); // Change image every 3 seconds