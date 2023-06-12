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
