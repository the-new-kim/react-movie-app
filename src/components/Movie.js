import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, id, coverImg, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <Link to={`/movie/${id}`}>
        <h2>
          {title}({year})
        </h2>
      </Link>
      <p>{summary}</p>
      {!genres.length ? null : (
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      )}
      <hr></hr>
    </div>
  );
}

Movie.propTypes = {
  title: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  coverImg: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  summary: Proptypes.string.isRequired,
  genre: Proptypes.arrayOf(Proptypes.string),
};

export default Movie;
