$(document).ready(function () {
  $(".nav-link").mouseenter(function () {
    $(this).css("color", "#23d3ff");
  });
  $(".nav-link").mouseleave(function () {
    $(this).css("color", "lightgrey");
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
