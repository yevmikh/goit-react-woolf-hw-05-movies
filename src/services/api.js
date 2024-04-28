export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTdmY2RiMDQ0YzM1MWNiMDU0MzBjNzIxZmM3MWYzMCIsInN1YiI6IjY2MmFlYjUyOWFjNTM1MDExZThlZGMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22_Uj8QmqDYwiimB9nQTCC2aQ24zHqn3tCOHcJ_dYM4',
  },
};

export async function getTrandingMovie() {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getReviewMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getCreditsMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getDetailsMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getSearchMovie(query) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}
