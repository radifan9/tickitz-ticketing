"use strict";

const ctx = document.querySelector(".salesChart");
let dataValue = [];

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

const btnFilter = document.querySelector(".btn-filter");
btnFilter.addEventListener("click", (e) => {
  e.preventDefault();
  // Movie Selection
  const movieSelection = document.querySelector(".movie-options");
  const movieTitle = document.querySelector(".movie-title");
  switch (movieSelection.value) {
    case "spiderman":
      movieTitle.textContent = "Spiderman: Homecoming";
      myChart.data.datasets[0].data = [2, 1, 22, 2, 3, 3, 3];
      break;
    case "avengers":
      movieTitle.textContent = "Avengers: Endgame";
      myChart.data.datasets[0].data = [2, 1, 22, 2, 3, 3, 3];
      break;
    case "superman":
      movieTitle.textContent = "Superman";
      myChart.data.datasets[0].data = [2, 1, 22, 2, 3, 3, 3];
      break;
  }

  // Time Range
  const rangeSelection = document.querySelector(".range-selections");
  switch (rangeSelection.value) {
    case "daily":
      myChart.data.labels = dailyLabel;
      break;

    case "weekly":
      myChart.data.labels = weeksLabel;
      break;

    case "monthly":
      myChart.data.labels = monthsLabel;
      break;
  }

  // Update the chart
  myChart.update();
});

const myChart = new Chart(ctx, {
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
        label: "# of Votes",
        data: dataValue,
        borderWidth: 1,
        fill: true,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
