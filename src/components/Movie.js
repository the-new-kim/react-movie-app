import Proptypes from "prop-types";

function Movie({ title, coverImg, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        {title}({year})
      </h2>
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
  coverImg: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  summary: Proptypes.string.isRequired,
  genre: Proptypes.arrayOf(Proptypes.string),
};

export default Movie;
