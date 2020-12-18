window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("topnav");
var navbarHeight = 60 + navbar.offsetHeight + "px";
var navbarHeightForDropdown = navbar.offsetHeight + "px";
var content = document.getElementById("content");
var dropdownmembers = document.getElementById("dropdown-content");
var dropdownevents = document.getElementById("dropdown-content-events");

var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    dropdownmembers.classList.add("dropdown-sticky");
    dropdownevents.classList.add("dropdown-sticky");
    content.style.marginTop = navbarHeight;
  }
  else {
    navbar.classList.remove("sticky");
    content.style.marginTop = "0px";
    dropdownmembers.classList.remove("dropdown-sticky");
    dropdownevents.classList.remove("dropdown-sticky");

  }
}

$(document).ready(() => {
  $(".img-with-popup-wrapper").hover(function() {
    console.log(this);
  });
});
