// Navbar shadow on scroll
const header = document.querySelector(".navbar");
if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  });
}

// Collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
if (menuToggle) {
  navLinks.forEach(function (l) {
    l.addEventListener("click", function () {
      const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}
