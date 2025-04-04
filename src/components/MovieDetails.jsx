import { Card } from "react-bootstrap";
import "./moviedetails.css";

export default function MovieDetails({ movie }) {
  return (
    <Card className="mb-4">
      {movie.poster_path ? (
        <Card.Img
          variant="top"
          src={movie.poster_path}
          alt={movie.original_title}
          className="movie-poster"
        />
      ) : (
        <p>Aucune image disponible</p>
      )}

      <Card.Body>
        <Card.Title>{movie.original_title || "Titre inconnu"}</Card.Title>
        <Card.Text>
          Date de sortie : {movie.release_date || "Non disponible"}
        </Card.Text>
        <Card.Text>
          Description : {movie.overview || "Aucune description disponible."}
        </Card.Text>
        <Card.Text>
          Note moyenne :{" "}
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10{" "}
          {movie.vote_count ? `(${movie.vote_count} votes)` : "Aucun vote"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
