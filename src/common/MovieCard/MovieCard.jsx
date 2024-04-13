import React from "react";
import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MovieCard.style.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList
      .map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj ? genreObj.name : null;
      })
      .filter(Boolean);
  };

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})`,
      }}
      onClick={handleClick}
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge bg="danger" key={index}>
            {genre}
          </Badge>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? "18+" : "All ages"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
