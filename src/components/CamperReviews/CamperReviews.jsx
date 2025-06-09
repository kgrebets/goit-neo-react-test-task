import StarIcon from "../StarIcon/StarIcon";
import styles from "./CamperReviews.module.css";

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, idx) => (
        <StarIcon active={idx < rating} />
      ))}
    </div>
  );
}

export default function CamperReviews({ camper: { reviews } }) {
  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <ul className={styles.list}>
      {reviews.map((review, idx) => (
        <li key={idx}>
          <div className={styles.avatarBlock}>
            <div className={styles.avatar}>
              {getInitial(review.reviewer_name)}
            </div>
            <div>
              <div className={styles.name}>{review.reviewer_name}</div>
              <StarRating rating={review.reviewer_rating} />
            </div>
          </div>
          <div className={styles.comment}>{review.comment}</div>
        </li>
      ))}
    </ul>
  );
}
