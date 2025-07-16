document.getElementById("Login").addEventListener("submit",function(e){
    e.preventDefault();



const name = document.getElementById("fullname").ariaValueMax.trim();
const nameError = document.getElementById("nameError");
 nameError.textContent = "";
const namePattern = /^[A-Za-z\s]+$/;
 let isValid = true;
if (!namePattern.test(name)) {
        nameError.textContent = "Please enter a valid full name (letters and spaces only).";
        isValid = false;}

const email = document.getElementById(email).value;


const city = document.getElementById(city);
if (!city) return alert("Select a country");
  if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("loginForm").reset();
      }
 });
