/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const modalBtn = document.querySelectorAll("#showModalBtn");
const modalBody = document.querySelector(".modal-body");

function showModal() {
  new bootstrap.Modal(document.querySelector("#showModal"), {
    keyboard: false,
    backdrop: "static",
  }).show();
}

[...modalBtn].forEach((a) => {
  a.addEventListener("click", function () {
    if (a.dataset.index == "aws1") {
      modalBody.innerHTML = `<img src="assets/img/sertifikat/aws.jpeg" alt="AWS 1">`;
    } else if (a.dataset.index == "aws1") {
      modalBody.innerHTML = `<img src="assets/img/sertifikat/aws-2.jpeg" alt="AWS 2">`;
    }
    showModal();
  });
});
