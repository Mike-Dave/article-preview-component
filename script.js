"use strict";

// Selecting HTML elements
const shareButton = document.querySelectorAll(".icon-share");
const mediaQuery = window.matchMedia("(min-width: 800px)");
const mobileContactInfo = document.querySelector(".main--section--three");
const author = document.querySelector(".main--section--two");
const desktopContactInfo = document.querySelector(".desktop--contact--info ");
const mobileInfoClick = document.querySelector(".mobile-click");
const deskInfoClick = document.querySelector(".desktop-click");

// Listening for events from the share-icon
shareButton.forEach((element) => {
  element.addEventListener("click", function () {
    // If the viewport matches the set sizes in the media query
    if (!mediaQuery.matches) {
      mobileInfoClick.classList.toggle("extra");
      mobileContactInfo.classList.toggle("hidden");
      author.classList.toggle("hidden");
      deskInfoClick.classList.toggle("extra");
    } else {
      desktopContactInfo.classList.toggle("hidden");
      deskInfoClick.classList.toggle("extra");
    }
  });
});

// To Check for when the viewport changes
mediaQuery.addEventListener("change", function (e) {
  if (e.matches) {
    mobileContactInfo.classList.add("hidden");
    author.classList.remove("hidden");
    deskInfoClick.classList.remove("extra");
  } else {
    mobileInfoClick.classList.remove("extra");
    deskInfoClick.classList.remove("extra");
    desktopContactInfo.classList.add("hidden");
  }
});
