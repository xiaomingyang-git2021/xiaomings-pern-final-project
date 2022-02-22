import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    book_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.title.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      book_id: id,
    });
  };
};

export default ReviewForm;