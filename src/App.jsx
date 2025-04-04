import { Col, Container, Row } from "react-bootstrap";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import MovieDetails from "./components/MovieDetails";

export const App = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <MovieDetails />
          <CommentForm />
          <CommentList />
        </Col>
      </Row>
    </Container>
  );
};
