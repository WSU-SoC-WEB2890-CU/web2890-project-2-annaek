//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap';

// Get the container element
let btnContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


