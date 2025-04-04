import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../redux/commentSlice";

export default function CommentList() {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      {comments.length > 0 ? (
        <ListGroup>
          {comments.map((c) => (
            <ListGroup.Item key={c.id} className="position-relative">
              <div className="fw-bold mb-2">Note: {c.note}/5</div>
              <p>{c.comment}</p>
              <Button
                variant="danger"
                size="sm"
                className="position-absolute bottom-0 end-0 mb-2 me-2"
                onClick={() => dispatch(deleteComment(c.id))}
              >
                Supprimer
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="alert alert-info">Aucun commentaire pour le moment.</p>
      )}
    </div>
  );
}
