import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addComment } from "../redux/commentSlice";

const schema = yup.object().shape({
  comment: yup.string().required("Le commentaire est obligatoire").max(500),
  note: yup.number().required("Veuillez sélectionner une note").min(1).max(5),
  acceptConditions: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions"),
});

export default function CommentForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      addComment({
        id: Date.now(),
        comment: data.comment,
        note: data.note,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formComment">
        <h3>Commentaires</h3>
        <Form.Label>Ajouter un commentaire</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register("comment")}
          isInvalid={!!errors.comment}
        />
        <Form.Control.Feedback type="invalid">
          {errors.comment?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formNote" className="mt-3">
        <Form.Label>Note</Form.Label>
        <Form.Select {...register("note")} isInvalid={!!errors.note}>
          <option value="">Sélectionnez une note</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.note?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConditions" className="mt-3">
        <Form.Check
          type="checkbox"
          label="J'accepte les conditions générales"
          {...register("acceptConditions")}
          isInvalid={!!errors.acceptConditions}
        />
        <Form.Control.Feedback type="invalid">
          {errors.acceptConditions?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Ajouter
      </Button>
    </Form>
  );
}
