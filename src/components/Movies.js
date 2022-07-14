import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movies({ id, coverImage, title, runtime, rating, genres, summary }) {
  return (
    <div className={styles.movie}>
      <h1 className={styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img className={styles.movie_img} src={coverImage} alt={title} />
      <p className={styles.movie_min}>
        <strong>⏱ Runtime : </strong>
        {runtime} min
      </p>
      <p className={styles.movie_score}>
        <strong>⭐️ Rating : </strong>
        {rating} score
      </p>
      <ul className={styles.movie_genre}>
        <strong>🎬 Genre:</strong>
        {genres.map(genre => (
          <li key={genre}> {genre} </li>
        ))}
      </ul>
      <p className={styles.movie_summary}>
        {summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}
      </p>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
