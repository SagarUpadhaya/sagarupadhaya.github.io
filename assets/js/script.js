'use strict';

// sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const selectedPage = this.innerText.toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === selectedPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});