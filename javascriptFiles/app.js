/*
window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("topnav");

var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/
window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("topnav");
var navbarHeight = 60 + navbar.offsetHeight + "px";
var navbarHeightForDropdown = navbar.offsetHeight + "px";
var content = document.getElementById("content");
var dropdown = document.getElementById("dropdown-content");

var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    dropdown.classList.add("dropdown-sticky");
    content.style.marginTop = navbarHeight;
  } 
  else {
    navbar.classList.remove("sticky");
    content.style.marginTop = "0px";
    dropdown.classList.remove("dropdown-sticky");

  }
}
