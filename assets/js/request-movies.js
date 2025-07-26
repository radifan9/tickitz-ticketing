const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const GENRES_API = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzNWJiZWRhY2M0NDk3MWMxNDc1MTNkYjJmZWU2MiIsIm5iZiI6MTc1MzQ1NzY4Ni42OTQwMDAyLCJzdWIiOiI2ODgzYTQxNjQ4ZWE1NTk3MzM1NWU5NzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RbZg1YOqjIUcqo3C5T5GzumDBEDDi7KFi85Md91coIg";

const gridMovies = document.querySelector(".g-movie-list");

const getGenreMovieList = async () => {
  const {
    data: { genres },
  } = await axios.get(GENRES_API, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });

  return genres;
};

// Get corresponding name of genre from ID
const getGenreNameFromID = (listOfGenreID, listOfGenreName) => {
  const genres = listOfGenreID.map((id) => {
    // Find matche id with el.id, if found return it immediately
    const genreObj = listOfGenreName.find((el) => id === el.id);
    return genreObj.name;
  });
  return genres;
};

const getMovieList = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(NOW_PLAYING_API, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    // Get list of ID genres and its name
    const genresNamed = await getGenreMovieList();

    const movieList = results.map((movie) => {
      const movieObj = {};

      // Get Movie ID
      Object.assign(movieObj, { id: movie.id });

      // Get Movie Title
      Object.assign(movieObj, { title: movie.original_title });

      // Get Genres Name
      const genres = getGenreNameFromID(movie.genre_ids, genresNamed);
      Object.assign(movieObj, { genres });

      // Get Image src
      Object.assign(movieObj, {
        src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });

      return movieObj;
    });

    // Map movie list, each movie create a new div
    movieList.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("f-singular-movie");
      movieElement.innerHTML = ` 
            <div class="container-image-poster">
              <img src="${movie.src}" alt="${movie.title}" />
              <div class="hover-link">
                <a href="../pages/details.html">Details</a>
                <a href="../pages/details.html">Buy Ticket</a>
              </div>
            </div>

            <h3>${movie.title}</h3>
            <div class="genres">
              <ul>
              
              </ul>
            </div>`;

      // Create ul element
      const ulGenre = movieElement.querySelector("ul");

      // Loop each movie genre then append to ul
      // Only get 2 genre
      movie.genres.slice(0, 2).forEach((genre) => {
        const liGenre = document.createElement("li");
        liGenre.textContent = genre;
        ulGenre.append(liGenre);
      });

      // After every data is ready, append to grid container
      gridMovies.append(movieElement);
    });
  } catch (error) {
    console.error(error);
  }
};

getMovieList();
