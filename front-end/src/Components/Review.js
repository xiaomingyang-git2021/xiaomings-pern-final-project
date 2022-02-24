import { useState } from "react";
import ReviewForm from "./ReviewForm";
import Button from "react-bootstrap/Button";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {
        viewEditForm ? (
          <ReviewForm
            reviewDetails={review}
            toggleView={toggleView}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h4>
              {review.title} <span>{review.rating}</span>
            </h4>
            <h5>{review.reviewer}</h5>
            <p>{review.content}</p>
            <Button variant="primary" size="sm" onClick={toggleView}>edit this review</Button>{' '}&nbsp;&nbsp;&nbsp;
            <Button variant="warning" size="sm" onClick={() => handleDelete(review.id)}>delete</Button>
          </div>
        )
      }
    </div>
  );
};

export default Review;