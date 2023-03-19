//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap';

// Get the container element
let btnContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active1");
      } else {
        reveals[i].classList.remove("active1");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);