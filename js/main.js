// footer navigation accordion function ************
var acc = document.getElementsByClassName("expander__toggle");
var i;

for (i = 0; i < acc.length; i++) {
  // add the event listner function for all the accordions
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
  } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
  } 
});
}
// footer navigation accordeion end ************

// slide show functionality ************
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// slide show functionality ends ************

// hamburger menu toggle ************
function hamburgerToggleMenu() {
    var menu = document.getElementById("hamburgerMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
// hamburger end ************