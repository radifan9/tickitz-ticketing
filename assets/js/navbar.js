"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  const navContainer = document.querySelector(".nav-container");
  const navBar = document.querySelector(".navbar");
  const home = navBar.querySelector(".home");
  const movie = navBar.querySelector(".movie");
  const buyTicket = navBar.querySelector(".buy-ticket");
  const signIn = navBar.querySelector(".sign-in");
  const signUp = navBar.querySelector(".sign-up");

  // navContainer.classList.add
  navBar.classList.toggle("nav-drop-down");
  home.classList.toggle("drop-down");
  movie.classList.toggle("drop-down");
  buyTicket.classList.toggle("drop-down");
  signIn.classList.toggle("drop-down");
  signUp.classList.toggle("drop-down");
});
