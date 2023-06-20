// mobile menu

var mobileMenuBtn = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});

$(document).mouseup(function (e) {
  var menu = $(".mobile-menu");
  var close = $(".menu");
  if (
    !menu.is(e.target) && // The target of the click isn't the container.
    menu.has(e.target).length === 1
  ) {
    // Nor a child element of the container
    menu.hide();
  }
});

// var links = document.querySelectorAll(".links, a .active");
// links.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.preventDefault();
//     links.forEach(function (element) {
//       element.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });

// video playlist
$(document).ready(function () {
  $(".video-list video").click(function () {
    $(this).addClass("active-video").siblings().removeClass("active-video");
    let src = $(this).attr("src");
    $(".main-video video").attr("src", src);
  });
});
