import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Review from "./components/Review";
import MovieCard from "../../common/MovieCard/MovieCard";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [showReviews, setShowReviews] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
        const reviewResponse = await api.get(`/movie/${id}/reviews`);
        setReviewCount(reviewResponse.data.results.length);
        setReviews(reviewResponse.data.results);
        const recommendationResponse = await api.get(
          `/movie/${id}/recommendations`
        );
        setRecommendations(recommendationResponse.data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="img-fluid"
        />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        {movie.genres &&
          movie.genres.map((genre, index) => (
            <span key={index}>{genre.name}</span>
          ))}
        <p>Popularity: {movie.popularity}</p>
        <p>Overview: {movie.overview}</p>
        <p>Budget: ${movie.budget.toLocaleString()}</p>
        <p>Release Date: {movie.release_date}</p>
        <button onClick={toggleReviews} style={{ cursor: "pointer" }}>
          {reviewCount} Reviews <span>&#x25BC;</span>
        </button>
        {showReviews && (
          <div>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))
            ) : (
              <p>No reviews found.</p>
            )}
          </div>
        )}
        <h2>Recommended Movies</h2>
        <div className="recommendations">
          {recommendations.map((rec) => (
            <MovieCard key={rec.id} movie={rec} /> // 각 추천 영화를 MovieCard 컴포넌트로 랜더링
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
