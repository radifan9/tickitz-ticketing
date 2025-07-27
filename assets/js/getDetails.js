"use strict";

const movie_id = 438631;
const DETAILS_API = `https://api.themoviedb.org/3/movie/${movie_id}`;
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzNWJiZWRhY2M0NDk3MWMxNDc1MTNkYjJmZWU2MiIsIm5iZiI6MTc1MzQ1NzY4Ni42OTQwMDAyLCJzdWIiOiI2ODgzYTQxNjQ4ZWE1NTk3MzM1NWU5NzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RbZg1YOqjIUcqo3C5T5GzumDBEDDi7KFi85Md91coIg";

const mainSection = document.querySelector(".main-section");

const getMovieDetails = async () => {
  const { data } = await axios.get(DETAILS_API, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });

  // Get only the necessary data
  const { id, original_title, overview, poster_path, release_date, genres } =
    data;

  console.log(data);

  const movieDetails = {};
  Object.assign(movieDetails, { id });
  Object.assign(movieDetails, { title: original_title });
  Object.assign(movieDetails, { overview });
  Object.assign(movieDetails, { src: poster_path });
  Object.assign(movieDetails, { releaseDate: release_date });
  Object.assign(movieDetails, { genres });

  return movieDetails;
};

const buildHTMLData = async () => {
  try {
    const movieDetails = await getMovieDetails();

    // Movie Header
    const movieHeader = document.querySelector(".movie-header");
    movieHeader.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movieDetails.src}" alt="${movieDetails.title}" />
    `;

    const elementMovie = `
      <div class="poster-n-info">
          <img
            class="image-poster"
            src="https://image.tmdb.org/t/p/w500${movieDetails.src}"
            alt="${movieDetails.title}"
          />
          <span class="infos">
            <h1>${movieDetails.title}</h1>

            <!-- Genres -->
            <div class="genres">
              <ul>
                
              </ul>
            </div>

            <!-- About Movie -->
            <div class="about-movie">
              <span>
                <div class="title-content">Release Date</div>
                <div class="content-info">${movieDetails.releaseDate}</div>
              </span>
              <span>
                <div class="title-content">Directed by</div>
                <div class="content-info">Jon Watss</div>
              </span>
              <span>
                <div class="title-content" title-content>Duration</div>
                <div class="content-info">2 hours 13 minutes</div>
              </span>
              <span>
                <div class="title-content">Casts</div>
                <div class="content-info">
                  Tom Holland, Michael Keaton, Robert Downey Jr
                </div>
              </span>
            </div>
          </span>
        </div>
        <div class="container-synopsis">
          <h3>Synopsis</h3>
          <p>
            ${movieDetails.overview}
          </p>
        </div>`;

    mainSection.insertAdjacentHTML("afterbegin", elementMovie);
  } catch (error) {
    console.error(error);
  }
};

buildHTMLData();
