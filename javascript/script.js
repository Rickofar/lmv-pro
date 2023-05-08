var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});

// When the user clicks on <span>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
