import styles from "./CamperReviews.module.css";

export default function CamperReviews({ camper }) {
  return (
    <div className={styles.reviewBlock}>
      <h3>Reviews</h3>
      {Array.isArray(camper.reviews) && camper.reviews.length > 0 ? (
        camper.reviews.map((review, idx) => (
          <div key={idx} className={styles.reviewItem}>
            <strong>{review.reviewer_name}</strong>:
            <span> {review.comment}</span>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}
