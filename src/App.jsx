import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import MovieDetails from "./components/MovieDetails";

export const App = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("https://jsonfakery.com/movies/random/1")
      .then((response) => response.json())
      .then((data) => {
        setMovie(data[0]);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          {movie && <MovieDetails movie={movie} />}
          <CommentForm />
          <CommentList />
        </Col>
      </Row>
    </Container>
  );
};
