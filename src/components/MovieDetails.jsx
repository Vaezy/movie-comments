import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./moviedetails.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonfakery.com/movies/random/1");
        if (!res.ok) throw new Error("Erreur lors du chargement du film");
        const data = await res.json();
        setMovie(data[0]);
      } catch (err) {
        setError("Impossible de charger le film");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (error) return <p>Erreur : {error}</p>;
  if (loading) return <p>Chargement...</p>;

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
