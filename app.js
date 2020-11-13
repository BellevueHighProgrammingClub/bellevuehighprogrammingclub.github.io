
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
