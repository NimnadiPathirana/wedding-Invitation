const weddingDate = new Date("July 20, 2026 10:30:00").getTime();

const x = setInterval(function(){

let now = new Date().getTime();
let distance = weddingDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

if(distance < 0){
clearInterval(x);
document.querySelector(".countdown").innerHTML = "💍 Married!";
}

},1000);

// RSVP FORM

const scriptURL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

const form = document.getElementById("rsvpForm");

if(form){

form.addEventListener("submit", async (e) => {

e.preventDefault();

const formData = {
name: form.name.value,
guests: form.guests.value,
attendance: form.attendance.value,
message: form.message.value
};

await fetch(scriptURL, {
method: "POST",
body: JSON.stringify(formData)
});

alert("RSVP Submitted Successfully ❤️");

form.reset();

});

}