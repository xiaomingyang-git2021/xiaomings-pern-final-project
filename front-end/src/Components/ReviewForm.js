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
};

export default ReviewForm;