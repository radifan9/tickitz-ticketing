"use strict";

const ctx = document.querySelector(".salesChart");
const ticketCtx = document.querySelector(".ticketChart")
let dataValue = [];
let dataValueTicket = [];

const dailyLabel = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const weeksLabel = ["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week"];
const monthsLabel = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// Create vertical linier gradient as a background fill
// Expect 2 params : 
function getGradient(ctx, chartArea) {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom,
  );
  gradient.addColorStop(0, "rgba(29, 78, 216, 0.5)"); // Solid blue at top
  gradient.addColorStop(1, "rgba(29, 78, 216, 0)"); // Transparent at bottom
  return gradient;
}

let gradientFill;

// Helper function to generate random data array
// Length is based on time range
const getRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 30) + 1);
};

// -------------------------------------------------------
// Sales Chart
const btnFilter = document.querySelector(".btn-filter");
btnFilter.addEventListener("click", (e) => {
  e.preventDefault();
  // category Selection
  const categorySelection = document.querySelector(".category-options");
  const categoryTitle = document.querySelector(".category-title");
  switch (categorySelection.value) {
    case "spiderman":
      categoryTitle.textContent = "Spiderman: Homecoming";
      break;
    case "avengers":
      categoryTitle.textContent = "Avengers: Endgame";
      break;
    case "superman":
      categoryTitle.textContent = "Superman";
      break;
  }

  // Time Range
  const rangeSelection = document.querySelector(".range-selections");
  let label;
  switch (rangeSelection.value) {
    case "daily":
      label = dailyLabel;
      break;

    case "weekly":
      label = weeksLabel;
      break;

    case "monthly":
      label = monthsLabel;
      break;
  }

  // Assign label
  salesChart.data.labels = label;

  // Assign new data based on number time range
  salesChart.data.datasets[0].data = getRandomData(label.length);

  // Update the chart
  salesChart.update();
});

// Creates Sales Chart
const salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "# of Sales",
        data: dataValue,
        data: dataValue,
        borderWidth: 1,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "#1D4ED8",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  },
});

// -------------------------------------------------------
// Ticket Chart
const btnFilterTicket = document.querySelector(".btn-filter-ticket");
btnFilterTicket.addEventListener("click", (e) => {
  e.preventDefault();
  // Category Selection
  const categorySelection = document.querySelector(".category-options");
  const categoryTitle = document.querySelector(".category-title");
  switch (categorySelection.value) {
    case "ebv":
      categoryTitle.textContent = "ebv.id,";
      break;
    case "cineone21":
      categoryTitle.textContent = "CineOne21,";
      break;
    case "hiflix":
      categoryTitle.textContent = "hiflix,";
      break;
  }

  // Location
  const locationSelection = document.querySelector(".location-selections");
  const locationTitle = document.querySelector(".location-title");
  let label;
  switch (locationSelection.value) {
    case "bogor":
      locationTitle.textContent = "Bogor"
      break;

    case "purwokerto":
      locationTitle.textContent = "Purwokerto"
      break;

    case "surabaya":
      locationTitle.textContent = "Surabaya"
      break;
  }



  // Assign new data based on number time range
  ticketChart.data.datasets[0].data = getRandomData(monthsLabel.length);

  // Update the chart
  ticketChart.update();
});

// Creates Ticket Chart
const ticketChart = new Chart(ticketCtx, {
  type: "line",
  data: {
    labels: monthsLabel,
    datasets: [
      {
        label: "# of Sales",
        data: dataValueTicket,
        borderWidth: 1,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "#1D4ED8",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  },
});
