"use strict";

const navContainer = document.querySelector(".nav-container");
const navBarHorizontal = document.querySelector(".navbar-horizontal");
const navBarDrop = document.querySelector(".navbar-drop");
const home = document.querySelector(".home");
const movie = document.querySelector(".movie");
const buyTicket = document.querySelector(".buy-ticket");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const signOut = document.querySelector(".sign-out");
const profilePic = document.querySelector(".profile-pic");
const profileClicked = document.querySelector(".profile-clicked");
const hamburgerMenuHorizontal = document.querySelector(".hamburger-menu");
const hamburgerMenuDropdown = document.querySelector(
  ".navbar-drop .hamburger-menu"
);

profilePic.addEventListener("click", () => {
  profileClicked.classList.toggle("hidden");
});

signOut.addEventListener("click", () => {
  window.localStorage.removeItem("activeUser");
  window.location.reload();
});

hamburgerMenuHorizontal.addEventListener("click", () => {
  console.log("Hamburger clicked");

  navBarHorizontal.classList.toggle("hidden");
  navBarDrop.classList.toggle("hidden");

  const home = navBarDrop.querySelector(".home");
  const movie = navBarDrop.querySelector(".movie");
  const buyTicket = navBarDrop.querySelector(".buy-ticket");
  const signIn = navBarDrop.querySelector(".sign-in");
  const signUp = navBarDrop.querySelector(".sign-up");

  home.classList.toggle("hidden");
  movie.classList.toggle("hidden");
  buyTicket.classList.toggle("hidden");
  signIn.classList.toggle("hidden");
  signUp.classList.toggle("hidden");

  home.classList.toggle("drop-down-block");
  movie.classList.toggle("drop-down-block");
  buyTicket.classList.toggle("drop-down-block");
  signIn.classList.toggle("drop-down-block");
  signUp.classList.toggle("drop-down-block");
});

hamburgerMenuDropdown.addEventListener("click", () => {
  console.log("Hamburger clicked");

  navBarHorizontal.classList.toggle("hidden");
  navBarDrop.classList.toggle("hidden");

  const home = navBarDrop.querySelector(".home");
  const movie = navBarDrop.querySelector(".movie");
  const buyTicket = navBarDrop.querySelector(".buy-ticket");
  const signIn = navBarDrop.querySelector(".sign-in");
  const signUp = navBarDrop.querySelector(".sign-up");

  home.classList.toggle("hidden");
  movie.classList.toggle("hidden");
  buyTicket.classList.toggle("hidden");
  signIn.classList.toggle("hidden");
  signUp.classList.toggle("hidden");

  home.classList.toggle("drop-down-block");
  movie.classList.toggle("drop-down-block");
  buyTicket.classList.toggle("drop-down-block");
  signIn.classList.toggle("drop-down-block");
  signUp.classList.toggle("drop-down-block");
});

if (localStorage.getItem("activeUser")) {
  signIn.classList.remove("drop-down-block");
  signUp.classList.remove("drop-down-block");
  signIn.classList.add("hidden");
  signUp.classList.add("hidden");

  let userLocalStorage = JSON.parse(localStorage.getItem("user1"));
  const profileName = document.querySelector(".profile-name");
  profileName.classList.toggle("hidden");
  const email = profileName.querySelector("p");
  email.textContent = userLocalStorage.email;

  const profilePic = document.querySelector(".profile-pic");
  profilePic.classList.toggle("hidden");
} else {
  signOut.classList.toggle("hidden");
}
