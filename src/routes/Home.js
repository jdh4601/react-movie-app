import { useState, useEffect } from 'react';
import Movies from '../components/Movies';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.1&sort_by=year`
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map(movie => (
            <Movies
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              runtime={movie.runtime}
              rating={movie.rating}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
