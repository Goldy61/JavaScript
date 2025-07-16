document.getElementById("Login").addEventListener("submit",function(e){
    e.preventDefault();



const fullname = document.getElementById("fullname").ariaValueMax.trim();
const nameRegex = /^[A-Za-z ]{3,}$/;
if (!nameRegex.test(fullname)) return alert("Invalid full name");

const email = document.getElementById(email).value;


const city = document.getElementById(city);
if (!city) return alert("Select a country");
  if (!terms) return alert("You must accept the terms");
 alert("Problem 1: Validation Passed!");
 });