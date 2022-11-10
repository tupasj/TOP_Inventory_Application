const Rating = (props) => {
  const rating = props.rating;

  let ratingStars;
  // eslint-disable-next-line default-case
  switch (rating) {
    case 3.5:
      ratingStars = (
        <div className="rating-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half"></i>
        </div>
      );
      break;
    case 4.0:
      ratingStars = (
        <div className="rating-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      );
      break;
    case 4.5:
      ratingStars = (
        <div className="rating-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half"></i>
        </div>
      );
      break;
    case 5.0:
      ratingStars = (
        <div className="rating-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      );
      break;
  }

  return <>{ratingStars}</>;
};

export { Rating };
