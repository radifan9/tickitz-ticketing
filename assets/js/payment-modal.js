"use strict";

const main = document.querySelector("main");
const btnPay = document.querySelector(".btn-pay");
const paymentModal = document.querySelector(".payment-modal");
const btnPayLater = document.querySelector(".btn-pay-later");

// Button "Pay your order" to Show Modal
btnPay.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  paymentModal.classList.toggle("hidden");
  paymentModal.classList.toggle("modal-on");

  // Create style element to main
  const styleElement = document.createElement("style");

  // Define CSS rules for pseudo-elements/classes
  styleElement.textContent = `
    main::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  `;

  main.appendChild(styleElement);
  main.scrollIntoView(); // Scroll into main
});

// Button Pay Later To Close
btnPayLater.addEventListener("click", (e) => {
  console.log("Pay Later Clicked!");
  e.preventDefault();
  e.stopPropagation();
  paymentModal.classList.toggle("hidden");
  paymentModal.classList.toggle("modal-on");

  // Tumpuk styleElement
  const styleElement = document.createElement("style");

  // Define CSS rules for pseudo-elements/classes
  styleElement.textContent = `
  main::before {
    content: none;
  }
  `;

  main.appendChild(styleElement);
});
